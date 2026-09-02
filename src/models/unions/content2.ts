import { s, type Schema } from "../../core/index.js";
import { contentText1Schema, type ContentText1 } from "../content-text1.js";
import { contentTranscription1Schema, type ContentTranscription1 } from "../content-transcription1.js";

export type Content2 = ContentText1 | ContentTranscription1;

export const content2Schema: Schema<Content2> = s.of<Content2>(
  s.union([s.lazy(() => contentText1Schema), s.lazy(() => contentTranscription1Schema)]),
);
