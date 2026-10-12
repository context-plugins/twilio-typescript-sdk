import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2Service = {
  /** The unique string that we created to identify the Service resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /**
   * The name that appears in the body of your verification messages. It can be up to 30 characters
   * long and can include letters, numbers, spaces, dashes, underscores. Phone numbers, special
   * characters or links are NOT allowed. It cannot contain more than 4 (consecutive or
   * non-consecutive) digits. **This value should not contain PII.**
   */
  friendlyName?: string | null;
  /** The length of the verification code to generate. @default 0 */
  codeLength?: number;
  /**
   * Whether to perform a lookup with each verification started and return info about the phone
   * number.
   */
  lookupEnabled?: boolean | null;
  /** Whether to pass PSD2 transaction parameters when starting a verification. */
  psd2Enabled?: boolean | null;
  /** Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
  skipSmsToLandlines?: boolean | null;
  /**
   * Whether to ask the user to press a number before delivering the verify code in a phone call.
   */
  dtmfInputRequired?: boolean | null;
  /**
   * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS
   * languages.
   */
  ttsName?: string | null;
  /**
   * Whether to add a security warning at the end of an SMS verification body. Disabled by default
   * and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t
   * share this code with anyone; our employees will never ask for the code`
   */
  doNotShareWarningEnabled?: boolean | null;
  /**
   * Whether to allow sending verifications with a custom code instead of a randomly generated one.
   */
  customCodeEnabled?: boolean | null;
  /** Configurations for the Push factors (channel) created under this Service. */
  push?: Record<string, unknown> | null;
  /** Configurations for the TOTP factors (channel) created under this Service. */
  totp?: Record<string, unknown> | null;
  defaultTemplateSid?: string | null;
  whatsapp?: Record<string, unknown> | null;
  passkeys?: Record<string, unknown> | null;
  /**
   * Whether to allow verifications from the service to reach the stream-events sinks if configured
   */
  verifyEventSubscriptionEnabled?: boolean | null;
  /**
   * The date and time in GMT when the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const verifyV2ServiceSchema: Schema<VerifyV2Service> = s.object<VerifyV2Service>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  codeLength: s.defaulted(s.int(), 0),
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
