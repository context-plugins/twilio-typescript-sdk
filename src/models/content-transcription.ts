import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transcriptionSchema, type Transcription } from "./transcription.js";

export type ContentTranscription = {
  /** Content type discriminator. @default "TRANSCRIPTION" */
  type?: "TRANSCRIPTION";
  /** Transcribed text. */
  text: string;
  /** Transcription metadata. */
  transcription?: Transcription;
};

export const contentTranscriptionSchema: Schema<ContentTranscription> = s.object<ContentTranscription>({
  type: s.defaulted(s.literal("TRANSCRIPTION"), "TRANSCRIPTION"),
  text: s.string(),
  transcription: s.optional(s.lazy(() => transcriptionSchema)),
});
