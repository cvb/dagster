import copy
import os
import pickle
import sys
import tempfile
import uuid
from typing import Any, Dict, List, Optional, Sequence, Set, Union

import nbformat
import papermill
from dagster import (
    AssetMaterialization,
    EventMetadataEntry,
    InputDefinition,
    OpDefinition,
    Output,
    OutputDefinition,
    SolidDefinition,
    check,
    seven,
)
from dagster.core.definitions.events import Failure, RetryRequested
from dagster.core.definitions.reconstructable import ReconstructablePipeline
from dagster.core.definitions.utils import validate_tags
from dagster.core.execution.context.compute import SolidExecutionContext
from dagster.core.execution.context.input import build_input_context
from dagster.core.execution.context.system import StepExecutionContext
from dagster.core.execution.plan.outputs import StepOutputHandle
from dagster.core.storage.file_manager import FileHandle
from dagster.serdes import pack_value
from dagster.seven import get_system_temp_directory
from dagster.utils import mkdir_p, safe_tempfile_path
from dagster.utils.error import serializable_error_info_from_exc_info
from papermill.engines import papermill_engines
from papermill.iorw import load_notebook_node, write_ipynb

from .compat import ExecutionError
from .engine import DagstermillEngine
from .errors import DagstermillError
from .translator import DagsterTranslator


# https://github.com/nteract/papermill/blob/17d4bbb3960c30c263bca835e48baf34322a3530/papermill/parameterize.py
def _find_first_tagged_cell_index(nb, tag):
    parameters_indices = []
    for idx, cell in enumerate(nb.cells):
        if tag in cell.metadata.tags:
            parameters_indices.append(idx)
    if not parameters_indices:
        return -1
    return parameters_indices[0]


# This is based on papermill.parameterize.parameterize_notebook
# Typically, papermill injects the injected-parameters cell *below* the parameters cell
# but we want to *replace* the parameters cell, which is what this function does.
def replace_parameters(context, nb, parameters):
    """Assigned parameters into the appropiate place in the input notebook

    Args:
        nb (NotebookNode): Executable notebook object
        parameters (dict): Arbitrary keyword arguments to pass to the notebook parameters.
    """
    check.dict_param(parameters, "parameters")

    # Copy the nb object to avoid polluting the input
    nb = copy.deepcopy(nb)

    # papermill method chooses translator based on kernel_name and language, but we just call the
    # DagsterTranslator to generate parameter content based on the kernel_name
    param_content = DagsterTranslator.codify(parameters)

    newcell = nbformat.v4.new_code_cell(source=param_content)
    newcell.metadata["tags"] = ["injected-parameters"]

    param_cell_index = _find_first_tagged_cell_index(nb, "parameters")
    injected_cell_index = _find_first_tagged_cell_index(nb, "injected-parameters")
    if injected_cell_index >= 0:
        # Replace the injected cell with a new version
        before = nb.cells[:injected_cell_index]
        after = nb.cells[injected_cell_index + 1 :]
        check.int_value_param(param_cell_index, -1, "param_cell_index")
        # We should have blown away the parameters cell if there is an injected-parameters cell
    elif param_cell_index >= 0:
        # Replace the parameter cell with the injected-parameters cell
        before = nb.cells[:param_cell_index]
        after = nb.cells[param_cell_index + 1 :]
    else:
        # Inject to the top of the notebook, presumably first cell includes dagstermill import
        context.log.debug(
            (
                "Executing notebook with no tagged parameters cell: injecting boilerplate in first "
                "cell."
            )
        )
        before = []
        after = nb.cells

    nb.cells = before + [newcell] + after
    nb.metadata.papermill["parameters"] = seven.json.dumps(parameters)

    return nb


