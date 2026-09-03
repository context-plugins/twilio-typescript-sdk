import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberLocalEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberLocalEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberLocalEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberLocalEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberLocalEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberLocalEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberLocalEnumEmergencyStatus>(IncomingPhoneNumberLocalEnumEmergencyStatus);
