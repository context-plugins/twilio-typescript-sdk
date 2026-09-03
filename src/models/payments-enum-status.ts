import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentsEnumStatus = {
  Complete: "complete",
  Cancel: "cancel",
} as const;
export type PaymentsEnumStatus = (typeof PaymentsEnumStatus)[keyof typeof PaymentsEnumStatus] | (string & {});

export const paymentsEnumStatusSchema: EnumSchema<PaymentsEnumStatus> =
  s.enumOf<PaymentsEnumStatus>(PaymentsEnumStatus);
