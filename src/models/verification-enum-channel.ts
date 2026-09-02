import { s, type EnumSchema } from "../core/index.js";

export const VerificationEnumChannel = {
  Sms: "sms",
  Call: "call",
  Email: "email",
  Whatsapp: "whatsapp",
  Sna: "sna",
} as const;
export type VerificationEnumChannel =
  | (typeof VerificationEnumChannel)[keyof typeof VerificationEnumChannel]
  | (string & {});

export const verificationEnumChannelSchema: EnumSchema<VerificationEnumChannel> =
  s.enumOf<VerificationEnumChannel>(VerificationEnumChannel);
