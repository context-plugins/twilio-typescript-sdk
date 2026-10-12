import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of bank account if payment source is ACH. One of `consumer-checking`, `consumer-savings`, or
 * `commercial-checking`. The default value is `consumer-checking`.
 */
export const PaymentsEnumBankAccountType = {
  ConsumerChecking: "consumer-checking",
  ConsumerSavings: "consumer-savings",
  CommercialChecking: "commercial-checking",
} as const;
export type PaymentsEnumBankAccountType =
  | (typeof PaymentsEnumBankAccountType)[keyof typeof PaymentsEnumBankAccountType]
  | (string & {});

export const paymentsEnumBankAccountTypeSchema: EnumSchema<PaymentsEnumBankAccountType> =
  s.enumOf<PaymentsEnumBankAccountType>(PaymentsEnumBankAccountType);
