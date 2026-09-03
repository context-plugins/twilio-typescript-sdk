import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { videoV1RecordingSchema, type VideoV1Recording } from "./video-v1-recording.js";

export type ListRecordingResponse1 = {
  recordings?: VideoV1Recording[];
  meta?: Meta;
};

export const listRecordingResponse1Schema: Schema<ListRecordingResponse1> = s.object<ListRecordingResponse1>({
  recordings: s.optional(s.array(s.lazy(() => videoV1RecordingSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
