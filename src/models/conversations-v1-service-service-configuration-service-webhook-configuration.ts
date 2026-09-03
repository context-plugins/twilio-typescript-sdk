import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";

export type ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  preWebhookUrl?: string | null;
  postWebhookUrl?: string | null;
  filters?: string[] | null;
  method?: AmdStatusCallbackMethod;
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
