import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsConversationalAiEnumGranularity = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Quarters: "quarters",
  Years: "years",
} as const;
export type InsightsConversationalAiEnumGranularity =
  | (typeof InsightsConversationalAiEnumGranularity)[keyof typeof InsightsConversationalAiEnumGranularity]
  | (string & {});

export const insightsConversationalAiEnumGranularitySchema: EnumSchema<InsightsConversationalAiEnumGranularity> =
  s.enumOf<InsightsConversationalAiEnumGranularity>(InsightsConversationalAiEnumGranularity);
