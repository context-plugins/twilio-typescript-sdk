import { s, type Schema } from "../core/index.js";
import {
  conversationsV1ServiceServiceUserServiceUserConversationSchema,
  type ConversationsV1ServiceServiceUserServiceUserConversation,
} from "./conversations-v1-service-service-user-service-user-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceUserConversationResponse = {
  conversations?: ConversationsV1ServiceServiceUserServiceUserConversation[];
  meta?: Meta;
};

export const listServiceUserConversationResponseSchema: Schema<ListServiceUserConversationResponse> =
  s.object<ListServiceUserConversationResponse>({
    conversations: s.optional(
      s.array(s.lazy(() => conversationsV1ServiceServiceUserServiceUserConversationSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
