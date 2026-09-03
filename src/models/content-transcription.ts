import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transcriptionSchema, type Transcription } from "./transcription.js";

export type ContentTranscription = {
  type: "TRANSCRIPTION";
  text: string;
  transcription?: Transcription;
};

export const contentTranscriptionSchema: Schema<ContentTranscription> = s.object<ContentTranscription>({
  type: s.literal("TRANSCRIPTION"),
  text: s.string(),
  transcription: s.optional(s.lazy(() => transcriptionSchema)),
});
