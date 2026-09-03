import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { verificationMethodSchema, type VerificationMethod } from "./verification-method.js";

export type MessagingV2ChannelsSenderConfiguration = {
  wabaId?: string | null;
  verificationMethod?: VerificationMethod | null;
  verificationCode?: string | null;
  voiceApplicationSid?: string | null;
  accountType?: AccountType | null;
};

export const messagingV2ChannelsSenderConfigurationSchema: Schema<MessagingV2ChannelsSenderConfiguration> =
  s.object<MessagingV2ChannelsSenderConfiguration>({
    wabaId: s.optionalNullable(s.string()),
    verificationMethod: s.optionalNullable(s.lazy(() => verificationMethodSchema)),
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
