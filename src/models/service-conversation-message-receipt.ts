import { s, type Schema } from "../core/index.js";
import {
  serviceConversationMessageReceiptEnumDeliveryStatusSchema,
  type ServiceConversationMessageReceiptEnumDeliveryStatus,
} from "./service-conversation-message-receipt-enum-delivery-status.js";

export type ServiceConversationMessageReceipt = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  conversationSid?: string | null;
  messageSid?: string | null;
  sid?: string | null;
  channelMessageSid?: string | null;
  participantSid?: string | null;
  status?: ServiceConversationMessageReceiptEnumDeliveryStatus;
  errorCode?: number;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const serviceConversationMessageReceiptSchema: Schema<ServiceConversationMessageReceipt> =
  s.object<ServiceConversationMessageReceipt>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    messageSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    channelMessageSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => serviceConversationMessageReceiptEnumDeliveryStatusSchema)),
    errorCode: s.optional(s.number()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      messageSid: "message_sid",
      channelMessageSid: "channel_message_sid",
      participantSid: "participant_sid",
      errorCode: "error_code",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
