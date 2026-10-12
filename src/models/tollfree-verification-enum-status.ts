import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The compliance status of the Tollfree Verification record. */
export const TollfreeVerificationEnumStatus = {
  PendingReview: "PENDING_REVIEW",
  InReview: "IN_REVIEW",
  TwilioApproved: "TWILIO_APPROVED",
  TwilioRejected: "TWILIO_REJECTED",
} as const;
export type TollfreeVerificationEnumStatus =
  | (typeof TollfreeVerificationEnumStatus)[keyof typeof TollfreeVerificationEnumStatus]
  | (string & {});

export const tollfreeVerificationEnumStatusSchema: EnumSchema<TollfreeVerificationEnumStatus> =
  s.enumOf<TollfreeVerificationEnumStatus>(TollfreeVerificationEnumStatus);
