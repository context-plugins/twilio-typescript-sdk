import { s, type EnumSchema } from "../core/index.js";

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
