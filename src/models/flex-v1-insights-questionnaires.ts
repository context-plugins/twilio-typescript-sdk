import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsQuestionnaires = {
  accountSid?: string | null;
  questionnaireSid?: string | null;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
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
