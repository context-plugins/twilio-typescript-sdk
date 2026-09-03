import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagingV2RcsCarrierStatus = {
  Unknown: "UNKNOWN",
  Unlaunched: "UNLAUNCHED",
  CarrierReview: "CARRIER_REVIEW",
  Approved: "APPROVED",
  Rejected: "REJECTED",
  Suspended: "SUSPENDED",
} as const;
export type MessagingV2RcsCarrierStatus =
  | (typeof MessagingV2RcsCarrierStatus)[keyof typeof MessagingV2RcsCarrierStatus]
  | (string & {});

export const messagingV2RcsCarrierStatusSchema: EnumSchema<MessagingV2RcsCarrierStatus> =
  s.enumOf<MessagingV2RcsCarrierStatus>(MessagingV2RcsCarrierStatus);
