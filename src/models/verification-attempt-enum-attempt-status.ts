import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationAttemptEnumAttemptStatus = {
  Confirmed: "confirmed",
  Unconfirmed: "unconfirmed",
  Expired: "expired",
} as const;
export type VerificationAttemptEnumAttemptStatus =
  | (typeof VerificationAttemptEnumAttemptStatus)[keyof typeof VerificationAttemptEnumAttemptStatus]
  | (string & {});

export const verificationAttemptEnumAttemptStatusSchema: EnumSchema<VerificationAttemptEnumAttemptStatus> =
  s.enumOf<VerificationAttemptEnumAttemptStatus>(VerificationAttemptEnumAttemptStatus);
