import { s, type EnumSchema } from "../core/index.js";

export const MessageInteractionEnumResourceStatus = {
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
export type MessageInteractionEnumResourceStatus =
  | (typeof MessageInteractionEnumResourceStatus)[keyof typeof MessageInteractionEnumResourceStatus]
  | (string & {});

export const messageInteractionEnumResourceStatusSchema: EnumSchema<MessageInteractionEnumResourceStatus> =
  s.enumOf<MessageInteractionEnumResourceStatus>(MessageInteractionEnumResourceStatus);
