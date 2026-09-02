import { s, type EnumSchema } from "../core/index.js";

export const VerificationMethod = {
  Sms: "sms",
  Voice: "voice",
} as const;
export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod] | (string & {});

export const verificationMethodSchema: EnumSchema<VerificationMethod> =
  s.enumOf<VerificationMethod>(VerificationMethod);
