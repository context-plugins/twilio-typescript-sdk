import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSettingsComment = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Insights resource and owns this resource.
   */
  accountSid?: string | null;
  comments?: Record<string, unknown> | null;
  url?: string | null;
};

export const flexV1InsightsSettingsCommentSchema: Schema<FlexV1InsightsSettingsComment> =
  s.object<FlexV1InsightsSettingsComment>({
    accountSid: s.optionalNullable(s.string()),
    comments: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
    },
  });
