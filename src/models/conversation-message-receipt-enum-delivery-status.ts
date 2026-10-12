import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The message delivery status, can be `read`, `failed`, `delivered`, `undelivered`, `sent` or null.
 */
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
