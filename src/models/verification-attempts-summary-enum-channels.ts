import { s, type EnumSchema } from "../core/index.js";

export const VerificationAttemptsSummaryEnumChannels = {
  Sms: "sms",
  Call: "call",
  Email: "email",
  Whatsapp: "whatsapp",
  Rbm: "rbm",
} as const;
export type VerificationAttemptsSummaryEnumChannels =
  | (typeof VerificationAttemptsSummaryEnumChannels)[keyof typeof VerificationAttemptsSummaryEnumChannels]
  | (string & {});

export const verificationAttemptsSummaryEnumChannelsSchema: EnumSchema<VerificationAttemptsSummaryEnumChannels> =
  s.enumOf<VerificationAttemptsSummaryEnumChannels>(VerificationAttemptsSummaryEnumChannels);
