import { s, type Schema } from "../core/index.js";

export type FlexV1InsightsSettingsComment = {
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
