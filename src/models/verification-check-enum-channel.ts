import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationCheckEnumChannel = {
  Sms: "sms",
  Call: "call",
  Email: "email",
  Whatsapp: "whatsapp",
  Sna: "sna",
} as const;
export type VerificationCheckEnumChannel =
  | (typeof VerificationCheckEnumChannel)[keyof typeof VerificationCheckEnumChannel]
  | (string & {});

export const verificationCheckEnumChannelSchema: EnumSchema<VerificationCheckEnumChannel> =
  s.enumOf<VerificationCheckEnumChannel>(VerificationCheckEnumChannel);
