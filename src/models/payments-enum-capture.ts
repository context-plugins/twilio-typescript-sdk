import { s, type EnumSchema } from "../core/index.js";

export const PaymentsEnumCapture = {
  PaymentCardNumber: "payment-card-number",
  ExpirationDate: "expiration-date",
  SecurityCode: "security-code",
  PostalCode: "postal-code",
  BankRoutingNumber: "bank-routing-number",
  BankAccountNumber: "bank-account-number",
  PaymentCardNumberMatcher: "payment-card-number-matcher",
  ExpirationDateMatcher: "expiration-date-matcher",
  SecurityCodeMatcher: "security-code-matcher",
  PostalCodeMatcher: "postal-code-matcher",
} as const;
export type PaymentsEnumCapture =
  | (typeof PaymentsEnumCapture)[keyof typeof PaymentsEnumCapture]
  | (string & {});

export const paymentsEnumCaptureSchema: EnumSchema<PaymentsEnumCapture> =
  s.enumOf<PaymentsEnumCapture>(PaymentsEnumCapture);