def get_papermill_parameters(step_context, inputs, output_log_path, dagster_decorator_name):
    check.inst_param(step_context, "step_context", StepExecutionContext)
    check.param_invariant(
        isinstance(step_context.run_config, dict),
        "step_context",
        "StepExecutionContext must have valid run_config",
    )
    check.dict_param(inputs, "inputs", key_type=str)

    run_id = step_context.run_id
    temp_dir = get_system_temp_directory()
    marshal_dir = os.path.normpath(os.path.join(temp_dir, "dagstermill", str(run_id), "marshal"))
    mkdir_p(marshal_dir)

    if not isinstance(step_context.pipeline, ReconstructablePipeline):
        raise DagstermillError(
            f"Can't execute a dagstermill {dagster_decorator_name} from a job/pipeline that is not "
            "reconstructable. Use the reconstructable() function if executing from python"
        )

    dm_executable_dict = step_context.pipeline.to_dict()

    dm_context_dict = {
        "output_log_path": output_log_path,
        "marshal_dir": marshal_dir,
        "run_config": step_context.run_config,
    }

    dm_solid_handle_kwargs = step_context.solid_handle._asdict()
    dm_step_key = step_context.step.key

    parameters = {}

    parameters["__dm_context"] = dm_context_dict
    parameters["__dm_executable_dict"] = dm_executable_dict
    parameters["__dm_pipeline_run_dict"] = pack_value(step_context.pipeline_run)
    parameters["__dm_solid_handle_kwargs"] = dm_solid_handle_kwargs
    parameters["__dm_instance_ref_dict"] = pack_value(step_context.instance.get_ref())
    parameters["__dm_step_key"] = dm_step_key
    parameters["__dm_input_names"] = list(inputs.keys())

    return parameters


def _dm_solid_compute(
    name,
    notebook_path,
    dagster_decorator_name,
    output_notebook=None,
    asset_key_prefix=None,
):
    check.str_param(name, "name")
    check.str_param(notebook_path, "notebook_path")
    check.opt_str_param(output_notebook, "output_notebook")
    check.opt_list_param(asset_key_prefix, "asset_key_prefix")

    def _t_fn(step_context, inputs):
        check.inst_param(step_context, "step_context", SolidExecutionContext)
        check.param_invariant(
            isinstance(step_context.run_config, dict),
            "context",
            "StepExecutionContext must have valid run_config",
        )

        step_execution_context = step_context.get_step_execution_context()

        with tempfile.TemporaryDirectory() as output_notebook_dir:
            with safe_tempfile_path() as output_log_path:

                prefix = str(uuid.uuid4())
                parameterized_notebook_path = os.path.join(
                    output_notebook_dir, f"{prefix}-inter.ipynb"
                )

                executed_notebook_path = os.path.join(output_notebook_dir, f"{prefix}-out.ipynb")

                # Scaffold the registration here
                nb = load_notebook_node(notebook_path)
                nb_no_parameters = replace_parameters(
                    step_execution_context,
                    nb,
                    get_papermill_parameters(
                        step_execution_context, inputs, output_log_path, dagster_decorator_name
                    ),
                )
                write_ipynb(nb_no_parameters, parameterized_notebook_path)

                try:
                    papermill_engines.register("dagstermill", DagstermillEngine)
                    papermill.execute_notebook(
                        input_path=parameterized_notebook_path,
                        output_path=executed_notebook_path,
                        engine_name="dagstermill",
                        log_output=True,
                    )

                except Exception as ex:  # pylint: disable=broad-except
                    step_execution_context.log.warn(
                        "Error when attempting to materialize executed notebook: {exc}".format(
                            exc=str(serializable_error_info_from_exc_info(sys.exc_info()))
                        )
                    )
                    # pylint: disable=no-member
                    # compat:
                    if isinstance(ex, ExecutionError) and (
                        ex.ename == "RetryRequested" or ex.ename == "Failure"
                    ):
                        step_execution_context.log.warn(
                            f"Encountered raised {ex.ename} in notebook. Use dagstermill.yield_event "
                            "with RetryRequested or Failure to trigger their behavior."
                        )

                    raise

            step_execution_context.log.debug(
                "Notebook execution complete for {name} at {executed_notebook_path}.".format(
                    name=name,
                    executed_notebook_path=executed_notebook_path,
                )
            )

            executed_notebook_file_handle = None
            try:
                # use binary mode when when moving the file since certain file_managers such as S3
                # may try to hash the contents
                with open(executed_notebook_path, "rb") as fd:
                    executed_notebook_file_handle = step_context.resources.file_manager.write(
                        fd, mode="wb", ext="ipynb"
                    )
                    executed_notebook_materialization_path = executed_notebook_file_handle.path_desc

                yield AssetMaterialization(
                    asset_key=(asset_key_prefix + [f"{name}_output_notebook"]),
                    description="Location of output notebook in file manager",
                    metadata_entries=[
                        EventMetadataEntry.fspath(executed_notebook_materialization_path)
                    ],
                )

            except Exception:  # pylint: disable=broad-except
                # if file manager writing errors, e.g. file manager is not provided, we throw a warning
                # and fall back to the previously stored temp executed notebook.
                step_context.log.warning(
                    "Error when attempting to materialize executed notebook using file manager: "
                    f"{str(serializable_error_info_from_exc_info(sys.exc_info()))}"
                    f"\nNow falling back to local: notebook execution was temporarily materialized at {executed_notebook_path}"
                    "\nIf you have supplied a file manager and expect to use it for materializing the "
                    'notebook, please include "file_manager" in the `required_resource_keys` argument '
                    f"to `{dagster_decorator_name}`"
                )
                executed_notebook_materialization_path = executed_notebook_path

            if output_notebook is not None:
                yield Output(executed_notebook_file_handle, output_notebook)

            # deferred import for perf
            import scrapbook

            output_nb = scrapbook.read_notebook(executed_notebook_path)

            for (output_name, _) in step_execution_context.solid_def.output_dict.items():
                data_dict = output_nb.scraps.data_dict
                if output_name in data_dict:
                    # read outputs that were passed out of process via io manager from `yield_result`
                    step_output_handle = StepOutputHandle(
                        step_key=step_execution_context.step.key, output_name=output_name
                    )
                    output_context = step_execution_context.get_output_context(step_output_handle)
                    io_manager = step_execution_context.get_io_manager(step_output_handle)
                    value = io_manager.load_input(
                        build_input_context(upstream_output=output_context)
                    )

                    yield Output(value, output_name)

            for key, value in output_nb.scraps.items():
                if key.startswith("event-"):
                    with open(value.data, "rb") as fd:
                        event = pickle.loads(fd.read())
                        if isinstance(event, (Failure, RetryRequested)):
                            raise event
                        else:
                            yield event

    return _t_fn


