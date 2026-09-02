import { s, type Schema } from "../core/index.js";
import {
  conversationsV1ConversationConversationMessageSchema,
  type ConversationsV1ConversationConversationMessage,
} from "./conversations-v1-conversation-conversation-message.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConversationMessageResponse = {
  messages?: ConversationsV1ConversationConversationMessage[];
  meta?: Meta;
};

export const listConversationMessageResponseSchema: Schema<ListConversationMessageResponse> =
  s.object<ListConversationMessageResponse>({
    messages: s.optional(s.array(s.lazy(() => conversationsV1ConversationConversationMessageSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
