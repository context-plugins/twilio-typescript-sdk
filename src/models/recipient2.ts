import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
