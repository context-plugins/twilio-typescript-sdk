import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema,
  type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack,
} from "./video-v1-room-room-participant-room-participant-subscribed-track.js";

export type ListRoomParticipantSubscribedTrackResponse = {
  subscribedTracks?: VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[];
  meta?: Meta;
};

export const listRoomParticipantSubscribedTrackResponseSchema: Schema<ListRoomParticipantSubscribedTrackResponse> =
  s.object<ListRoomParticipantSubscribedTrackResponse>({
    subscribedTracks: s.optional(
      s.array(s.lazy(() => videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      subscribedTracks: "subscribed_tracks",
    },
  });
