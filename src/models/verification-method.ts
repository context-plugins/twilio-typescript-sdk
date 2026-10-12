import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification method. */
export const VerificationMethod = {
  Sms: "sms",
  Voice: "voice",
} as const;
export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod] | (string & {});

export const verificationMethodSchema: EnumSchema<VerificationMethod> =
  s.enumOf<VerificationMethod>(VerificationMethod);
