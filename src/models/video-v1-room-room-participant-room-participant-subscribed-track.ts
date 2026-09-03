import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomParticipantSubscribedTrackEnumKindSchema,
  type RoomParticipantSubscribedTrackEnumKind,
} from "./room-participant-subscribed-track-enum-kind.js";

export type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack = {
  sid?: string | null;
  participantSid?: string | null;
  publisherSid?: string | null;
  roomSid?: string | null;
  name?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  enabled?: boolean | null;
  kind?: RoomParticipantSubscribedTrackEnumKind;
  url?: string | null;
};

export const videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema: Schema<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack> =
  s.object<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack>({
    sid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    publisherSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    enabled: s.optionalNullable(s.boolean()),
    kind: s.optional(s.lazy(() => roomParticipantSubscribedTrackEnumKindSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      participantSid: "participant_sid",
      publisherSid: "publisher_sid",
      roomSid: "room_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
