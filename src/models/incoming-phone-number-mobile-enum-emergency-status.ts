import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The parameter displays if emergency calling is enabled for this number. Active numbers may place
 * emergency calls by dialing valid emergency numbers for the country.
 */
export const IncomingPhoneNumberMobileEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberMobileEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberMobileEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberMobileEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberMobileEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberMobileEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberMobileEnumEmergencyStatus>(IncomingPhoneNumberMobileEnumEmergencyStatus);
