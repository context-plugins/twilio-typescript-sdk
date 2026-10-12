import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to verify ownership of the number to be hosted. Can be: `phone-call` or
 * `phone-bill` and the default is `phone-call`.
 */
export const HostedNumberOrderEnumVerificationType1 = {
  PhoneCall: "phone-call",
} as const;
export type HostedNumberOrderEnumVerificationType1 =
  | (typeof HostedNumberOrderEnumVerificationType1)[keyof typeof HostedNumberOrderEnumVerificationType1]
  | (string & {});

export const hostedNumberOrderEnumVerificationType1Schema: EnumSchema<HostedNumberOrderEnumVerificationType1> =
  s.enumOf<HostedNumberOrderEnumVerificationType1>(HostedNumberOrderEnumVerificationType1);
