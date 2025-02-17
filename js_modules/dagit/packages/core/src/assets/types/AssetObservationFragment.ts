/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RunStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: AssetObservationFragment
// ====================================================

export interface AssetObservationFragment_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetObservationFragment_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetObservationFragment_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  repositoryOrigin: AssetObservationFragment_runOrError_Run_repositoryOrigin | null;
  status: RunStatus;
  pipelineName: string;
  pipelineSnapshotId: string | null;
}

export type AssetObservationFragment_runOrError = AssetObservationFragment_runOrError_RunNotFoundError | AssetObservationFragment_runOrError_Run;

export interface AssetObservationFragment_stepStats {
  __typename: "RunStepStats";
  endTime: number | null;
  startTime: number | null;
}

export interface AssetObservationFragment_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetObservationFragment_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetObservationFragment_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetObservationFragment_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetObservationFragment_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetObservationFragment_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetObservationFragment_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetObservationFragment_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetObservationFragment_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetObservationFragment_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetObservationFragment_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetObservationFragment_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetObservationFragment_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetObservationFragment_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetObservationFragment_metadataEntries = AssetObservationFragment_metadataEntries_EventPathMetadataEntry | AssetObservationFragment_metadataEntries_EventJsonMetadataEntry | AssetObservationFragment_metadataEntries_EventUrlMetadataEntry | AssetObservationFragment_metadataEntries_EventTextMetadataEntry | AssetObservationFragment_metadataEntries_EventMarkdownMetadataEntry | AssetObservationFragment_metadataEntries_EventPythonArtifactMetadataEntry | AssetObservationFragment_metadataEntries_EventFloatMetadataEntry | AssetObservationFragment_metadataEntries_EventIntMetadataEntry | AssetObservationFragment_metadataEntries_EventPipelineRunMetadataEntry | AssetObservationFragment_metadataEntries_EventAssetMetadataEntry | AssetObservationFragment_metadataEntries_EventTableMetadataEntry | AssetObservationFragment_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetObservationFragment {
  __typename: "ObservationEvent";
  partition: string | null;
  runOrError: AssetObservationFragment_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  stepStats: AssetObservationFragment_stepStats;
  label: string;
  description: string | null;
  metadataEntries: AssetObservationFragment_metadataEntries[];
}
