import { s, type EnumSchema } from "../core/index.js";

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
