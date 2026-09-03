import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
