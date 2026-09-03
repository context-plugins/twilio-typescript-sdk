import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrandedUseCaseDetail = {
  useCase?: string;
  enabledPhonenumbers?: number;
  totalCalls?: number;
  answerRate?: number;
  humanAnswerRate?: number;
  engagementRate?: number;
};

export const brandedUseCaseDetailSchema: Schema<BrandedUseCaseDetail> = s.object<BrandedUseCaseDetail>({
  useCase: s.optional(s.string()),
  enabledPhonenumbers: s.optional(s.number()),
  totalCalls: s.optional(s.number()),
  answerRate: s.optional(s.number()),
  humanAnswerRate: s.optional(s.number()),
  engagementRate: s.optional(s.number()),
  _keysMap: {
    useCase: "use_case",
    enabledPhonenumbers: "enabled_phonenumbers",
    totalCalls: "total_calls",
    answerRate: "answer_rate",
    humanAnswerRate: "human_answer_rate",
    engagementRate: "engagement_rate",
  },
});
