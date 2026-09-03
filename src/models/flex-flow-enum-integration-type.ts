import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
