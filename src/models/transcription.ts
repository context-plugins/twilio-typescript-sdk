import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wordSchema, type Word } from "./word.js";

/** Transcription metadata. */
export type Transcription = {
  /** Audio channel identifier (0 for inbound, 1 for outbound). */
  channel?: number;
  /** Overall confidence score for the transcription (0.0-1.0). */
  confidence?: number;
  /** Transcription engine used. */
  engine?: string;
  /** Word-level transcription data with timing information. */
  words?: Word[];
};

export const transcriptionSchema: Schema<Transcription> = s.object<Transcription>({
  channel: s.optional(s.int()),
  confidence: s.optional(s.float64()),
  engine: s.optional(s.string()),
  words: s.optional(s.array(s.lazy(() => wordSchema))),
});
