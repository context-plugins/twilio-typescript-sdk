import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationEnumStatus = {
  Canceled: "canceled",
  Approved: "approved",
} as const;
export type VerificationEnumStatus =
  | (typeof VerificationEnumStatus)[keyof typeof VerificationEnumStatus]
  | (string & {});

export const verificationEnumStatusSchema: EnumSchema<VerificationEnumStatus> =
  s.enumOf<VerificationEnumStatus>(VerificationEnumStatus);
