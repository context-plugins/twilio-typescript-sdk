import { s, type EnumSchema } from "../core/index.js";

export const FlexFlowEnumIntegrationType = {
  Studio: "studio",
  External: "external",
  Task: "task",
} as const;
export type FlexFlowEnumIntegrationType =
  | (typeof FlexFlowEnumIntegrationType)[keyof typeof FlexFlowEnumIntegrationType]
  | (string & {});

export const flexFlowEnumIntegrationTypeSchema: EnumSchema<FlexFlowEnumIntegrationType> =
  s.enumOf<FlexFlowEnumIntegrationType>(FlexFlowEnumIntegrationType);
