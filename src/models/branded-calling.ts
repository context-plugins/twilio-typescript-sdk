import { s, type Schema } from "../core/index.js";
import { brandedUseCaseDetailSchema, type BrandedUseCaseDetail } from "./branded-use-case-detail.js";

export type BrandedCalling = {
  totalBrandedCalls?: number;
  percentBrandedCalls?: number;
  answerRate?: number;
  humanAnswerRate?: number;
  engagementRate?: number;
  byUseCase?: BrandedUseCaseDetail[];
};

export const brandedCallingSchema: Schema<BrandedCalling> = s.object<BrandedCalling>({
  totalBrandedCalls: s.optional(s.number()),
  percentBrandedCalls: s.optional(s.number()),
  answerRate: s.optional(s.number()),
  humanAnswerRate: s.optional(s.number()),
  engagementRate: s.optional(s.number()),
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
