import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsConversationalAiEnumTier = {
  Low: "Low",
  High: "High",
  Neutral: "Neutral",
} as const;
export type InsightsConversationalAiEnumTier =
  | (typeof InsightsConversationalAiEnumTier)[keyof typeof InsightsConversationalAiEnumTier]
  | (string & {});

export const insightsConversationalAiEnumTierSchema: EnumSchema<InsightsConversationalAiEnumTier> =
  s.enumOf<InsightsConversationalAiEnumTier>(InsightsConversationalAiEnumTier);
