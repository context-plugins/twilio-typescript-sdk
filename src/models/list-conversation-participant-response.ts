import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ConversationConversationParticipantSchema,
  type ConversationsV1ConversationConversationParticipant,
} from "./conversations-v1-conversation-conversation-participant.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConversationParticipantResponse = {
  participants?: ConversationsV1ConversationConversationParticipant[];
  meta?: Meta;
};

export const listConversationParticipantResponseSchema: Schema<ListConversationParticipantResponse> =
  s.object<ListConversationParticipantResponse>({
    participants: s.optional(s.array(s.lazy(() => conversationsV1ConversationConversationParticipantSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
