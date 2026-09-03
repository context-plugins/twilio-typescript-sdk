import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2Service = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  codeLength?: number;
  lookupEnabled?: boolean | null;
  psd2Enabled?: boolean | null;
  skipSmsToLandlines?: boolean | null;
  dtmfInputRequired?: boolean | null;
  ttsName?: string | null;
  doNotShareWarningEnabled?: boolean | null;
  customCodeEnabled?: boolean | null;
  push?: Record<string, unknown> | null;
  totp?: Record<string, unknown> | null;
  defaultTemplateSid?: string | null;
  whatsapp?: Record<string, unknown> | null;
  passkeys?: Record<string, unknown> | null;
  verifyEventSubscriptionEnabled?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const verifyV2ServiceSchema: Schema<VerifyV2Service> = s.object<VerifyV2Service>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  codeLength: s.optional(s.number()),
  lookupEnabled: s.optionalNullable(s.boolean()),
  psd2Enabled: s.optionalNullable(s.boolean()),
  skipSmsToLandlines: s.optionalNullable(s.boolean()),
  dtmfInputRequired: s.optionalNullable(s.boolean()),
  ttsName: s.optionalNullable(s.string()),
  doNotShareWarningEnabled: s.optionalNullable(s.boolean()),
  customCodeEnabled: s.optionalNullable(s.boolean()),
  push: s.optionalNullable(s.record(s.string(), s.unknown())),
  totp: s.optionalNullable(s.record(s.string(), s.unknown())),
  defaultTemplateSid: s.optionalNullable(s.string()),
  whatsapp: s.optionalNullable(s.record(s.string(), s.unknown())),
  passkeys: s.optionalNullable(s.record(s.string(), s.unknown())),
  verifyEventSubscriptionEnabled: s.optionalNullable(s.boolean()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    codeLength: "code_length",
    lookupEnabled: "lookup_enabled",
    psd2Enabled: "psd2_enabled",
    skipSmsToLandlines: "skip_sms_to_landlines",
    dtmfInputRequired: "dtmf_input_required",
    ttsName: "tts_name",
    doNotShareWarningEnabled: "do_not_share_warning_enabled",
    customCodeEnabled: "custom_code_enabled",
    defaultTemplateSid: "default_template_sid",
    verifyEventSubscriptionEnabled: "verify_event_subscription_enabled",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
