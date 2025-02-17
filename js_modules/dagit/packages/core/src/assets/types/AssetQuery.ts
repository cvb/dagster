/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetKeyInput, RunStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: AssetQuery
// ====================================================

export interface AssetQuery_assetOrError_AssetNotFoundError {
  __typename: "AssetNotFoundError";
}

export interface AssetQuery_assetOrError_Asset_key {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations {
  __typename: "MaterializationEvent";
  timestamp: string;
}

export interface AssetQuery_assetOrError_Asset_definition_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetQuery_assetOrError_Asset_definition_repository_location;
}

export interface AssetQuery_assetOrError_Asset_definition_jobs {
  __typename: "Pipeline";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType = AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes_outputSchemaType | null;
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_outputSchemaType | null;
  innerTypes: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type_innerTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_op_outputDefinitions {
  __typename: "OutputDefinition";
  metadataEntries: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_metadataEntries[];
  type: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions_type;
}

export interface AssetQuery_assetOrError_Asset_definition_op {
  __typename: "SolidDefinition";
  name: string;
  description: string | null;
  outputDefinitions: AssetQuery_assetOrError_Asset_definition_op_outputDefinitions[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_Run_repositoryOrigin | null;
  status: RunStatus;
}

export type AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError = AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_RunNotFoundError | AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError_Run;

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries = AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetQuery_assetOrError_Asset_definition_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetQuery_assetOrError_Asset_definition_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_assetMaterializations_metadataEntries[];
  assetLineage: AssetQuery_assetOrError_Asset_definition_assetMaterializations_assetLineage[];
  stepStats: AssetQuery_assetOrError_Asset_definition_assetMaterializations_stepStats;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_jobs {
  __typename: "Pipeline";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType = AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes_outputSchemaType | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_outputSchemaType | null;
  innerTypes: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type_innerTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions {
  __typename: "OutputDefinition";
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_metadataEntries[];
  type: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions_type;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_op {
  __typename: "SolidDefinition";
  name: string;
  description: string | null;
  outputDefinitions: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op_outputDefinitions[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetQuery_assetOrError_Asset_definition_dependencies_asset_repository_location;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_Run_repositoryOrigin | null;
  status: RunStatus;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError = AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_RunNotFoundError | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError_Run;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_metadataEntries[];
  assetLineage: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_assetLineage[];
  stepStats: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations_stepStats;
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies_asset {
  __typename: "AssetNode";
  id: string;
  opName: string | null;
  jobs: AssetQuery_assetOrError_Asset_definition_dependencies_asset_jobs[];
  op: AssetQuery_assetOrError_Asset_definition_dependencies_asset_op | null;
  description: string | null;
  partitionDefinition: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetKey;
  repository: AssetQuery_assetOrError_Asset_definition_dependencies_asset_repository;
  assetMaterializations: AssetQuery_assetOrError_Asset_definition_dependencies_asset_assetMaterializations[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependencies {
  __typename: "AssetDependency";
  asset: AssetQuery_assetOrError_Asset_definition_dependencies_asset;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_jobs {
  __typename: "Pipeline";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes_outputSchemaType | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_metadataEntries[];
  inputSchemaType: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_inputSchemaType | null;
  outputSchemaType: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_outputSchemaType | null;
  innerTypes: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type_innerTypes[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions {
  __typename: "OutputDefinition";
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_metadataEntries[];
  type: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions_type;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op {
  __typename: "SolidDefinition";
  name: string;
  description: string | null;
  outputDefinitions: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op_outputDefinitions[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_repository_location;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_Run_repositoryOrigin | null;
  status: RunStatus;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_RunNotFoundError | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError_Run;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry_assetKey;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table_schema;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry_table;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry_schema;
}

export type AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries = AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPythonArtifactMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventFloatMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventIntMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventPipelineRunMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventAssetMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableMetadataEntry | AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries_EventTableSchemaMetadataEntry;

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_metadataEntries[];
  assetLineage: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_assetLineage[];
  stepStats: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations_stepStats;
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy_asset {
  __typename: "AssetNode";
  id: string;
  opName: string | null;
  jobs: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_jobs[];
  op: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_op | null;
  description: string | null;
  partitionDefinition: string | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetKey;
  repository: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_repository;
  assetMaterializations: AssetQuery_assetOrError_Asset_definition_dependedBy_asset_assetMaterializations[];
}

export interface AssetQuery_assetOrError_Asset_definition_dependedBy {
  __typename: "AssetDependency";
  asset: AssetQuery_assetOrError_Asset_definition_dependedBy_asset;
}

export interface AssetQuery_assetOrError_Asset_definition {
  __typename: "AssetNode";
  id: string;
  partitionDefinition: string | null;
  repository: AssetQuery_assetOrError_Asset_definition_repository;
  description: string | null;
  opName: string | null;
  jobs: AssetQuery_assetOrError_Asset_definition_jobs[];
  op: AssetQuery_assetOrError_Asset_definition_op | null;
  assetKey: AssetQuery_assetOrError_Asset_definition_assetKey;
  assetMaterializations: AssetQuery_assetOrError_Asset_definition_assetMaterializations[];
  dependencies: AssetQuery_assetOrError_Asset_definition_dependencies[];
  dependedBy: AssetQuery_assetOrError_Asset_definition_dependedBy[];
}

export interface AssetQuery_assetOrError_Asset {
  __typename: "Asset";
  id: string;
  key: AssetQuery_assetOrError_Asset_key;
  assetMaterializations: AssetQuery_assetOrError_Asset_assetMaterializations[];
  definition: AssetQuery_assetOrError_Asset_definition | null;
}

export type AssetQuery_assetOrError = AssetQuery_assetOrError_AssetNotFoundError | AssetQuery_assetOrError_Asset;

export interface AssetQuery {
  assetOrError: AssetQuery_assetOrError;
}

export interface AssetQueryVariables {
  assetKey: AssetKeyInput;
}
