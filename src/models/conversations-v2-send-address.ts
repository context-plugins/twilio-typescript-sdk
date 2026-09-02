import { s, type Schema } from "../core/index.js";
import { channel2Schema, type Channel2 } from "./channel2.js";

export type ConversationsV2SendAddress = {
  address: string;
  channel: Channel2;
  participantId?: string;
};

export const conversationsV2SendAddressSchema: Schema<ConversationsV2SendAddress> =
  s.object<ConversationsV2SendAddress>({
    address: s.string(),
    channel: channel2Schema,
    participantId: s.optional(s.string()),
  });
