import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsConversationalAiEnumName = {
  PredictiveScores: "predictive_scores",
  ChannelMetrics: "channel_metrics",
  AgentMetrics: "agent_metrics",
  QueueMetrics: "queue_metrics",
  AgentsCsatSummary: "agents_csat_summary",
  TopicMetrics: "topic_metrics",
  ConversationMetrics: "conversation_metrics",
  TrendMetrics: "trend_metrics",
} as const;
export type InsightsConversationalAiEnumName =
  | (typeof InsightsConversationalAiEnumName)[keyof typeof InsightsConversationalAiEnumName]
  | (string & {});

export const insightsConversationalAiEnumNameSchema: EnumSchema<InsightsConversationalAiEnumName> =
  s.enumOf<InsightsConversationalAiEnumName>(InsightsConversationalAiEnumName);
