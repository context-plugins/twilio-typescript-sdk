import { s, type Schema } from "../core/index.js";

export type FlexV1InsightsQuestionnairesCategory = {
  accountSid?: string | null;
  categorySid?: string | null;
  name?: string | null;
  url?: string | null;
};

export const flexV1InsightsQuestionnairesCategorySchema: Schema<FlexV1InsightsQuestionnairesCategory> =
  s.object<FlexV1InsightsQuestionnairesCategory>({
    accountSid: s.optionalNullable(s.string()),
    categorySid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      categorySid: "category_sid",
    },
  });
