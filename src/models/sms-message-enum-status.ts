import { s, type EnumSchema } from "../core/index.js";

export const SmsMessageEnumStatus = {
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
export type SmsMessageEnumStatus =
  | (typeof SmsMessageEnumStatus)[keyof typeof SmsMessageEnumStatus]
  | (string & {});

export const smsMessageEnumStatusSchema: EnumSchema<SmsMessageEnumStatus> =
  s.enumOf<SmsMessageEnumStatus>(SmsMessageEnumStatus);
