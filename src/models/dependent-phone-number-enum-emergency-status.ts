import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the phone number is enabled for emergency calling. */
export const DependentPhoneNumberEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type DependentPhoneNumberEnumEmergencyStatus =
  | (typeof DependentPhoneNumberEnumEmergencyStatus)[keyof typeof DependentPhoneNumberEnumEmergencyStatus]
  | (string & {});

export const dependentPhoneNumberEnumEmergencyStatusSchema: EnumSchema<DependentPhoneNumberEnumEmergencyStatus> =
  s.enumOf<DependentPhoneNumberEnumEmergencyStatus>(DependentPhoneNumberEnumEmergencyStatus);
