import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  videoV1RoomRoomRecordingSchema,
  type VideoV1RoomRoomRecording,
} from "./video-v1-room-room-recording.js";

export type ListRoomRecordingResponse = {
  recordings?: VideoV1RoomRoomRecording[];
  meta?: Meta;
};

export const listRoomRecordingResponseSchema: Schema<ListRoomRecordingResponse> =
  s.object<ListRoomRecordingResponse>({
    recordings: s.optional(s.array(s.lazy(() => videoV1RoomRoomRecordingSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
