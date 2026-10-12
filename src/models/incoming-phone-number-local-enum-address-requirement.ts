import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address)
 * registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
 */
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
