import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
