import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the application. */
export const State = {
  Draft: "DRAFT",
  TwilioReview: "TWILIO_REVIEW",
  PendingPayment: "PENDING_PAYMENT",
  PaymentFailed: "PAYMENT_FAILED",
  InProvisioning: "IN_PROVISIONING",
  PendingCarrier: "PENDING_CARRIER",
  Approved: "APPROVED",
  CorrectionsNeeded: "CORRECTIONS_NEEDED",
  Canceled: "CANCELED",
  Archived: "ARCHIVED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
