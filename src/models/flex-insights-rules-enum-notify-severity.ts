import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FlexInsightsRulesEnumNotifySeverity = {
  Critical: "Critical",
  Warning: "Warning",
} as const;
export type FlexInsightsRulesEnumNotifySeverity =
  | (typeof FlexInsightsRulesEnumNotifySeverity)[keyof typeof FlexInsightsRulesEnumNotifySeverity]
  | (string & {});

export const flexInsightsRulesEnumNotifySeveritySchema: EnumSchema<FlexInsightsRulesEnumNotifySeverity> =
  s.enumOf<FlexInsightsRulesEnumNotifySeverity>(FlexInsightsRulesEnumNotifySeverity);
