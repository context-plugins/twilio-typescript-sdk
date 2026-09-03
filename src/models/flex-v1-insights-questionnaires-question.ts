import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsQuestionnairesQuestion = {
  accountSid?: string | null;
  questionSid?: string | null;
  question?: string | null;
  description?: string | null;
  category?: Record<string, unknown> | null;
  answerSetId?: string | null;
  allowNa?: boolean | null;
  usage?: number;
  answerSet?: Record<string, unknown> | null;
  url?: string | null;
};

export const flexV1InsightsQuestionnairesQuestionSchema: Schema<FlexV1InsightsQuestionnairesQuestion> =
  s.object<FlexV1InsightsQuestionnairesQuestion>({
    accountSid: s.optionalNullable(s.string()),
    questionSid: s.optionalNullable(s.string()),
    question: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.record(s.string(), s.unknown())),
    answerSetId: s.optionalNullable(s.string()),
    allowNa: s.optionalNullable(s.boolean()),
    usage: s.optional(s.number()),
    answerSet: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      questionSid: "question_sid",
      answerSetId: "answer_set_id",
      allowNa: "allow_na",
      answerSet: "answer_set",
    },
  });
