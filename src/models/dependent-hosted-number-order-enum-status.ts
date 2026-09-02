import { s, type EnumSchema } from "../core/index.js";

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
