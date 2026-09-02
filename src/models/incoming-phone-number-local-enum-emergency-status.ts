import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberLocalEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberLocalEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberLocalEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberLocalEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberLocalEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberLocalEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberLocalEnumEmergencyStatus>(IncomingPhoneNumberLocalEnumEmergencyStatus);
