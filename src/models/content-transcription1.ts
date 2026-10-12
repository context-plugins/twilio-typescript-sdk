import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transcription1Schema, type Transcription1 } from "./transcription1.js";

export type ContentTranscription1 = {
  /** @default "TRANSCRIPTION" */
  type?: "TRANSCRIPTION";
  text: string;
  transcription?: Transcription1;
};

export const contentTranscription1Schema: Schema<ContentTranscription1> = s.object<ContentTranscription1>({
  type: s.defaulted(s.literal("TRANSCRIPTION"), "TRANSCRIPTION"),
  text: s.string(),
  transcription: s.optional(s.lazy(() => transcription1Schema)),
});
