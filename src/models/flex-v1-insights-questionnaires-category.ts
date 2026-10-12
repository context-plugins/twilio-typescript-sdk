import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsQuestionnairesCategory = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Insights resource and owns this resource.
   */
  accountSid?: string | null;
  /** The SID of the category */
  categorySid?: string | null;
  /** The name of this category. */
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
