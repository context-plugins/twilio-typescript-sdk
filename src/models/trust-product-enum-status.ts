import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrustProductEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
} as const;
export type TrustProductEnumStatus =
  | (typeof TrustProductEnumStatus)[keyof typeof TrustProductEnumStatus]
  | (string & {});

export const trustProductEnumStatusSchema: EnumSchema<TrustProductEnumStatus> =
  s.enumOf<TrustProductEnumStatus>(TrustProductEnumStatus);
