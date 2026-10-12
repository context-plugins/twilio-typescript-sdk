import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed
 * LOA, 4. canceled, 5. failed. See the section entitled [Status
 * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
 * for more information on each of these statuses.
 */
export const DependentHostedNumberOrderEnumStatus = {
  Received: "received",
  Verified: "verified",
  PendingLoa: "pending-loa",
  CarrierProcessing: "carrier-processing",
  Completed: "completed",
  Failed: "failed",
  ActionRequired: "action-required",
} as const;
export type DependentHostedNumberOrderEnumStatus =
  | (typeof DependentHostedNumberOrderEnumStatus)[keyof typeof DependentHostedNumberOrderEnumStatus]
  | (string & {});

export const dependentHostedNumberOrderEnumStatusSchema: EnumSchema<DependentHostedNumberOrderEnumStatus> =
  s.enumOf<DependentHostedNumberOrderEnumStatus>(DependentHostedNumberOrderEnumStatus);
