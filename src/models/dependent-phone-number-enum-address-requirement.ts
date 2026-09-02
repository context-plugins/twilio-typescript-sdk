import { s, type EnumSchema } from "../core/index.js";

export const DependentPhoneNumberEnumAddressRequirement = {
  None: "none",
  Any: "any",
  Local: "local",
  Foreign: "foreign",
} as const;
export type DependentPhoneNumberEnumAddressRequirement =
  | (typeof DependentPhoneNumberEnumAddressRequirement)[keyof typeof DependentPhoneNumberEnumAddressRequirement]
  | (string & {});

export const dependentPhoneNumberEnumAddressRequirementSchema: EnumSchema<DependentPhoneNumberEnumAddressRequirement> =
  s.enumOf<DependentPhoneNumberEnumAddressRequirement>(DependentPhoneNumberEnumAddressRequirement);
