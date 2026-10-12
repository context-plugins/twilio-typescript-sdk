import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Bundle resource. */
export const BundleEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
  ProvisionallyApproved: "provisionally-approved",
} as const;
export type BundleEnumStatus = (typeof BundleEnumStatus)[keyof typeof BundleEnumStatus] | (string & {});

export const bundleEnumStatusSchema: EnumSchema<BundleEnumStatus> =
  s.enumOf<BundleEnumStatus>(BundleEnumStatus);
