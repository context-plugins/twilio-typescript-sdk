import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberMobileEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberMobileEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberMobileEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberMobileEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberMobileEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberMobileEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberMobileEnumEmergencyStatus>(IncomingPhoneNumberMobileEnumEmergencyStatus);
