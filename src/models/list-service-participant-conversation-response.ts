import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceParticipantConversationSchema,
  type ConversationsV1ServiceServiceParticipantConversation,
} from "./conversations-v1-service-service-participant-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceParticipantConversationResponse = {
  conversations?: ConversationsV1ServiceServiceParticipantConversation[];
  meta?: Meta;
};

export const listServiceParticipantConversationResponseSchema: Schema<ListServiceParticipantConversationResponse> =
  s.object<ListServiceParticipantConversationResponse>({
    conversations: s.optional(
      s.array(s.lazy(() => conversationsV1ServiceServiceParticipantConversationSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