def define_dagstermill_solid(
    name,
    notebook_path,
    input_defs=None,
    output_defs=None,
    config_schema=None,
    required_resource_keys=None,
    output_notebook=None,
    asset_key_prefix=None,
    description=None,
    tags=None,
):
    """Wrap a Jupyter notebook in a solid.

    Arguments:
        name (str): The name of the solid.
        notebook_path (str): Path to the backing notebook.
        input_defs (Optional[List[InputDefinition]]): The solid's inputs.
        output_defs (Optional[List[OutputDefinition]]): The solid's outputs. Your notebook should
            call :py:func:`~dagstermill.yield_result` to yield each of these outputs.
        required_resource_keys (Optional[Set[str]]): The string names of any required resources.
        output_notebook (Optional[str]): If set, will be used as the name of an injected output of
            type :py:class:`~dagster.FileHandle` that will point to the executed notebook (in
            addition to the :py:class:`~dagster.AssetMaterialization` that is always created). This
            respects the :py:class:`~dagster.core.storage.file_manager.FileManager` configured on
            the pipeline resources via the "file_manager" resource key, so, e.g.,
            if :py:class:`~dagster_aws.s3.s3_file_manager` is configured, the output will be a :
            py:class:`~dagster_aws.s3.S3FileHandle`.
        asset_key_prefix (Optional[Union[List[str], str]]): If set, will be used to prefix the
            asset keys for materialized notebooks.
        description (Optional[str]): If set, description used for solid.
        tags (Optional[Dict[str, str]]): If set, additional tags used to annotate solid.
            Dagster uses the tag keys `notebook_path` and `kind`, which cannot be
            overwritten by the user.

    Returns:
        :py:class:`~dagster.SolidDefinition`
    """
    check.str_param(name, "name")
    check.str_param(notebook_path, "notebook_path")
    input_defs = check.opt_list_param(input_defs, "input_defs", of_type=InputDefinition)
    output_defs = check.opt_list_param(output_defs, "output_defs", of_type=OutputDefinition)
    required_resource_keys = check.opt_set_param(
        required_resource_keys, "required_resource_keys", of_type=str
    )
    if output_notebook is not None:
        required_resource_keys.add("file_manager")
    if isinstance(asset_key_prefix, str):
        asset_key_prefix = [asset_key_prefix]

    asset_key_prefix = check.opt_list_param(asset_key_prefix, "asset_key_prefix", of_type=str)

    default_description = f"This solid is backed by the notebook at {notebook_path}"
    description = check.opt_str_param(description, "description", default=default_description)

    user_tags = validate_tags(tags)
    if tags is not None:
        check.invariant(
            "notebook_path" not in tags,
            "user-defined solid tags contains the `notebook_path` key, but the `notebook_path` key is reserved for use by Dagster",
        )
        check.invariant(
            "kind" not in tags,
            "user-defined solid tags contains the `kind` key, but the `kind` key is reserved for use by Dagster",
        )
    default_tags = {"notebook_path": notebook_path, "kind": "ipynb"}

    return SolidDefinition(
        name=name,
        input_defs=input_defs,
        compute_fn=_dm_solid_compute(
            name,
            notebook_path,
            "define_dasgstermill_solid",
            output_notebook,
            asset_key_prefix=asset_key_prefix,
        ),
        output_defs=output_defs
        + (
            [OutputDefinition(dagster_type=FileHandle, name=output_notebook)]
            if output_notebook
            else []
        ),
        config_schema=config_schema,
        required_resource_keys=required_resource_keys,
        description=description,
        tags={**user_tags, **default_tags},
    )


