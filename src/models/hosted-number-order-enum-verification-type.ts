import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to verify ownership of the number to be hosted. Can be: `phone-call` or
 * `phone-bill` and the default is `phone-call`.
 */
export const HostedNumberOrderEnumVerificationType = {
  PhoneCall: "phone-call",
  PhoneBill: "phone-bill",
} as const;
export type HostedNumberOrderEnumVerificationType =
  | (typeof HostedNumberOrderEnumVerificationType)[keyof typeof HostedNumberOrderEnumVerificationType]
  | (string & {});

export const hostedNumberOrderEnumVerificationTypeSchema: EnumSchema<HostedNumberOrderEnumVerificationType> =
  s.enumOf<HostedNumberOrderEnumVerificationType>(HostedNumberOrderEnumVerificationType);
