import { s, type EnumSchema } from "../core/index.js";

export const DependentPhoneNumberEnumEmergencyStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type DependentPhoneNumberEnumEmergencyStatus =
  | (typeof DependentPhoneNumberEnumEmergencyStatus)[keyof typeof DependentPhoneNumberEnumEmergencyStatus]
  | (string & {});

export const dependentPhoneNumberEnumEmergencyStatusSchema: EnumSchema<DependentPhoneNumberEnumEmergencyStatus> =
  s.enumOf<DependentPhoneNumberEnumEmergencyStatus>(DependentPhoneNumberEnumEmergencyStatus);
