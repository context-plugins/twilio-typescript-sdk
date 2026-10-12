import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Bundle resource. */
export const BundleCloneEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
  ProvisionallyApproved: "provisionally-approved",
} as const;
export type BundleCloneEnumStatus =
  | (typeof BundleCloneEnumStatus)[keyof typeof BundleCloneEnumStatus]
  | (string & {});

export const bundleCloneEnumStatusSchema: EnumSchema<BundleCloneEnumStatus> =
  s.enumOf<BundleCloneEnumStatus>(BundleCloneEnumStatus);
