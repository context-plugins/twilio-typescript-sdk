import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema,
  type VideoV1RoomRoomParticipantRoomParticipantPublishedTrack,
} from "./video-v1-room-room-participant-room-participant-published-track.js";

export type ListRoomParticipantPublishedTrackResponse = {
  publishedTracks?: VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[];
  meta?: Meta;
};

export const listRoomParticipantPublishedTrackResponseSchema: Schema<ListRoomParticipantPublishedTrackResponse> =
  s.object<ListRoomParticipantPublishedTrackResponse>({
    publishedTracks: s.optional(
      s.array(s.lazy(() => videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      publishedTracks: "published_tracks",
    },
  });
