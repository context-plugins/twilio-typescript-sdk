import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationParticipant,
} from "./conversations-v1-service-service-conversation-service-conversation-participant.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceConversationParticipantResponse = {
  participants?: ConversationsV1ServiceServiceConversationServiceConversationParticipant[];
  meta?: Meta;
};

export const listServiceConversationParticipantResponseSchema: Schema<ListServiceConversationParticipantResponse> =
  s.object<ListServiceConversationParticipantResponse>({
    participants: s.optional(
      s.array(s.lazy(() => conversationsV1ServiceServiceConversationServiceConversationParticipantSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
