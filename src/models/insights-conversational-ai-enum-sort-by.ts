import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
