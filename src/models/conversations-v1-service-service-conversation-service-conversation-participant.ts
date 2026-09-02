import { s, type Schema } from "../core/index.js";

export type ConversationsV1ServiceServiceConversationServiceConversationParticipant = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  conversationSid?: string | null;
  sid?: string | null;
  identity?: string | null;
  attributes?: string | null;
  messagingBinding?: Record<string, unknown> | null;
  roleSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  lastReadMessageIndex?: number | null;
  lastReadTimestamp?: string | null;
};

export const conversationsV1ServiceServiceConversationServiceConversationParticipantSchema: Schema<ConversationsV1ServiceServiceConversationServiceConversationParticipant> =
  s.object<ConversationsV1ServiceServiceConversationServiceConversationParticipant>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    messagingBinding: s.optionalNullable(s.record(s.string(), s.unknown())),
    roleSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    lastReadMessageIndex: s.optionalNullable(s.number()),
    lastReadTimestamp: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      messagingBinding: "messaging_binding",
      roleSid: "role_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      lastReadMessageIndex: "last_read_message_index",
      lastReadTimestamp: "last_read_timestamp",
    },
  });
