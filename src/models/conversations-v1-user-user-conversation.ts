import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userConversationEnumNotificationLevelSchema,
  type UserConversationEnumNotificationLevel,
} from "./user-conversation-enum-notification-level.js";
import {
  userConversationEnumStateSchema,
  type UserConversationEnumState,
} from "./user-conversation-enum-state.js";

export type ConversationsV1UserUserConversation = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  conversationSid?: string | null;
  unreadMessagesCount?: number | null;
  lastReadMessageIndex?: number | null;
  participantSid?: string | null;
  userSid?: string | null;
  friendlyName?: string | null;
  conversationState?: UserConversationEnumState;
  timers?: Record<string, unknown> | null;
  attributes?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;
  notificationLevel?: UserConversationEnumNotificationLevel;
  uniqueName?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const conversationsV1UserUserConversationSchema: Schema<ConversationsV1UserUserConversation> =
  s.object<ConversationsV1UserUserConversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    unreadMessagesCount: s.optionalNullable(s.number()),
    lastReadMessageIndex: s.optionalNullable(s.number()),
    participantSid: s.optionalNullable(s.string()),
    userSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    conversationState: s.optional(s.lazy(() => userConversationEnumStateSchema)),
    timers: s.optionalNullable(s.record(s.string(), s.unknown())),
    attributes: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    createdBy: s.optionalNullable(s.string()),
    notificationLevel: s.optional(s.lazy(() => userConversationEnumNotificationLevelSchema)),
    uniqueName: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      unreadMessagesCount: "unread_messages_count",
      lastReadMessageIndex: "last_read_message_index",
      participantSid: "participant_sid",
      userSid: "user_sid",
      friendlyName: "friendly_name",
      conversationState: "conversation_state",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
      notificationLevel: "notification_level",
      uniqueName: "unique_name",
    },
  });
