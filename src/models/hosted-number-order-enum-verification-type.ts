import { s, type EnumSchema } from "../core/index.js";

export const HostedNumberOrderEnumVerificationType = {
  PhoneCall: "phone-call",
  PhoneBill: "phone-bill",
} as const;
export type HostedNumberOrderEnumVerificationType =
  | (typeof HostedNumberOrderEnumVerificationType)[keyof typeof HostedNumberOrderEnumVerificationType]
  | (string & {});

export const hostedNumberOrderEnumVerificationTypeSchema: EnumSchema<HostedNumberOrderEnumVerificationType> =
  s.enumOf<HostedNumberOrderEnumVerificationType>(HostedNumberOrderEnumVerificationType);
