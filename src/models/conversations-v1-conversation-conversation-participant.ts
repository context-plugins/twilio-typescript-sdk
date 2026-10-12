import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ConversationConversationParticipant = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this participant.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
   * participant.
   */
  conversationSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * A unique string identifier for the conversation participant as [Conversation
   * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null
   * if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256
   * characters.
   */
  identity?: string | null;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must
   * contain structurally valid JSON if specified. **Note** that if the attributes are not set "{}"
   * will be returned.
   */
  attributes?: string | null;
  /**
   * Information about how this participant exchanges messages with the conversation. A JSON
   * parameter consisting of type and address fields of the participant.
   */
  messagingBinding?: Record<string, unknown> | null;
  /**
   * The SID of a conversation-level
   * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the
   * participant.
   */
  roleSid?: string | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this participant. */
  url?: string | null;
  /**
   * Index of last “read” message in the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
   * Participant.
   */
  lastReadMessageIndex?: number | null;
  /**
   * Timestamp of last “read” message in the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
   * Participant.
   */
  lastReadTimestamp?: string | null;
};

export const conversationsV1ConversationConversationParticipantSchema: Schema<ConversationsV1ConversationConversationParticipant> =
  s.object<ConversationsV1ConversationConversationParticipant>({
    accountSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    messagingBinding: s.optionalNullable(s.record(s.string(), s.unknown())),
    roleSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    lastReadMessageIndex: s.optionalNullable(s.int()),
    lastReadTimestamp: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      conversationSid: "conversation_sid",
      messagingBinding: "messaging_binding",
      roleSid: "role_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      lastReadMessageIndex: "last_read_message_index",
      lastReadTimestamp: "last_read_timestamp",
    },
  });
