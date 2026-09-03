import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberMobileEnumAddressRequirement = {
  None: "none",
  Any: "any",
  Local: "local",
  Foreign: "foreign",
} as const;
export type IncomingPhoneNumberMobileEnumAddressRequirement =
  | (typeof IncomingPhoneNumberMobileEnumAddressRequirement)[keyof typeof IncomingPhoneNumberMobileEnumAddressRequirement]
  | (string & {});

export const incomingPhoneNumberMobileEnumAddressRequirementSchema: EnumSchema<IncomingPhoneNumberMobileEnumAddressRequirement> =
  s.enumOf<IncomingPhoneNumberMobileEnumAddressRequirement>(IncomingPhoneNumberMobileEnumAddressRequirement);
