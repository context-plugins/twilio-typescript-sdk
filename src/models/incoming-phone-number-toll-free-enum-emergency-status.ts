import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberTollFreeEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberTollFreeEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberTollFreeEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberTollFreeEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumEmergencyStatus>(IncomingPhoneNumberTollFreeEnumEmergencyStatus);
