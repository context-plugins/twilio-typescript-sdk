import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentFrequency = {
  Quarterly: "QUARTERLY",
  Yearly: "YEARLY",
} as const;
export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency] | (string & {});

export const paymentFrequencySchema: EnumSchema<PaymentFrequency> =
  s.enumOf<PaymentFrequency>(PaymentFrequency);
