import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2ParticipantSchema,
  type ConversationsV2Participant,
} from "./conversations-v2-participant.js";
import { meta2Schema, type Meta2 } from "./meta2.js";

export type V2ConversationsParticipantsResponse = {
  participants: ConversationsV2Participant[];
  meta: Meta2;
};

export const v2ConversationsParticipantsResponseSchema: Schema<V2ConversationsParticipantsResponse> =
  s.object<V2ConversationsParticipantsResponse>({
    participants: s.array(s.lazy(() => conversationsV2ParticipantSchema)),
    meta: meta2Schema,
  });
