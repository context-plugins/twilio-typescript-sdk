import { s, type EnumSchema } from "../core/index.js";

export const ConversationScopedWebhookEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ConversationScopedWebhookEnumMethod =
  | (typeof ConversationScopedWebhookEnumMethod)[keyof typeof ConversationScopedWebhookEnumMethod]
  | (string & {});

export const conversationScopedWebhookEnumMethodSchema: EnumSchema<ConversationScopedWebhookEnumMethod> =
  s.enumOf<ConversationScopedWebhookEnumMethod>(ConversationScopedWebhookEnumMethod);
