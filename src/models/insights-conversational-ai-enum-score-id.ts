import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsConversationalAiEnumScoreId = {
  PredictedCsat: "~predicted-csat",
  AgentExperience: "~agent-experience",
  CustomerEffort: "~customer-effort",
  MultitouchRisk: "~multitouch-risk",
} as const;
export type InsightsConversationalAiEnumScoreId =
  | (typeof InsightsConversationalAiEnumScoreId)[keyof typeof InsightsConversationalAiEnumScoreId]
  | (string & {});

export const insightsConversationalAiEnumScoreIdSchema: EnumSchema<InsightsConversationalAiEnumScoreId> =
  s.enumOf<InsightsConversationalAiEnumScoreId>(InsightsConversationalAiEnumScoreId);
