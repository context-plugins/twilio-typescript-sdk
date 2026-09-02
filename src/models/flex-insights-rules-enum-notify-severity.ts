import { s, type EnumSchema } from "../core/index.js";

export const FlexInsightsRulesEnumNotifySeverity = {
  Critical: "Critical",
  Warning: "Warning",
} as const;
export type FlexInsightsRulesEnumNotifySeverity =
  | (typeof FlexInsightsRulesEnumNotifySeverity)[keyof typeof FlexInsightsRulesEnumNotifySeverity]
  | (string & {});

export const flexInsightsRulesEnumNotifySeveritySchema: EnumSchema<FlexInsightsRulesEnumNotifySeverity> =
  s.enumOf<FlexInsightsRulesEnumNotifySeverity>(FlexInsightsRulesEnumNotifySeverity);
