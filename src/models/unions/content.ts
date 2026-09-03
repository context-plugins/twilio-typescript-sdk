import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contentTextSchema, type ContentText } from "../content-text.js";
import { contentTranscriptionSchema, type ContentTranscription } from "../content-transcription.js";

export type Content = ContentText | ContentTranscription;

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([s.lazy(() => contentTextSchema), s.lazy(() => contentTranscriptionSchema)]),
);
