import { s, type EnumSchema } from "../core/index.js";

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
