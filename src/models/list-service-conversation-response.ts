import { s, type Schema } from "../core/index.js";
import {
  conversationsV1ServiceServiceConversationSchema,
  type ConversationsV1ServiceServiceConversation,
} from "./conversations-v1-service-service-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceConversationResponse = {
  conversations?: ConversationsV1ServiceServiceConversation[];
  meta?: Meta;
};

export const listServiceConversationResponseSchema: Schema<ListServiceConversationResponse> =
  s.object<ListServiceConversationResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversationsV1ServiceServiceConversationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
