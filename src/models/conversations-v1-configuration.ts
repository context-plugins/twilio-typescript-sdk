import { s, type Schema } from "../core/index.js";

export type ConversationsV1Configuration = {
  accountSid?: string | null;
  defaultChatServiceSid?: string | null;
  defaultMessagingServiceSid?: string | null;
  defaultInactiveTimer?: string | null;
  defaultClosedTimer?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const conversationsV1ConfigurationSchema: Schema<ConversationsV1Configuration> =
  s.object<ConversationsV1Configuration>({
    accountSid: s.optionalNullable(s.string()),
    defaultChatServiceSid: s.optionalNullable(s.string()),
    defaultMessagingServiceSid: s.optionalNullable(s.string()),
    defaultInactiveTimer: s.optionalNullable(s.string()),
    defaultClosedTimer: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      defaultChatServiceSid: "default_chat_service_sid",
      defaultMessagingServiceSid: "default_messaging_service_sid",
      defaultInactiveTimer: "default_inactive_timer",
      defaultClosedTimer: "default_closed_timer",
    },
  });
