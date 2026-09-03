import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ConversationConversationScopedWebhook = {
  sid?: string | null;
  accountSid?: string | null;
  conversationSid?: string | null;
  target?: string | null;
  url?: string | null;
  configuration?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const conversationsV1ConversationConversationScopedWebhookSchema: Schema<ConversationsV1ConversationConversationScopedWebhook> =
  s.object<ConversationsV1ConversationConversationScopedWebhook>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    target: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      conversationSid: "conversation_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
