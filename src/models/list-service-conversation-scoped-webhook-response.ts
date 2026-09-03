import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook,
} from "./conversations-v1-service-service-conversation-service-conversation-scoped-webhook.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceConversationScopedWebhookResponse = {
  webhooks?: ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[];
  meta?: Meta;
};

export const listServiceConversationScopedWebhookResponseSchema: Schema<ListServiceConversationScopedWebhookResponse> =
  s.object<ListServiceConversationScopedWebhookResponse>({
    webhooks: s.optional(
      s.array(s.lazy(() => conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
