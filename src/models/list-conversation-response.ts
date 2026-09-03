import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ConversationSchema,
  type ConversationsV1Conversation,
} from "./conversations-v1-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConversationResponse = {
  conversations?: ConversationsV1Conversation[];
  meta?: Meta;
};

export const listConversationResponseSchema: Schema<ListConversationResponse> =
  s.object<ListConversationResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversationsV1ConversationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
