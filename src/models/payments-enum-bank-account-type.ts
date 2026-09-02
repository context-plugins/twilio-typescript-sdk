import { s, type EnumSchema } from "../core/index.js";

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
