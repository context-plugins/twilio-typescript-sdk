import { s, type EnumSchema } from "../core/index.js";

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
