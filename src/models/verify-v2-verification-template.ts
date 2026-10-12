import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2VerificationTemplate = {
  /** A 34 character string that uniquely identifies a Verification Template. */
  sid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /**
   * A descriptive string that you create to describe a Template. It can be up to 32 characters
   * long.
   */
  friendlyName?: string | null;
  /** A list of channels that support the Template. Can include: sms, voice. */
  channels?: string[] | null;
  /**
   * An object that contains the different translations of the template. Every translation is
   * identified by the language short name and contains its respective information as the approval
   * status, text and created/modified date.
   */
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
