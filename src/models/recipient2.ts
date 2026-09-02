import { s, type Schema } from "../core/index.js";
import { channel6Schema, type Channel6 } from "./channel6.js";

export type Recipient2 = {
  address: string;
  channel: Channel6;
  participantId?: string;
};

export const recipient2Schema: Schema<Recipient2> = s.object<Recipient2>({
  address: s.string(),
  channel: channel6Schema,
  participantId: s.optional(s.string()),
});
