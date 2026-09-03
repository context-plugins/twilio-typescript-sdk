import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type IncomingPhoneNumberEnumEmergencyStatus =
  | (typeof IncomingPhoneNumberEnumEmergencyStatus)[keyof typeof IncomingPhoneNumberEnumEmergencyStatus]
  | (string & {});

export const incomingPhoneNumberEnumEmergencyStatusSchema: EnumSchema<IncomingPhoneNumberEnumEmergencyStatus> =
  s.enumOf<IncomingPhoneNumberEnumEmergencyStatus>(IncomingPhoneNumberEnumEmergencyStatus);
