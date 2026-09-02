import { s, type EnumSchema } from "../core/index.js";

export const PaymentsEnumPaymentMethod = {
  CreditCard: "credit-card",
  AchDebit: "ach-debit",
} as const;
export type PaymentsEnumPaymentMethod =
  | (typeof PaymentsEnumPaymentMethod)[keyof typeof PaymentsEnumPaymentMethod]
  | (string & {});

export const paymentsEnumPaymentMethodSchema: EnumSchema<PaymentsEnumPaymentMethod> =
  s.enumOf<PaymentsEnumPaymentMethod>(PaymentsEnumPaymentMethod);
