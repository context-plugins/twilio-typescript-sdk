import { s, type Schema } from "../core/index.js";

export type ConversationsV1ServiceServiceConversationServiceConversationMessage = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  conversationSid?: string | null;
  sid?: string | null;
  index?: number;
  author?: string | null;
  body?: string | null;
  media?: Record<string, unknown>[] | null;
  attributes?: string | null;
  participantSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  delivery?: Record<string, unknown> | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  contentSid?: string | null;
};

export const conversationsV1ServiceServiceConversationServiceConversationMessageSchema: Schema<ConversationsV1ServiceServiceConversationServiceConversationMessage> =
  s.object<ConversationsV1ServiceServiceConversationServiceConversationMessage>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    index: s.optional(s.number()),
    author: s.optionalNullable(s.string()),
    body: s.optionalNullable(s.string()),
    media: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    attributes: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    delivery: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    contentSid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      participantSid: "participant_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      contentSid: "content_sid",
    },
  });
