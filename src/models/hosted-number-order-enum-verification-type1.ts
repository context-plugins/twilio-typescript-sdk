import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HostedNumberOrderEnumVerificationType1 = {
  PhoneCall: "phone-call",
} as const;
export type HostedNumberOrderEnumVerificationType1 =
  | (typeof HostedNumberOrderEnumVerificationType1)[keyof typeof HostedNumberOrderEnumVerificationType1]
  | (string & {});

export const hostedNumberOrderEnumVerificationType1Schema: EnumSchema<HostedNumberOrderEnumVerificationType1> =
  s.enumOf<HostedNumberOrderEnumVerificationType1>(HostedNumberOrderEnumVerificationType1);
