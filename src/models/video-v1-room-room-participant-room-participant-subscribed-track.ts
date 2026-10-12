import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomParticipantSubscribedTrackEnumKindSchema,
  type RoomParticipantSubscribedTrackEnumKind,
} from "./room-participant-subscribed-track-enum-kind.js";

export type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack = {
  /** The unique string that we created to identify the RoomParticipantSubscribedTrack resource. */
  sid?: string | null;
  /** The SID of the participant that subscribes to the track. */
  participantSid?: string | null;
  /** The SID of the participant that publishes the track. */
  publisherSid?: string | null;
  /** The SID of the room where the track is published. */
  roomSid?: string | null;
  /**
   * The track name. Must have no more than 128 characters and be unique among the participant's
   * published tracks.
   */
  name?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** Whether the track is enabled. */
  enabled?: boolean | null;
  /** The track type. Can be: `audio`, `video` or `data`. */
  kind?: RoomParticipantSubscribedTrackEnumKind;
  /** The absolute URL of the resource. */
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
