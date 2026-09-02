import { s, type Schema } from "../core/index.js";

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
