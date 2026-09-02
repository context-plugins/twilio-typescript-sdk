import { s, type Schema } from "../core/index.js";
import { channel6Schema, type Channel6 } from "./channel6.js";

export type Address11 = {
  channel: Channel6;
  address: string;
  channelId?: string;
};

export const address11Schema: Schema<Address11> = s.object<Address11>({
  channel: channel6Schema,
  address: s.string(),
  channelId: s.optional(s.string()),
});
