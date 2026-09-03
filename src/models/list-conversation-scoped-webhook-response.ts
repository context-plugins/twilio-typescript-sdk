import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ConversationConversationScopedWebhookSchema,
  type ConversationsV1ConversationConversationScopedWebhook,
} from "./conversations-v1-conversation-conversation-scoped-webhook.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConversationScopedWebhookResponse = {
  webhooks?: ConversationsV1ConversationConversationScopedWebhook[];
  meta?: Meta;
};

export const listConversationScopedWebhookResponseSchema: Schema<ListConversationScopedWebhookResponse> =
  s.object<ListConversationScopedWebhookResponse>({
    webhooks: s.optional(s.array(s.lazy(() => conversationsV1ConversationConversationScopedWebhookSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
