import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  configurationWebhookEnumTargetSchema,
  type ConfigurationWebhookEnumTarget,
} from "./configuration-webhook-enum-target.js";

export type ConversationsV1ConfigurationConfigurationWebhook = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this conversation.
   */
  accountSid?: string | null;
  /** The HTTP method to be used when sending a webhook request. */
  method?: AmdStatusCallbackMethod;
  /**
   * The list of webhook event triggers that are enabled for this Service: `onMessageAdded`,
   * `onMessageUpdated`, `onMessageRemoved`, `onMessageAdd`, `onMessageUpdate`, `onMessageRemove`,
   * `onConversationUpdated`, `onConversationRemoved`, `onConversationAdd`, `onConversationAdded`,
   * `onConversationRemove`, `onConversationUpdate`, `onConversationStateUpdated`,
   * `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onParticipantAdd`,
   * `onParticipantRemove`, `onParticipantUpdate`, `onDeliveryUpdated`, `onUserAdded`,
   * `onUserUpdate`, `onUserUpdated`
   */
  filters?: string[] | null;
  /** The absolute url the pre-event webhook request should be sent to. */
  preWebhookUrl?: string | null;
  /** The absolute url the post-event webhook request should be sent to. */
  postWebhookUrl?: string | null;
  /** The routing target of the webhook. Can be ordinary or route internally to Flex */
  target?: ConfigurationWebhookEnumTarget;
  /** An absolute API resource API resource URL for this webhook. */
  url?: string | null;
};

export const conversationsV1ConfigurationConfigurationWebhookSchema: Schema<ConversationsV1ConfigurationConfigurationWebhook> =
  s.object<ConversationsV1ConfigurationConfigurationWebhook>({
    accountSid: s.optionalNullable(s.string()),
    method: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    filters: s.optionalNullable(s.array(s.string())),
    preWebhookUrl: s.optionalNullable(s.string()),
    postWebhookUrl: s.optionalNullable(s.string()),
    target: s.optional(s.lazy(() => configurationWebhookEnumTargetSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      preWebhookUrl: "pre_webhook_url",
      postWebhookUrl: "post_webhook_url",
    },
  });
