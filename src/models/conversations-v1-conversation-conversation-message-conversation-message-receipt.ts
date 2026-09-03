import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationMessageReceiptEnumDeliveryStatusSchema,
  type ConversationMessageReceiptEnumDeliveryStatus,
} from "./conversation-message-receipt-enum-delivery-status.js";

export type ConversationsV1ConversationConversationMessageConversationMessageReceipt = {
  accountSid?: string | null;
  conversationSid?: string | null;
  sid?: string | null;
  messageSid?: string | null;
  channelMessageSid?: string | null;
  participantSid?: string | null;
  status?: ConversationMessageReceiptEnumDeliveryStatus;
  errorCode?: number;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const conversationsV1ConversationConversationMessageConversationMessageReceiptSchema: Schema<ConversationsV1ConversationConversationMessageConversationMessageReceipt> =
  s.object<ConversationsV1ConversationConversationMessageConversationMessageReceipt>({
    accountSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    messageSid: s.optionalNullable(s.string()),
    channelMessageSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => conversationMessageReceiptEnumDeliveryStatusSchema)),
    errorCode: s.optional(s.number()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      conversationSid: "conversation_sid",
      messageSid: "message_sid",
      channelMessageSid: "channel_message_sid",
      participantSid: "participant_sid",
      errorCode: "error_code",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
