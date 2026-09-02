import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  configurationWebhookEnumTargetSchema,
  type ConfigurationWebhookEnumTarget,
} from "./configuration-webhook-enum-target.js";

export type ConversationsV1ConfigurationConfigurationWebhook = {
  accountSid?: string | null;
  method?: AmdStatusCallbackMethod;
  filters?: string[] | null;
  preWebhookUrl?: string | null;
  postWebhookUrl?: string | null;
  target?: ConfigurationWebhookEnumTarget;
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
