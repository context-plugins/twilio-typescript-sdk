import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