def define_dagstermill_op(
    name: str,
    notebook_path: str,
    input_defs: Optional[Sequence[InputDefinition]] = None,
    output_defs: Optional[Sequence[OutputDefinition]] = None,
    config_schema: Optional[Union[Any, Dict[str, Any]]] = None,
    required_resource_keys: Optional[Set[str]] = None,
    output_notebook: Optional[str] = None,
    asset_key_prefix: Optional[str] = None,
    description: Optional[str] = None,
    tags: Optional[Dict[str, Any]] = None,
):
    """Wrap a Jupyter notebook in an op.

    Arguments:
        name (str): The name of the op.
        notebook_path (str): Path to the backing notebook.
        input_defs (Optional[List[InputDefinition]]): The op's inputs.
        output_defs (Optional[List[OutputDefinition]]): The op's outputs. Your notebook should
            call :py:func:`~dagstermill.yield_result` to yield each of these outputs.
        required_resource_keys (Optional[Set[str]]): The string names of any required resources.
        output_notebook (Optional[str]): If set, will be used as the name of an injected output of
            type :py:class:`~dagster.FileHandle` that will point to the executed notebook (in
            addition to the :py:class:`~dagster.AssetMaterialization` that is always created). This
            respects the :py:class:`~dagster.core.storage.file_manager.FileManager` configured on
            the job resources via the "file_manager" resource key, so, e.g.,
            if :py:class:`~dagster_aws.s3.s3_file_manager` is configured, the output will be a :
            py:class:`~dagster_aws.s3.S3FileHandle`.
        asset_key_prefix (Optional[Union[List[str], str]]): If set, will be used to prefix the
            asset keys for materialized notebooks.
        description (Optional[str]): If set, description used for solid.
        tags (Optional[Dict[str, str]]): If set, additional tags used to annotate the op.
            Dagster uses the tag keys `notebook_path` and `kind`, which cannot be
            overwritten by the user.

    Returns:
        :py:class:`~dagster.SolidDefinition`
    """
    check.str_param(name, "name")
    check.str_param(notebook_path, "notebook_path")

    input_defs = check.opt_list_param(input_defs, "input_defs", of_type=InputDefinition)
    output_defs = check.opt_list_param(output_defs, "output_defs", of_type=OutputDefinition)

    required_resource_keys = check.opt_set_param(
        required_resource_keys, "required_resource_keys", of_type=str
    )
    if output_notebook is not None:
        required_resource_keys.add("file_manager")
    if isinstance(asset_key_prefix, str):
        asset_key_prefix = [asset_key_prefix]

    asset_key_prefix = check.opt_list_param(asset_key_prefix, "asset_key_prefix", of_type=str)

    default_description = f"This op is backed by the notebook at {notebook_path}"
    description = check.opt_str_param(description, "description", default=default_description)

    user_tags = validate_tags(tags)
    if tags is not None:
        check.invariant(
            "notebook_path" not in tags,
            "user-defined op tags contains the `notebook_path` key, but the `notebook_path` key is reserved for use by Dagster",
        )
        check.invariant(
            "kind" not in tags,
            "user-defined op tags contains the `kind` key, but the `kind` key is reserved for use by Dagster",
        )
    default_tags = {"notebook_path": notebook_path, "kind": "ipynb"}

    return OpDefinition(
        name=name,
        input_defs=input_defs,
        compute_fn=_dm_solid_compute(
            name,
            notebook_path,
            "define_dasgstermill_op",
            output_notebook,
            asset_key_prefix=asset_key_prefix,
        ),
        output_defs=output_defs
        + (
            [OutputDefinition(dagster_type=FileHandle, name=output_notebook)]
            if output_notebook
            else []
        ),
        config_schema=config_schema,
        required_resource_keys=required_resource_keys,
        description=description,
        tags={**user_tags, **default_tags},
    )
