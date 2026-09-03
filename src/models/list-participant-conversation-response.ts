import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ParticipantConversationSchema,
  type ConversationsV1ParticipantConversation,
} from "./conversations-v1-participant-conversation.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListParticipantConversationResponse = {
  conversations?: ConversationsV1ParticipantConversation[];
  meta?: Meta;
};

export const listParticipantConversationResponseSchema: Schema<ListParticipantConversationResponse> =
  s.object<ListParticipantConversationResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversationsV1ParticipantConversationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
