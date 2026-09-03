import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
