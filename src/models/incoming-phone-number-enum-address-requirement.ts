import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberEnumAddressRequirement = {
  None: "none",
  Any: "any",
  Local: "local",
  Foreign: "foreign",
} as const;
export type IncomingPhoneNumberEnumAddressRequirement =
  | (typeof IncomingPhoneNumberEnumAddressRequirement)[keyof typeof IncomingPhoneNumberEnumAddressRequirement]
  | (string & {});

export const incomingPhoneNumberEnumAddressRequirementSchema: EnumSchema<IncomingPhoneNumberEnumAddressRequirement> =
  s.enumOf<IncomingPhoneNumberEnumAddressRequirement>(IncomingPhoneNumberEnumAddressRequirement);
