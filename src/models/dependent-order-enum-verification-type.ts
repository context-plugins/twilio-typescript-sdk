import { s, type EnumSchema } from "../core/index.js";

export const DependentOrderEnumVerificationType = {
  PhoneCall: "phone-call",
  PhoneBill: "phone-bill",
} as const;
export type DependentOrderEnumVerificationType =
  | (typeof DependentOrderEnumVerificationType)[keyof typeof DependentOrderEnumVerificationType]
  | (string & {});

export const dependentOrderEnumVerificationTypeSchema: EnumSchema<DependentOrderEnumVerificationType> =
  s.enumOf<DependentOrderEnumVerificationType>(DependentOrderEnumVerificationType);
