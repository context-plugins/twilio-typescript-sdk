import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`,
 * `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read`
 * (WhatsApp only). For more information, See [detailed
 * descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).
 */
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
