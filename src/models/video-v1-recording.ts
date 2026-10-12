import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { recordingEnumCodecSchema, type RecordingEnumCodec } from "./recording-enum-codec.js";
import { recordingEnumFormatSchema, type RecordingEnumFormat } from "./recording-enum-format.js";
import { recordingEnumStatus1Schema, type RecordingEnumStatus1 } from "./recording-enum-status1.js";
import { recordingEnumTypeSchema, type RecordingEnumType } from "./recording-enum-type.js";

export type VideoV1Recording = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Recording resource.
   */
  accountSid?: string | null;
  /**
   * The status of the recording. Can be: `processing`, `completed`, or `deleted`. `processing`
   * indicates the recording is still being captured; `completed` indicates the recording has been
   * captured and is now available for download. `deleted` means the recording media has been
   * deleted from the system, but its metadata is still available.
   */
  status?: RecordingEnumStatus1;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The unique string that we created to identify the Recording resource. */
  sid?: string | null;
  /** The SID of the recording source. For a Room Recording, this value is a `track_sid`. */
  sourceSid?: string | null;
  /** The size of the recorded track, in bytes. */
  size?: number | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The recording's media type. Can be: `audio` or `video`. */
  type?: RecordingEnumType;
  /**
   * The duration of the recording in seconds rounded to the nearest second. Sub-second tracks have
   * a `Duration` property of 1 second
   */
  duration?: number | null;
  containerFormat?: RecordingEnumFormat;
  /** The codec used to encode the track. Can be: `VP8`, `H264`, `OPUS`, and `PCMU`. */
  codec?: RecordingEnumCodec;
  /** A list of SIDs related to the recording. Includes the `room_sid` and `participant_sid`. */
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
  /**
   * The URL called using the `status_callback_method` to send status information on every recording
   * event.
   */
  statusCallback?: string | null;
  /**
   * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
   */
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const videoV1RecordingSchema: Schema<VideoV1Recording> = s.object<VideoV1Recording>({
  accountSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => recordingEnumStatus1Schema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  sourceSid: s.optionalNullable(s.string()),
  size: s.optionalNullable(s.int()),
  url: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => recordingEnumTypeSchema)),
  duration: s.optionalNullable(s.int()),
  containerFormat: s.optional(s.lazy(() => recordingEnumFormatSchema)),
  codec: s.optional(s.lazy(() => recordingEnumCodecSchema)),
  groupingSids: s.optionalNullable(s.record(s.string(), s.unknown())),
  trackName: s.optionalNullable(s.string()),
  offset: s.optionalNullable(s.int()),
  mediaExternalLocation: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    sourceSid: "source_sid",
    containerFormat: "container_format",
    groupingSids: "grouping_sids",
    trackName: "track_name",
    mediaExternalLocation: "media_external_location",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
