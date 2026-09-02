import { s, type EnumSchema } from "../core/index.js";

export const VerificationEnumStatus = {
  Canceled: "canceled",
  Approved: "approved",
} as const;
export type VerificationEnumStatus =
  | (typeof VerificationEnumStatus)[keyof typeof VerificationEnumStatus]
  | (string & {});

export const verificationEnumStatusSchema: EnumSchema<VerificationEnumStatus> =
  s.enumOf<VerificationEnumStatus>(VerificationEnumStatus);
