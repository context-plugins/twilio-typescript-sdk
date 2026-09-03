import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2ConversationSchema,
  type ConversationsV2Conversation,
} from "./conversations-v2-conversation.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

export type V2ConversationsResponse = {
  conversations: ConversationsV2Conversation[];
  meta: Meta1;
};

export const v2ConversationsResponseSchema: Schema<V2ConversationsResponse> =
  s.object<V2ConversationsResponse>({
    conversations: s.array(s.lazy(() => conversationsV2ConversationSchema)),
    meta: meta1Schema,
  });
