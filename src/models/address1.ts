import { s, type Schema } from "../core/index.js";
import { channel5Schema, type Channel5 } from "./channel5.js";

export type Address1 = {
  channel: Channel5;
  address: string;
  channelId?: string;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
  channel: channel5Schema,
  address: s.string(),
  channelId: s.optional(s.string()),
});
