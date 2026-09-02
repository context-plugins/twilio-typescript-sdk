import { s, type EnumSchema } from "../core/index.js";

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
