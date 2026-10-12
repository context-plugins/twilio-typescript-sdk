import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { VerificationMethod, verificationMethodSchema } from "./verification-method.js";

/** The configuration settings for creating a sender. */
export type MessagingV2ChannelsSenderConfiguration = {
  /** The ID of the WhatsApp Business Account (WABA) to use for this sender. */
  wabaId?: string | null;
  /** The verification method. @default VerificationMethod.Sms */
  verificationMethod?: VerificationMethod | null;
  /** The verification code. */
  verificationCode?: string | null;
  /** The SID of the Twilio Voice application. */
  voiceApplicationSid?: string | null;
  /**
   * The account type for ISV Account Type Migration. Set to 'ISV' or 'ISVSubAccount' to configure,
   * empty string to clear, or omit to preserve the existing value.
   */
  accountType?: AccountType | null;
};

export const messagingV2ChannelsSenderConfigurationSchema: Schema<MessagingV2ChannelsSenderConfiguration> =
  s.object<MessagingV2ChannelsSenderConfiguration>({
    wabaId: s.optionalNullable(s.string()),
    verificationMethod: s.defaulted(
      s.nullable(s.lazy(() => verificationMethodSchema)),
      VerificationMethod.Sms,
    ),
    verificationCode: s.optionalNullable(s.string()),
    voiceApplicationSid: s.optionalNullable(s.string()),
    accountType: s.optionalNullable(s.lazy(() => accountTypeSchema)),
    _keysMap: {
      wabaId: "waba_id",
      verificationMethod: "verification_method",
      verificationCode: "verification_code",
      voiceApplicationSid: "voice_application_sid",
      accountType: "account_type",
    },
  });
