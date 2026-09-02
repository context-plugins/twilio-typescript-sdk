import { s, type Schema } from "../core/index.js";
import { channel1Schema, type Channel1 } from "./channel1.js";

export type ConversationsV2Address = {
  channel: Channel1;
  address: string;
  channelId?: string;
};

export const conversationsV2AddressSchema: Schema<ConversationsV2Address> = s.object<ConversationsV2Address>({
  channel: channel1Schema,
  address: s.string(),
  channelId: s.optional(s.string()),
});
