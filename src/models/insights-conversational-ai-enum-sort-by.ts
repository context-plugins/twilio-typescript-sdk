import { s, type EnumSchema } from "../core/index.js";

export const InsightsConversationalAiEnumSortBy = {
  RecordCount: "record_count",
  ScoredCount: "scored_count",
  Total: "total",
  Mean: "mean",
  ScoredMean: "scored_mean",
  Score: "score",
} as const;
export type InsightsConversationalAiEnumSortBy =
  | (typeof InsightsConversationalAiEnumSortBy)[keyof typeof InsightsConversationalAiEnumSortBy]
  | (string & {});

export const insightsConversationalAiEnumSortBySchema: EnumSchema<InsightsConversationalAiEnumSortBy> =
  s.enumOf<InsightsConversationalAiEnumSortBy>(InsightsConversationalAiEnumSortBy);
