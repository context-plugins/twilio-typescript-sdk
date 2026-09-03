import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
