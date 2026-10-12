import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the hosted number order. Can be: `twilio-processing`, `received`,
 * `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`,
 * `failed`, or `action-required`., Status of this resource. It can hold one of the values: 1.
 * Twilio Processing 2. Received, 3. Pending LOA, 4. Carrier Processing, 5. Completed, 6. Action
 * Required, 7. Failed. See the [HostedNumberOrders Status
 * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values)
 * section for more information on each of these statuses.
 */
export const DependentOrderEnumStatus = {
  TwilioProcessing: "twilio-processing",
  Received: "received",
  PendingVerification: "pending-verification",
  Verified: "verified",
  PendingLoa: "pending-loa",
  CarrierProcessing: "carrier-processing",
  Testing: "testing",
  Completed: "completed",
  Failed: "failed",
  ActionRequired: "action-required",
} as const;
export type DependentOrderEnumStatus =
  | (typeof DependentOrderEnumStatus)[keyof typeof DependentOrderEnumStatus]
  | (string & {});

export const dependentOrderEnumStatusSchema: EnumSchema<DependentOrderEnumStatus> =
  s.enumOf<DependentOrderEnumStatus>(DependentOrderEnumStatus);
