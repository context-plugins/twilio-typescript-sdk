import { s, type EnumSchema } from "../core/index.js";

export const InteractionEnumResourceStatus = {
  Accepted: "accepted",
  Answered: "answered",
  Busy: "busy",
  Canceled: "canceled",
  Completed: "completed",
  Deleted: "deleted",
  Delivered: "delivered",
  DeliveryUnknown: "delivery-unknown",
  Failed: "failed",
  InProgress: "in-progress",
  Initiated: "initiated",
  NoAnswer: "no-answer",
  Queued: "queued",
  Received: "received",
  Receiving: "receiving",
  Ringing: "ringing",
  Scheduled: "scheduled",
  Sending: "sending",
  Sent: "sent",
  Undelivered: "undelivered",
  Unknown: "unknown",
} as const;
export type InteractionEnumResourceStatus =
  | (typeof InteractionEnumResourceStatus)[keyof typeof InteractionEnumResourceStatus]
  | (string & {});

export const interactionEnumResourceStatusSchema: EnumSchema<InteractionEnumResourceStatus> =
  s.enumOf<InteractionEnumResourceStatus>(InteractionEnumResourceStatus);
