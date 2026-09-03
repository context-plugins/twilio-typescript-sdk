import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationMessage,
} from "./conversations-v1-service-service-conversation-service-conversation-message.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceConversationMessageResponse = {
  messages?: ConversationsV1ServiceServiceConversationServiceConversationMessage[];
  meta?: Meta;
};

export const listServiceConversationMessageResponseSchema: Schema<ListServiceConversationMessageResponse> =
  s.object<ListServiceConversationMessageResponse>({
    messages: s.optional(
      s.array(s.lazy(() => conversationsV1ServiceServiceConversationServiceConversationMessageSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
