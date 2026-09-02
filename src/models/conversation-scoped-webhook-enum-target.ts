import { s, type EnumSchema } from "../core/index.js";

export const ConversationScopedWebhookEnumTarget = {
  Webhook: "webhook",
  Trigger: "trigger",
  Studio: "studio",
} as const;
export type ConversationScopedWebhookEnumTarget =
  | (typeof ConversationScopedWebhookEnumTarget)[keyof typeof ConversationScopedWebhookEnumTarget]
  | (string & {});

export const conversationScopedWebhookEnumTargetSchema: EnumSchema<ConversationScopedWebhookEnumTarget> =
  s.enumOf<ConversationScopedWebhookEnumTarget>(ConversationScopedWebhookEnumTarget);
