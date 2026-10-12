import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";

export type ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this service.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation
   * belongs to.
   */
  chatServiceSid?: string | null;
  /** The absolute url the pre-event webhook request should be sent to. */
  preWebhookUrl?: string | null;
  /** The absolute url the post-event webhook request should be sent to. */
  postWebhookUrl?: string | null;
  /**
   * The list of events that your configured webhook targets will receive. Events not configured
   * here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`,
   * `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`,
   * `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`,
   * `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`,
   * `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`,
   * `onMessageUpdate` or `onConversationStateUpdated`.
   */
  filters?: string[] | null;
  /** The HTTP method to be used when sending a webhook request. One of `GET` or `POST`. */
  method?: AmdStatusCallbackMethod;
  /** An absolute API resource URL for this webhook. */
  url?: string | null;
};

export const conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema: Schema<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration> =
  s.object<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    preWebhookUrl: s.optionalNullable(s.string()),
    postWebhookUrl: s.optionalNullable(s.string()),
    filters: s.optionalNullable(s.array(s.string())),
    method: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      preWebhookUrl: "pre_webhook_url",
      postWebhookUrl: "post_webhook_url",
    },
  });
