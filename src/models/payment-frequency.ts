import { s, type EnumSchema } from "../core/index.js";

export const PaymentFrequency = {
  Quarterly: "QUARTERLY",
  Yearly: "YEARLY",
} as const;
export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency] | (string & {});

export const paymentFrequencySchema: EnumSchema<PaymentFrequency> =
  s.enumOf<PaymentFrequency>(PaymentFrequency);
