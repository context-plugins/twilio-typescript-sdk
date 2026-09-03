import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationMessageReceiptEnumDeliveryStatus = {
  Read: "read",
  Failed: "failed",
  Delivered: "delivered",
  Undelivered: "undelivered",
  Sent: "sent",
} as const;
export type ConversationMessageReceiptEnumDeliveryStatus =
  | (typeof ConversationMessageReceiptEnumDeliveryStatus)[keyof typeof ConversationMessageReceiptEnumDeliveryStatus]
  | (string & {});

export const conversationMessageReceiptEnumDeliveryStatusSchema: EnumSchema<ConversationMessageReceiptEnumDeliveryStatus> =
  s.enumOf<ConversationMessageReceiptEnumDeliveryStatus>(ConversationMessageReceiptEnumDeliveryStatus);
