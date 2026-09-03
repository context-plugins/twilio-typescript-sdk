import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConfigurationServiceNotification = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  newMessage?: Record<string, unknown> | null;
  addedToConversation?: Record<string, unknown> | null;
  removedFromConversation?: Record<string, unknown> | null;
  logEnabled?: boolean | null;
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
