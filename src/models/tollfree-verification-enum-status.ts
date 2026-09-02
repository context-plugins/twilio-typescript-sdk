import { s, type EnumSchema } from "../core/index.js";

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
