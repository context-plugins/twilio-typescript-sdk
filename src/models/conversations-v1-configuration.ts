import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1Configuration = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this
   * configuration.
   */
  accountSid?: string | null;
  /**
   * The SID of the default [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) used when creating a
   * conversation.
   */
  defaultChatServiceSid?: string | null;
  /**
   * The SID of the default [Messaging
   * Service](https://www.twilio.com/docs/messaging/api/service-resource) used when creating a
   * conversation.
   */
  defaultMessagingServiceSid?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value
   * for this timer is 1 minute.
   */
  defaultInactiveTimer?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value
   * for this timer is 10 minutes.
   */
  defaultClosedTimer?: string | null;
  /** An absolute API resource URL for this global configuration. */
  url?: string | null;
  /**
   * Contains absolute API resource URLs to access the webhook and default service configurations.
   */
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
