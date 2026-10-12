import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The new status to set for the port in request. */
export const NewStatus = {
  InReview: "in_review",
  WaitingForSignature: "waiting_for_signature",
  PortSubmitted: "port_submitted",
  PortRejected: "port_rejected",
  PortPending: "port_pending",
  Canceled: "canceled",
  Completed: "completed",
  Canceling: "canceling",
} as const;
export type NewStatus = (typeof NewStatus)[keyof typeof NewStatus] | (string & {});

export const newStatusSchema: EnumSchema<NewStatus> = s.enumOf<NewStatus>(NewStatus);
