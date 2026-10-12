import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the hosted number order. Can be: `twilio-processing`, `received`,
 * `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`,
 * `failed`, or `action-required`.
 */
export const HostedNumberOrderEnumStatus = {
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
export type HostedNumberOrderEnumStatus =
  | (typeof HostedNumberOrderEnumStatus)[keyof typeof HostedNumberOrderEnumStatus]
  | (string & {});

export const hostedNumberOrderEnumStatusSchema: EnumSchema<HostedNumberOrderEnumStatus> =
  s.enumOf<HostedNumberOrderEnumStatus>(HostedNumberOrderEnumStatus);
