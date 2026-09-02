import { s, type Schema } from "../core/index.js";
import {
  conversationsV1UserUserConversationSchema,
  type ConversationsV1UserUserConversation,
} from "./conversations-v1-user-user-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListUserConversationResponse = {
  conversations?: ConversationsV1UserUserConversation[];
  meta?: Meta;
};

export const listUserConversationResponseSchema: Schema<ListUserConversationResponse> =
  s.object<ListUserConversationResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversationsV1UserUserConversationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
