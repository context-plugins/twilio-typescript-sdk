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
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this conversation.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation
   * belongs to.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
   * User Conversation.
   */
  conversationSid?: string | null;
  /** The number of unread Messages in the Conversation for the Participant. */
  unreadMessagesCount?: number | null;
  /** The index of the last Message in the Conversation that the Participant has read. */
  lastReadMessageIndex?: number | null;
  /**
   * The unique ID of the
   * [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)
   * the user conversation belongs to.
   */
  participantSid?: string | null;
  /**
   * The unique string that identifies the [User
   * resource](https://www.twilio.com/docs/conversations/api/user-resource).
   */
  userSid?: string | null;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  friendlyName?: string | null;
  /** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
  conversationState?: UserConversationEnumState;
  /** Timer date values representing state update for this conversation. */
  timers?: Record<string, unknown> | null;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must
   * contain structurally valid JSON if specified. **Note** that if the attributes are not set "{}"
   * will be returned.
   */
  attributes?: string | null;
  /** The date that this conversation was created, given in ISO 8601 format. */
  dateCreated?: Date | null;
  /** The date that this conversation was last updated, given in ISO 8601 format. */
  dateUpdated?: Date | null;
  /** Identity of the creator of this Conversation. */
  createdBy?: string | null;
  /** The Notification Level of this User Conversation. One of `default` or `muted`. */
  notificationLevel?: UserConversationEnumNotificationLevel;
  /**
   * An application-defined string that uniquely identifies the Conversation resource. It can be
   * used to address the resource in place of the resource's `conversation_sid` in the URL.
   */
  uniqueName?: string | null;
  url?: string | null;
  /**
   * Contains absolute URLs to access the
   * [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)
   * and [conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) of this
   * conversation.
   */
  links?: Record<string, unknown> | null;
};

export const conversationsV1UserUserConversationSchema: Schema<ConversationsV1UserUserConversation> =
  s.object<ConversationsV1UserUserConversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    unreadMessagesCount: s.optionalNullable(s.int()),
    lastReadMessageIndex: s.optionalNullable(s.int()),
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
