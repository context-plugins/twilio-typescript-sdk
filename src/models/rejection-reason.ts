import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The description of the rejection reason provided by the losing carrier. This field may be null if
 * the number has not been rejected by the losing carrier.
 */
export const RejectionReason = {
  ContactSupportRequired: "CONTACT_SUPPORT_REQUIRED",
  PhoneNumberWithCarrierRestriction: "PHONE_NUMBER_WITH_CARRIER_RESTRICTION",
  PhoneNumberInactiveOrDisconnected: "PHONE_NUMBER_INACTIVE_OR_DISCONNECTED",
  InvalidEndUserName: "INVALID_END_USER_NAME",
  InvalidAddress: "INVALID_ADDRESS",
  InvalidPin: "INVALID_PIN",
  InvalidAccountNumber: "INVALID_ACCOUNT_NUMBER",
} as const;
export type RejectionReason = (typeof RejectionReason)[keyof typeof RejectionReason] | (string & {});

export const rejectionReasonSchema: EnumSchema<RejectionReason> = s.enumOf<RejectionReason>(RejectionReason);
