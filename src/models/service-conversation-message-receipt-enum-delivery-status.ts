import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The message delivery status, can be `read`, `failed`, `delivered`, `undelivered`, `sent` or null.
 */
export const ServiceConversationMessageReceiptEnumDeliveryStatus = {
  Read: "read",
  Failed: "failed",
  Delivered: "delivered",
  Undelivered: "undelivered",
  Sent: "sent",
} as const;
export type ServiceConversationMessageReceiptEnumDeliveryStatus =
  | (typeof ServiceConversationMessageReceiptEnumDeliveryStatus)[keyof typeof ServiceConversationMessageReceiptEnumDeliveryStatus]
  | (string & {});

export const serviceConversationMessageReceiptEnumDeliveryStatusSchema: EnumSchema<ServiceConversationMessageReceiptEnumDeliveryStatus> =
  s.enumOf<ServiceConversationMessageReceiptEnumDeliveryStatus>(
    ServiceConversationMessageReceiptEnumDeliveryStatus,
  );
