import { s, type EnumSchema } from "../core/index.js";

export const VerificationAttemptEnumChannels = {
  Sms: "sms",
  Call: "call",
  Email: "email",
  Whatsapp: "whatsapp",
  Rbm: "rbm",
} as const;
export type VerificationAttemptEnumChannels =
  | (typeof VerificationAttemptEnumChannels)[keyof typeof VerificationAttemptEnumChannels]
  | (string & {});

export const verificationAttemptEnumChannelsSchema: EnumSchema<VerificationAttemptEnumChannels> =
  s.enumOf<VerificationAttemptEnumChannels>(VerificationAttemptEnumChannels);
