import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumStatus = {
  Queued: "queued",
  Sending: "sending",
  Sent: "sent",
  Failed: "failed",
  Delivered: "delivered",
  Undelivered: "undelivered",
  Receiving: "receiving",
  Received: "received",
  Accepted: "accepted",
  Scheduled: "scheduled",
  Read: "read",
  PartiallyDelivered: "partially_delivered",
  Canceled: "canceled",
} as const;
export type MessageEnumStatus = (typeof MessageEnumStatus)[keyof typeof MessageEnumStatus] | (string & {});

export const messageEnumStatusSchema: EnumSchema<MessageEnumStatus> =
  s.enumOf<MessageEnumStatus>(MessageEnumStatus);
