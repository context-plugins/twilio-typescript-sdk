import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  participantConversationEnumStateSchema,
  type ParticipantConversationEnumState,
} from "./participant-conversation-enum-state.js";

export type ConversationsV1ParticipantConversation = {
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
   * [Participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource).
   */
  participantSid?: string | null;
  /**
   * The unique string that identifies the conversation participant as [Conversation
   * User](https://www.twilio.com/docs/conversations/api/user-resource).
   */
  participantUserSid?: string | null;
  /**
   * A unique string identifier for the conversation participant as [Conversation
   * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null
   * if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256
   * characters.
   */
  participantIdentity?: string | null;
  /**
   * Information about how this participant exchanges messages with the conversation. A JSON
   * parameter consisting of type and address fields of the participant.
   */
  participantMessagingBinding?: Record<string, unknown> | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) this
   * Participant belongs to.
   */
  conversationSid?: string | null;
  /** An application-defined string that uniquely identifies the Conversation resource. */
  conversationUniqueName?: string | null;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  conversationFriendlyName?: string | null;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must
   * contain structurally valid JSON if specified. **Note** that if the attributes are not set "{}"
   * will be returned.
   */
  conversationAttributes?: string | null;
  /** The date that this conversation was created, given in ISO 8601 format. */
  conversationDateCreated?: Date | null;
  /** The date that this conversation was last updated, given in ISO 8601 format. */
  conversationDateUpdated?: Date | null;
  /** Identity of the creator of this Conversation. */
  conversationCreatedBy?: string | null;
  /** The current state of this User Conversation. One of `inactive`, `active` or `closed`. */
  conversationState?: ParticipantConversationEnumState;
  /** Timer date values representing state update for this conversation. */
  conversationTimers?: Record<string, unknown> | null;
  /**
   * Contains absolute URLs to access the
   * [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)
   * and [conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) of this
   * conversation.
   */
  links?: Record<string, unknown> | null;
};

export const conversationsV1ParticipantConversationSchema: Schema<ConversationsV1ParticipantConversation> =
  s.object<ConversationsV1ParticipantConversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    participantUserSid: s.optionalNullable(s.string()),
    participantIdentity: s.optionalNullable(s.string()),
    participantMessagingBinding: s.optionalNullable(s.record(s.string(), s.unknown())),
    conversationSid: s.optionalNullable(s.string()),
    conversationUniqueName: s.optionalNullable(s.string()),
    conversationFriendlyName: s.optionalNullable(s.string()),
    conversationAttributes: s.optionalNullable(s.string()),
    conversationDateCreated: s.optionalNullable(s.dateTime()),
    conversationDateUpdated: s.optionalNullable(s.dateTime()),
    conversationCreatedBy: s.optionalNullable(s.string()),
    conversationState: s.optional(s.lazy(() => participantConversationEnumStateSchema)),
    conversationTimers: s.optionalNullable(s.record(s.string(), s.unknown())),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      participantSid: "participant_sid",
      participantUserSid: "participant_user_sid",
      participantIdentity: "participant_identity",
      participantMessagingBinding: "participant_messaging_binding",
      conversationSid: "conversation_sid",
      conversationUniqueName: "conversation_unique_name",
      conversationFriendlyName: "conversation_friendly_name",
      conversationAttributes: "conversation_attributes",
      conversationDateCreated: "conversation_date_created",
      conversationDateUpdated: "conversation_date_updated",
      conversationCreatedBy: "conversation_created_by",
      conversationState: "conversation_state",
      conversationTimers: "conversation_timers",
    },
  });
