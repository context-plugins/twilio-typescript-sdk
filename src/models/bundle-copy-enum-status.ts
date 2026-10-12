import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Bundle resource. */
export const BundleCopyEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
  ProvisionallyApproved: "provisionally-approved",
} as const;
export type BundleCopyEnumStatus =
  | (typeof BundleCopyEnumStatus)[keyof typeof BundleCopyEnumStatus]
  | (string & {});

export const bundleCopyEnumStatusSchema: EnumSchema<BundleCopyEnumStatus> =
  s.enumOf<BundleCopyEnumStatus>(BundleCopyEnumStatus);
