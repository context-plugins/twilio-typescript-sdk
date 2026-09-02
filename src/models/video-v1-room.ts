import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  recordingTranscriptionEnumStatusSchema,
  type RecordingTranscriptionEnumStatus,
} from "./recording-transcription-enum-status.js";
import { roomEnumRoomTypeSchema, type RoomEnumRoomType } from "./room-enum-room-type.js";
import { roomEnumVideoCodecSchema, type RoomEnumVideoCodec } from "./room-enum-video-codec.js";

export type VideoV1Room = {
  sid?: string | null;
  status?: RecordingTranscriptionEnumStatus;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  accountSid?: string | null;
  enableTurn?: boolean | null;
  uniqueName?: string | null;
  statusCallback?: string | null;
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  endTime?: Date | null;
  duration?: number | null;
  type?: RoomEnumRoomType;
  maxParticipants?: number;
  maxParticipantDuration?: number;
  maxConcurrentPublishedTracks?: number | null;
  recordParticipantsOnConnect?: boolean | null;
  videoCodecs?: RoomEnumVideoCodec[] | null;
  mediaRegion?: string | null;
  audioOnly?: boolean | null;
  emptyRoomTimeout?: number;
  unusedRoomTimeout?: number;
  largeRoom?: boolean | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const videoV1RoomSchema: Schema<VideoV1Room> = s.object<VideoV1Room>({
  sid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => recordingTranscriptionEnumStatusSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  accountSid: s.optionalNullable(s.string()),
  enableTurn: s.optionalNullable(s.boolean()),
  uniqueName: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  endTime: s.optionalNullable(s.dateTime()),
  duration: s.optionalNullable(s.number()),
  type: s.optional(s.lazy(() => roomEnumRoomTypeSchema)),
  maxParticipants: s.optional(s.number()),
  maxParticipantDuration: s.optional(s.number()),
  maxConcurrentPublishedTracks: s.optionalNullable(s.number()),
  recordParticipantsOnConnect: s.optionalNullable(s.boolean()),
  videoCodecs: s.optionalNullable(s.array(s.lazy(() => roomEnumVideoCodecSchema))),
  mediaRegion: s.optionalNullable(s.string()),
  audioOnly: s.optionalNullable(s.boolean()),
  emptyRoomTimeout: s.optional(s.number()),
  unusedRoomTimeout: s.optional(s.number()),
  largeRoom: s.optionalNullable(s.boolean()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    accountSid: "account_sid",
    enableTurn: "enable_turn",
    uniqueName: "unique_name",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
    endTime: "end_time",
    maxParticipants: "max_participants",
    maxParticipantDuration: "max_participant_duration",
    maxConcurrentPublishedTracks: "max_concurrent_published_tracks",
    recordParticipantsOnConnect: "record_participants_on_connect",
    videoCodecs: "video_codecs",
    mediaRegion: "media_region",
    audioOnly: "audio_only",
    emptyRoomTimeout: "empty_room_timeout",
    unusedRoomTimeout: "unused_room_timeout",
    largeRoom: "large_room",
  },
});
