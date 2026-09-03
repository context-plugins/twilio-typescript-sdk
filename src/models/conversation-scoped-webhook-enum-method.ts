import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationScopedWebhookEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ConversationScopedWebhookEnumMethod =
  | (typeof ConversationScopedWebhookEnumMethod)[keyof typeof ConversationScopedWebhookEnumMethod]
  | (string & {});

export const conversationScopedWebhookEnumMethodSchema: EnumSchema<ConversationScopedWebhookEnumMethod> =
  s.enumOf<ConversationScopedWebhookEnumMethod>(ConversationScopedWebhookEnumMethod);
