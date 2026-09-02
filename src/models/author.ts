import { s, type Schema } from "../core/index.js";
import { channel6Schema, type Channel6 } from "./channel6.js";

export type Author = {
  address: string;
  channel: Channel6;
  participantId?: string;
};

export const authorSchema: Schema<Author> = s.object<Author>({
  address: s.string(),
  channel: channel6Schema,
  participantId: s.optional(s.string()),
});
