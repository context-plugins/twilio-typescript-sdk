import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transcription1 = {
  channel?: number;
  confidence?: number;
  engine?: string;
};

export const transcription1Schema: Schema<Transcription1> = s.object<Transcription1>({
  channel: s.optional(s.number()),
  confidence: s.optional(s.number()),
  engine: s.optional(s.string()),
});
