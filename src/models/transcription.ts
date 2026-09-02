import { s, type Schema } from "../core/index.js";
import { wordSchema, type Word } from "./word.js";

export type Transcription = {
  channel?: number;
  confidence?: number;
  engine?: string;
  words?: Word[];
};

export const transcriptionSchema: Schema<Transcription> = s.object<Transcription>({
  channel: s.optional(s.number()),
  confidence: s.optional(s.number()),
  engine: s.optional(s.string()),
  words: s.optional(s.array(s.lazy(() => wordSchema))),
});
