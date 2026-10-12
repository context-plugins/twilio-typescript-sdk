import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the current payment session should be cancelled or completed. When `cancel` the
 * payment session is cancelled. When `complete`, Twilio sends the payment information to the
 * selected Pay Connector for processing.
 */
export const PaymentsEnumStatus = {
  Complete: "complete",
  Cancel: "cancel",
} as const;
export type PaymentsEnumStatus = (typeof PaymentsEnumStatus)[keyof typeof PaymentsEnumStatus] | (string & {});

export const paymentsEnumStatusSchema: EnumSchema<PaymentsEnumStatus> =
  s.enumOf<PaymentsEnumStatus>(PaymentsEnumStatus);
