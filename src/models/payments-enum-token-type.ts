import { s, type EnumSchema } from "../core/index.js";

export const PaymentsEnumTokenType = {
  OneTime: "one-time",
  Reusable: "reusable",
  PaymentMethod: "payment-method",
} as const;
export type PaymentsEnumTokenType =
  | (typeof PaymentsEnumTokenType)[keyof typeof PaymentsEnumTokenType]
  | (string & {});

export const paymentsEnumTokenTypeSchema: EnumSchema<PaymentsEnumTokenType> =
  s.enumOf<PaymentsEnumTokenType>(PaymentsEnumTokenType);
