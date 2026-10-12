import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsQuestionnaires = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Insights resource and owns this resource.
   */
  accountSid?: string | null;
  /** The sid of this questionnaire */
  questionnaireSid?: string | null;
  /** The name of this category. */
  name?: string | null;
  /** The description of this questionnaire */
  description?: string | null;
  /** The flag to enable or disable questionnaire */
  active?: boolean | null;
  /** The list of questions with category for a questionnaire */
  questions?: Record<string, unknown>[] | null;
  url?: string | null;
};

export const flexV1InsightsQuestionnairesSchema: Schema<FlexV1InsightsQuestionnaires> =
  s.object<FlexV1InsightsQuestionnaires>({
    accountSid: s.optionalNullable(s.string()),
    questionnaireSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    active: s.optionalNullable(s.boolean()),
    questions: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      questionnaireSid: "questionnaire_sid",
    },
  });
