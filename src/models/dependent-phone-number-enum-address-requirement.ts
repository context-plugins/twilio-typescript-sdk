import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address)
 * registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
 */
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
