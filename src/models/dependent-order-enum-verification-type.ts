import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DependentOrderEnumVerificationType = {
  PhoneCall: "phone-call",
  PhoneBill: "phone-bill",
} as const;
export type DependentOrderEnumVerificationType =
  | (typeof DependentOrderEnumVerificationType)[keyof typeof DependentOrderEnumVerificationType]
  | (string & {});

export const dependentOrderEnumVerificationTypeSchema: EnumSchema<DependentOrderEnumVerificationType> =
  s.enumOf<DependentOrderEnumVerificationType>(DependentOrderEnumVerificationType);
