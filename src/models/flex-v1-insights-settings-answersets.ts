import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSettingsAnswersets = {
  accountSid?: string | null;
  answerSets?: Record<string, unknown> | null;
  answerSetCategories?: Record<string, unknown> | null;
  notApplicable?: Record<string, unknown> | null;
  url?: string | null;
};

export const flexV1InsightsSettingsAnswersetsSchema: Schema<FlexV1InsightsSettingsAnswersets> =
  s.object<FlexV1InsightsSettingsAnswersets>({
    accountSid: s.optionalNullable(s.string()),
    answerSets: s.optionalNullable(s.record(s.string(), s.unknown())),
    answerSetCategories: s.optionalNullable(s.record(s.string(), s.unknown())),
    notApplicable: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      answerSets: "answer_sets",
      answerSetCategories: "answer_set_categories",
      notApplicable: "not_applicable",
    },
  });
