import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceConversationScopedWebhookEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ServiceConversationScopedWebhookEnumMethod =
  | (typeof ServiceConversationScopedWebhookEnumMethod)[keyof typeof ServiceConversationScopedWebhookEnumMethod]
  | (string & {});

export const serviceConversationScopedWebhookEnumMethodSchema: EnumSchema<ServiceConversationScopedWebhookEnumMethod> =
  s.enumOf<ServiceConversationScopedWebhookEnumMethod>(ServiceConversationScopedWebhookEnumMethod);
