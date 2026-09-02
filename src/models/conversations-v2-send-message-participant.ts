import { s, type Schema } from "../core/index.js";
import { channel3Schema, type Channel3 } from "./channel3.js";

export type ConversationsV2SendMessageParticipant = {
  participantId?: string;
  address?: string;
  channel?: Channel3;
};

export const conversationsV2SendMessageParticipantSchema: Schema<ConversationsV2SendMessageParticipant> =
  s.object<ConversationsV2SendMessageParticipant>({
    participantId: s.optional(s.string()),
    address: s.optional(s.string()),
    channel: s.optional(s.lazy(() => channel3Schema)),
  });
