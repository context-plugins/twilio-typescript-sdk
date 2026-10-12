import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this conversation.
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
   * webhook.
   */
  conversationSid?: string | null;
  /** The target of this webhook: `webhook`, `studio`, `trigger` */
  target?: string | null;
  /** An absolute API resource URL for this webhook. */
  url?: string | null;
  /** The configuration of this webhook. Is defined based on target. */
  configuration?: Record<string, unknown> | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
};

export const conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema: Schema<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook> =
  s.object<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    target: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
