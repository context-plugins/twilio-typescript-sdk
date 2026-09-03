import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberMobileEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberMobileEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberMobileEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberMobileEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberMobileEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberMobileEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberMobileEnumEmergencyStatus>(IncomingPhoneNumberMobileEnumEmergencyStatus);
