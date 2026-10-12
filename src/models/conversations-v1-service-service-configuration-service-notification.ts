import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConfigurationServiceNotification = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this configuration.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration
   * applies to.
   */
  chatServiceSid?: string | null;
  /** The Push Notification configuration for New Messages. */
  newMessage?: Record<string, unknown> | null;
  /** The Push Notification configuration for being added to a Conversation. */
  addedToConversation?: Record<string, unknown> | null;
  /** The Push Notification configuration for being removed from a Conversation. */
  removedFromConversation?: Record<string, unknown> | null;
  /** Weather the notification logging is enabled. */
  logEnabled?: boolean | null;
  /** An absolute API resource URL for this configuration. */
  url?: string | null;
};

export const conversationsV1ServiceServiceConfigurationServiceNotificationSchema: Schema<ConversationsV1ServiceServiceConfigurationServiceNotification> =
  s.object<ConversationsV1ServiceServiceConfigurationServiceNotification>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    newMessage: s.optionalNullable(s.record(s.string(), s.unknown())),
    addedToConversation: s.optionalNullable(s.record(s.string(), s.unknown())),
    removedFromConversation: s.optionalNullable(s.record(s.string(), s.unknown())),
    logEnabled: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      newMessage: "new_message",
      addedToConversation: "added_to_conversation",
      removedFromConversation: "removed_from_conversation",
      logEnabled: "log_enabled",
    },
  });
