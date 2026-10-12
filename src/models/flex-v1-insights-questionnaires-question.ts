import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsQuestionnairesQuestion = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Insights resource and owns this resource.
   */
  accountSid?: string | null;
  /** The SID of the question */
  questionSid?: string | null;
  /** The question. */
  question?: string | null;
  /** The description for the question. */
  description?: string | null;
  /** The Category for the question. */
  category?: Record<string, unknown> | null;
  /** The answer_set for the question. */
  answerSetId?: string | null;
  /** The flag to enable for disable NA for answer. */
  allowNa?: boolean | null;
  /**
   * Integer value that tells a particular question is used by how many questionnaires
   *
   * @default 0
   */
  usage?: number;
  /** Set of answers for the question */
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
    usage: s.defaulted(s.int(), 0),
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
