import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { brandedUseCaseDetailSchema, type BrandedUseCaseDetail } from "./branded-use-case-detail.js";

/** Metrics related to Branded Calling bundled calls including CTIA for the report period. */
export type BrandedCalling = {
  /** Total number of Branded bundled calls. */
  totalBrandedCalls?: number;
  /** Percentage of Branded bundled calls over total outbound calls. */
  percentBrandedCalls?: number;
  /** Answer rate for Branded bundled calls. */
  answerRate?: number;
  /** Rate of Branded bundled calls that were answered by Human. */
  humanAnswerRate?: number;
  /** Engagement Rate for Branded bundled calls where its call length is longer than 60 seconds. */
  engagementRate?: number;
  /** Details of branded calls by use case. */
  byUseCase?: BrandedUseCaseDetail[];
};

export const brandedCallingSchema: Schema<BrandedCalling> = s.object<BrandedCalling>({
  totalBrandedCalls: s.optional(s.int()),
  percentBrandedCalls: s.optional(s.float64()),
  answerRate: s.optional(s.float64()),
  humanAnswerRate: s.optional(s.float64()),
  engagementRate: s.optional(s.float64()),
  byUseCase: s.optional(s.array(s.lazy(() => brandedUseCaseDetailSchema))),
  _keysMap: {
    totalBrandedCalls: "total_branded_calls",
    percentBrandedCalls: "percent_branded_calls",
    answerRate: "answer_rate",
    humanAnswerRate: "human_answer_rate",
    engagementRate: "engagement_rate",
    byUseCase: "by_use_case",
  },
});
