import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsConversationalAiEnumType = {
  Metrics: "metrics",
  Summary: "summary",
  Trend: "trend",
} as const;
export type InsightsConversationalAiEnumType =
  | (typeof InsightsConversationalAiEnumType)[keyof typeof InsightsConversationalAiEnumType]
  | (string & {});

export const insightsConversationalAiEnumTypeSchema: EnumSchema<InsightsConversationalAiEnumType> =
  s.enumOf<InsightsConversationalAiEnumType>(InsightsConversationalAiEnumType);
