/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MetadataEntryFragment
// ====================================================

export interface MetadataEntryFragment_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface MetadataEntryFragment_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface MetadataEntryFragment_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface MetadataEntryFragment_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface MetadataEntryFragment_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface MetadataEntryFragment_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface MetadataEntryFragment_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface MetadataEntryFragment_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface MetadataEntryFragment_EventPipelineRunMetadataEntry {
  __typename: "EventPipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface MetadataEntryFragment_EventAssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface MetadataEntryFragment_EventAssetMetadataEntry {
  __typename: "EventAssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: MetadataEntryFragment_EventAssetMetadataEntry_assetKey;
}

export interface MetadataEntryFragment_EventTableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface MetadataEntryFragment_EventTableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: MetadataEntryFragment_EventTableMetadataEntry_table_schema_columns_constraints;
}

export interface MetadataEntryFragment_EventTableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface MetadataEntryFragment_EventTableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: MetadataEntryFragment_EventTableMetadataEntry_table_schema_columns[];
  constraints: MetadataEntryFragment_EventTableMetadataEntry_table_schema_constraints | null;
}

export interface MetadataEntryFragment_EventTableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: MetadataEntryFragment_EventTableMetadataEntry_table_schema;
}

export interface MetadataEntryFragment_EventTableMetadataEntry {
  __typename: "EventTableMetadataEntry";
  label: string;
  description: string | null;
  table: MetadataEntryFragment_EventTableMetadataEntry_table;
}

export interface MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_columns_constraints;
}

export interface MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface MetadataEntryFragment_EventTableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_columns[];
  constraints: MetadataEntryFragment_EventTableSchemaMetadataEntry_schema_constraints | null;
}

export interface MetadataEntryFragment_EventTableSchemaMetadataEntry {
  __typename: "EventTableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: MetadataEntryFragment_EventTableSchemaMetadataEntry_schema;
}

export type MetadataEntryFragment = MetadataEntryFragment_EventPathMetadataEntry | MetadataEntryFragment_EventJsonMetadataEntry | MetadataEntryFragment_EventUrlMetadataEntry | MetadataEntryFragment_EventTextMetadataEntry | MetadataEntryFragment_EventMarkdownMetadataEntry | MetadataEntryFragment_EventPythonArtifactMetadataEntry | MetadataEntryFragment_EventFloatMetadataEntry | MetadataEntryFragment_EventIntMetadataEntry | MetadataEntryFragment_EventPipelineRunMetadataEntry | MetadataEntryFragment_EventAssetMetadataEntry | MetadataEntryFragment_EventTableMetadataEntry | MetadataEntryFragment_EventTableSchemaMetadataEntry;
