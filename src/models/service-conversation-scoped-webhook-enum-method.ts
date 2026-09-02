import { s, type EnumSchema } from "../core/index.js";

export const ServiceConversationScopedWebhookEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ServiceConversationScopedWebhookEnumMethod =
  | (typeof ServiceConversationScopedWebhookEnumMethod)[keyof typeof ServiceConversationScopedWebhookEnumMethod]
  | (string & {});

export const serviceConversationScopedWebhookEnumMethodSchema: EnumSchema<ServiceConversationScopedWebhookEnumMethod> =
  s.enumOf<ServiceConversationScopedWebhookEnumMethod>(ServiceConversationScopedWebhookEnumMethod);
