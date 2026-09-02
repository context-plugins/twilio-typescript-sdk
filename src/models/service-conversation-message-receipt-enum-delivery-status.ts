import { s, type EnumSchema } from "../core/index.js";

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
