import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the Sender ID Registration Application */
export const Status2 = {
  Draft: "DRAFT",
  PendingReview: "PENDING_REVIEW",
  InReview: "IN_REVIEW",
  TwilioApproved: "TWILIO_APPROVED",
  TwilioRejected: "TWILIO_REJECTED",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
