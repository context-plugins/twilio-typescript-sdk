import { s, type Schema } from "../core/index.js";

export type VerifyV2VerificationTemplate = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  channels?: string[] | null;
  translations?: Record<string, unknown> | null;
};

export const verifyV2VerificationTemplateSchema: Schema<VerifyV2VerificationTemplate> =
  s.object<VerifyV2VerificationTemplate>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    channels: s.optionalNullable(s.array(s.string())),
    translations: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
    },
  });
