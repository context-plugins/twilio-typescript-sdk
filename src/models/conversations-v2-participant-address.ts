import { s, type Schema } from "../core/index.js";
import { channel11Schema, type Channel11 } from "./channel11.js";

export type ConversationsV2ParticipantAddress = {
  address: string;
  channel: Channel11;
  participantId?: string;
};

export const conversationsV2ParticipantAddressSchema: Schema<ConversationsV2ParticipantAddress> =
  s.object<ConversationsV2ParticipantAddress>({
    address: s.string(),
    channel: channel11Schema,
    participantId: s.optional(s.string()),
  });
