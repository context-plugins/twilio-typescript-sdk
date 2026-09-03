import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagingV2RcsCountryStatus = {
  Online: "ONLINE",
  Offline: "OFFLINE",
  TwilioReview: "TWILIO_REVIEW",
  PendingVerification: "PENDING_VERIFICATION",
} as const;
export type MessagingV2RcsCountryStatus =
  | (typeof MessagingV2RcsCountryStatus)[keyof typeof MessagingV2RcsCountryStatus]
  | (string & {});

export const messagingV2RcsCountryStatusSchema: EnumSchema<MessagingV2RcsCountryStatus> =
  s.enumOf<MessagingV2RcsCountryStatus>(MessagingV2RcsCountryStatus);
