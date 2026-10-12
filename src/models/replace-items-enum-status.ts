import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Bundle resource. */
export const ReplaceItemsEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
  ProvisionallyApproved: "provisionally-approved",
} as const;
export type ReplaceItemsEnumStatus =
  | (typeof ReplaceItemsEnumStatus)[keyof typeof ReplaceItemsEnumStatus]
  | (string & {});

export const replaceItemsEnumStatusSchema: EnumSchema<ReplaceItemsEnumStatus> =
  s.enumOf<ReplaceItemsEnumStatus>(ReplaceItemsEnumStatus);
