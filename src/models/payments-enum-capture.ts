import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The piece of payment information that you wish the caller to enter. Must be one of
 * `payment-card-number`, `expiration-date`, `security-code`, `postal-code`, `bank-routing-number`,
 * `bank-account-number`, or their `-matcher` variants for input confirmation when
 * `RequireMatchingInputs` is enabled.
 */
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
