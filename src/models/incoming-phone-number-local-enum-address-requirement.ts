import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberLocalEnumAddressRequirement = {
  None: "none",
  Any: "any",
  Local: "local",
  Foreign: "foreign",
} as const;
export type IncomingPhoneNumberLocalEnumAddressRequirement =
  | (typeof IncomingPhoneNumberLocalEnumAddressRequirement)[keyof typeof IncomingPhoneNumberLocalEnumAddressRequirement]
  | (string & {});

export const incomingPhoneNumberLocalEnumAddressRequirementSchema: EnumSchema<IncomingPhoneNumberLocalEnumAddressRequirement> =
  s.enumOf<IncomingPhoneNumberLocalEnumAddressRequirement>(IncomingPhoneNumberLocalEnumAddressRequirement);
