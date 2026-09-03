import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomParticipantPublishedTrackEnumKindSchema,
  type RoomParticipantPublishedTrackEnumKind,
} from "./room-participant-published-track-enum-kind.js";

export type VideoV1RoomRoomParticipantRoomParticipantPublishedTrack = {
  sid?: string | null;
  participantSid?: string | null;
  roomSid?: string | null;
  name?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  enabled?: boolean | null;
  kind?: RoomParticipantPublishedTrackEnumKind;
  url?: string | null;
};

export const videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema: Schema<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack> =
  s.object<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack>({
    sid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    enabled: s.optionalNullable(s.boolean()),
    kind: s.optional(s.lazy(() => roomParticipantPublishedTrackEnumKindSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      participantSid: "participant_sid",
      roomSid: "room_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
