import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Customer-Profile resource. */
export const CustomerProfileEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  InReview: "in-review",
  TwilioRejected: "twilio-rejected",
  TwilioApproved: "twilio-approved",
} as const;
export type CustomerProfileEnumStatus =
  | (typeof CustomerProfileEnumStatus)[keyof typeof CustomerProfileEnumStatus]
  | (string & {});

export const customerProfileEnumStatusSchema: EnumSchema<CustomerProfileEnumStatus> =
  s.enumOf<CustomerProfileEnumStatus>(CustomerProfileEnumStatus);
