import { s, type EnumSchema } from "../core/index.js";

export const ServiceConversationScopedWebhookEnumTarget = {
  Webhook: "webhook",
  Trigger: "trigger",
  Studio: "studio",
} as const;
export type ServiceConversationScopedWebhookEnumTarget =
  | (typeof ServiceConversationScopedWebhookEnumTarget)[keyof typeof ServiceConversationScopedWebhookEnumTarget]
  | (string & {});

export const serviceConversationScopedWebhookEnumTargetSchema: EnumSchema<ServiceConversationScopedWebhookEnumTarget> =
  s.enumOf<ServiceConversationScopedWebhookEnumTarget>(ServiceConversationScopedWebhookEnumTarget);
