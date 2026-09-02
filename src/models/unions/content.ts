import { s, type Schema } from "../../core/index.js";
import { contentTextSchema, type ContentText } from "../content-text.js";
import { contentTranscriptionSchema, type ContentTranscription } from "../content-transcription.js";

export type Content = ContentText | ContentTranscription;

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([s.lazy(() => contentTextSchema), s.lazy(() => contentTranscriptionSchema)]),
);
