import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberTollFreeEnumAddressRequirement = {
  None: "none",
  Any: "any",
  Local: "local",
  Foreign: "foreign",
} as const;
export type IncomingPhoneNumberTollFreeEnumAddressRequirement =
  | (typeof IncomingPhoneNumberTollFreeEnumAddressRequirement)[keyof typeof IncomingPhoneNumberTollFreeEnumAddressRequirement]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumAddressRequirementSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumAddressRequirement> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumAddressRequirement>(
    IncomingPhoneNumberTollFreeEnumAddressRequirement,
  );
