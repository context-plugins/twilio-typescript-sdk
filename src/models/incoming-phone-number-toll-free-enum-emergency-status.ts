import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The parameter displays if emergency calling is enabled for this number. Active numbers may place
 * emergency calls by dialing valid emergency numbers for the country.
 */
export const IncomingPhoneNumberTollFreeEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberTollFreeEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberTollFreeEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberTollFreeEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumEmergencyStatus>(IncomingPhoneNumberTollFreeEnumEmergencyStatus);
