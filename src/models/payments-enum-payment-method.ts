import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentsEnumPaymentMethod = {
  CreditCard: "credit-card",
  AchDebit: "ach-debit",
} as const;
export type PaymentsEnumPaymentMethod =
  | (typeof PaymentsEnumPaymentMethod)[keyof typeof PaymentsEnumPaymentMethod]
  | (string & {});

export const paymentsEnumPaymentMethodSchema: EnumSchema<PaymentsEnumPaymentMethod> =
  s.enumOf<PaymentsEnumPaymentMethod>(PaymentsEnumPaymentMethod);
