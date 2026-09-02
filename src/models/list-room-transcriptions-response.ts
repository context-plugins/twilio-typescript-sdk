import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  videoV1RoomRoomTranscriptionsSchema,
  type VideoV1RoomRoomTranscriptions,
} from "./video-v1-room-room-transcriptions.js";

export type ListRoomTranscriptionsResponse = {
  transcriptions?: VideoV1RoomRoomTranscriptions[];
  meta?: Meta;
};

export const listRoomTranscriptionsResponseSchema: Schema<ListRoomTranscriptionsResponse> =
  s.object<ListRoomTranscriptionsResponse>({
    transcriptions: s.optional(s.array(s.lazy(() => videoV1RoomRoomTranscriptionsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
