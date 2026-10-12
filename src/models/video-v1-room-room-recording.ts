import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roomRecordingEnumCodecSchema, type RoomRecordingEnumCodec } from "./room-recording-enum-codec.js";
import { roomRecordingEnumFormatSchema, type RoomRecordingEnumFormat } from "./room-recording-enum-format.js";
import { roomRecordingEnumStatusSchema, type RoomRecordingEnumStatus } from "./room-recording-enum-status.js";
import { roomRecordingEnumTypeSchema, type RoomRecordingEnumType } from "./room-recording-enum-type.js";

export type VideoV1RoomRoomRecording = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * RoomRecording resource.
   */
  accountSid?: string | null;
  /**
   * The status of the recording. Can be: `processing`, `completed`, or `deleted`. `processing`
   * indicates the Recording is still being captured. `completed` indicates the Recording has been
   * captured and is now available for download. `deleted` means the recording media has been
   * deleted from the system, but its metadata is still available for historical purposes.
   */
  status?: RoomRecordingEnumStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The unique string that we created to identify the RoomRecording resource. */
  sid?: string | null;
  /** The SID of the recording source. For a Room Recording, this value is a `track_sid`. */
  sourceSid?: string | null;
  /** The size of the recorded track in bytes. */
  size?: number | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The recording's media type. Can be: `audio` or `video`. */
  type?: RoomRecordingEnumType;
  /**
   * The duration of the recording rounded to the nearest second. Sub-second duration tracks have a
   * `duration` of 1 second
   */
  duration?: number | null;
  containerFormat?: RoomRecordingEnumFormat;
  /** The codec used for the recording. Can be: `VP8` or `H264`. */
  codec?: RoomRecordingEnumCodec;
  /** A list of SIDs related to the Recording. Includes the `room_sid` and `participant_sid`. */
  groupingSids?: Record<string, unknown> | null;
  /**
   * The name that was given to the source track of the recording. If no name is given, the
   * `source_sid` is used.
   */
  trackName?: string | null;
  /**
   * The time in milliseconds elapsed between an arbitrary point in time, common to all group rooms,
   * and the moment when the source room of this track started. This information provides a
   * synchronization mechanism for recordings belonging to the same room.
   */
  offset?: number | null;
  /**
   * The URL of the media file associated with the recording when stored externally. See [External
   * S3 Recordings](/docs/video/api/external-s3-recordings) for more details.
   */
  mediaExternalLocation?: string | null;
  /** The SID of the Room resource the recording is associated with. */
  roomSid?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const videoV1RoomRoomRecordingSchema: Schema<VideoV1RoomRoomRecording> =
  s.object<VideoV1RoomRoomRecording>({
    accountSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => roomRecordingEnumStatusSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    sid: s.optionalNullable(s.string()),
    sourceSid: s.optionalNullable(s.string()),
    size: s.optionalNullable(s.int()),
    url: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => roomRecordingEnumTypeSchema)),
    duration: s.optionalNullable(s.int()),
    containerFormat: s.optional(s.lazy(() => roomRecordingEnumFormatSchema)),
    codec: s.optional(s.lazy(() => roomRecordingEnumCodecSchema)),
    groupingSids: s.optionalNullable(s.record(s.string(), s.unknown())),
    trackName: s.optionalNullable(s.string()),
    offset: s.optionalNullable(s.int()),
    mediaExternalLocation: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      sourceSid: "source_sid",
      containerFormat: "container_format",
      groupingSids: "grouping_sids",
      trackName: "track_name",
      mediaExternalLocation: "media_external_location",
      roomSid: "room_sid",
    },
  });
