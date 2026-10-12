import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  recordingTranscriptionEnumStatusSchema,
  type RecordingTranscriptionEnumStatus,
} from "./recording-transcription-enum-status.js";
import { roomEnumRoomTypeSchema, type RoomEnumRoomType } from "./room-enum-room-type.js";
import { roomEnumVideoCodecSchema, type RoomEnumVideoCodec } from "./room-enum-video-codec.js";

export type VideoV1Room = {
  /** The unique string that Twilio created to identify the Room resource. */
  sid?: string | null;
  status?: RecordingTranscriptionEnumStatus;
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
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Room
   * resource.
   */
  accountSid?: string | null;
  /** Deprecated, now always considered to be true. */
  enableTurn?: boolean | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used as a
   * `room_sid` in place of the resource's `sid` in the URL to address the resource, assuming it
   * does not contain any [reserved characters](https://tools.ietf.org/html/rfc3986#section-2.2)
   * that would need to be URL encoded. This value is unique for `in-progress` rooms. SDK clients
   * can use this name to connect to the room. REST API clients can use this name in place of the
   * Room SID to interact with the room as long as the room is `in-progress`.
   */
  uniqueName?: string | null;
  /**
   * The URL Twilio calls using the `status_callback_method` to send status information to your
   * application on every room event. See [Status
   * Callbacks](https://www.twilio.com/docs/video/api/status-callbacks) for more info.
   */
  statusCallback?: string | null;
  /**
   * The HTTP method Twilio uses to call `status_callback`. Can be `POST` or `GET` and defaults to
   * `POST`.
   */
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  /**
   * The UTC end time of the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  endTime?: Date | null;
  /** The duration of the room in seconds. */
  duration?: number | null;
  /**
   * Type of room. Use `group` for new implementations. `go`, `peer-to-peer`, and `group-small` are
   * deprecated.
   */
  type?: RoomEnumRoomType;
  /** The maximum number of concurrent Participants allowed in the room. @default 0 */
  maxParticipants?: number;
  /**
   * The maximum number of seconds a Participant can be connected to the room. The maximum possible
   * value is 86400 seconds (24 hours). The default is 14400 seconds (4 hours).
   *
   * @default 0
   */
  maxParticipantDuration?: number;
  /**
   * The maximum number of published audio, video, and data tracks all participants combined are
   * allowed to publish in the room at the same time. Check [Programmable Video
   * Limits](https://www.twilio.com/docs/video/programmable-video-limits) for more details. If it is
   * set to 0 it means unconstrained.
   */
  maxConcurrentPublishedTracks?: number | null;
  /** Whether to start recording when Participants connect. */
  recordParticipantsOnConnect?: boolean | null;
  /**
   * An array of the video codecs that are supported when publishing a track in the room. Can be:
   * `VP8` and `H264`.
   */
  videoCodecs?: RoomEnumVideoCodec[] | null;
  /**
   * The region for the Room's media server. Can be one of the [available Media
   * Regions](https://www.twilio.com/docs/video/ip-addresses#media-servers).
   */
  mediaRegion?: string | null;
  /**
   * When set to true, indicates that the participants in the room will only publish audio. No video
   * tracks will be allowed.
   */
  audioOnly?: boolean | null;
  /**
   * Specifies how long (in minutes) a room will remain active after last participant leaves. Can be
   * configured when creating a room via REST API. For Ad-Hoc rooms this value cannot be changed.
   *
   * @default 0
   */
  emptyRoomTimeout?: number;
  /**
   * Specifies how long (in minutes) a room will remain active if no one joins. Can be configured
   * when creating a room via REST API. For Ad-Hoc rooms this value cannot be changed.
   *
   * @default 0
   */
  unusedRoomTimeout?: number;
  /** Indicates if this is a large room. */
  largeRoom?: boolean | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of related resources. */
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
  duration: s.optionalNullable(s.int()),
  type: s.optional(s.lazy(() => roomEnumRoomTypeSchema)),
  maxParticipants: s.defaulted(s.int(), 0),
  maxParticipantDuration: s.defaulted(s.int(), 0),
  maxConcurrentPublishedTracks: s.optionalNullable(s.int()),
  recordParticipantsOnConnect: s.optionalNullable(s.boolean()),
  videoCodecs: s.optionalNullable(s.array(s.lazy(() => roomEnumVideoCodecSchema))),
  mediaRegion: s.optionalNullable(s.string()),
  audioOnly: s.optionalNullable(s.boolean()),
  emptyRoomTimeout: s.defaulted(s.int(), 0),
  unusedRoomTimeout: s.defaulted(s.int(), 0),
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
