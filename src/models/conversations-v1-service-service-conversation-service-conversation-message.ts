import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConversationServiceConversationMessage = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this message.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
   * resource is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
   * message.
   */
  conversationSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The index of the message within the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource).
   *
   * @default 0
   */
  index?: number;
  /** The channel specific identifier of the message's author. Defaults to `system`. */
  author?: string | null;
  /** The content of the message, can be up to 1,600 characters long. */
  body?: string | null;
  /**
   * An array of objects that describe the Message's media, if the message contains media. Each
   * object contains these fields: `content_type` with the MIME type of the media, `filename` with
   * the name of the media, `sid` with the SID of the Media resource, and `size` with the media
   * object's file size in bytes. If the Message has no media, this value is `null`.
   */
  media?: Record<string, unknown>[] | null;
  /**
   * A string metadata field you can use to store any data you wish. The string value must contain
   * structurally valid JSON if specified. **Note** that if the attributes are not set "{}" will be
   * returned.
   */
  attributes?: string | null;
  /** The unique ID of messages's author participant. Null in case of `system` sent message. */
  participantSid?: string | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. `null` if the message has not been edited. */
  dateUpdated?: Date | null;
  /**
   * An object that contains the summary of delivery statuses for the message to non-chat
   * participants.
   */
  delivery?: Record<string, unknown> | null;
  /** An absolute API resource URL for this message. */
  url?: string | null;
  /**
   * Contains an absolute API resource URL to access the delivery & read receipts of this message.
   */
  links?: Record<string, unknown> | null;
  /**
   * The unique ID of the multi-channel [Rich Content](https://www.twilio.com/docs/content)
   * template.
   */
  contentSid?: string | null;
};

export const conversationsV1ServiceServiceConversationServiceConversationMessageSchema: Schema<ConversationsV1ServiceServiceConversationServiceConversationMessage> =
  s.object<ConversationsV1ServiceServiceConversationServiceConversationMessage>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    index: s.defaulted(s.int(), 0),
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
