import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Associated metrics for Branded calls grouped by each use case. */
export type BrandedUseCaseDetail = {
  /** The name of supported use case for Branded calls. */
  useCase?: string;
  /** The number of phone numbers enabled Branded calls. */
  enabledPhonenumbers?: number;
  /** The number of total outbound calls for the use case. */
  totalCalls?: number;
  /** Answer rate per each use case for Branded bundled calls. */
  answerRate?: number;
  /**
   * Rate of Branded bundled calls that were answered by Human per each use case for Branded bundled
   * calls.
   */
  humanAnswerRate?: number;
  /**
   * Engagement Rate for Branded bundled calls where its call length is longer than 60 seconds per
   * each use case for Branded bundled calls.
   */
  engagementRate?: number;
};

export const brandedUseCaseDetailSchema: Schema<BrandedUseCaseDetail> = s.object<BrandedUseCaseDetail>({
  useCase: s.optional(s.string()),
  enabledPhonenumbers: s.optional(s.int()),
  totalCalls: s.optional(s.int()),
  answerRate: s.optional(s.float64()),
  humanAnswerRate: s.optional(s.float64()),
  engagementRate: s.optional(s.float64()),
  _keysMap: {
    useCase: "use_case",
    enabledPhonenumbers: "enabled_phonenumbers",
    totalCalls: "total_calls",
    answerRate: "answer_rate",
    humanAnswerRate: "human_answer_rate",
    engagementRate: "engagement_rate",
  },
});
