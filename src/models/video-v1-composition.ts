import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { compositionEnumFormatSchema, type CompositionEnumFormat } from "./composition-enum-format.js";
import { compositionEnumStatusSchema, type CompositionEnumStatus } from "./composition-enum-status.js";

export type VideoV1Composition = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Composition resource.
   */
  accountSid?: string | null;
  /**
   * The status of the composition. Can be: `enqueued`, `processing`, `completed`, `deleted` or
   * `failed`. `enqueued` is the initial state and indicates that the composition request has been
   * received and is scheduled for processing; `processing` indicates the composition is being
   * processed; `completed` indicates the composition has been completed and is available for
   * download; `deleted` means the composition media has been deleted from the system, but its
   * metadata is still available for 30 days; `failed` indicates the composition failed to execute
   * the media processing task.
   */
  status?: CompositionEnumStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the composition's media processing task finished, specified in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCompleted?: Date | null;
  /**
   * The date and time in GMT when the composition generated media was deleted, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateDeleted?: Date | null;
  /** The unique string that we created to identify the Composition resource. */
  sid?: string | null;
  /**
   * The SID of the Group Room that generated the audio and video tracks used in the composition.
   * All media sources included in a composition must belong to the same Group Room.
   */
  roomSid?: string | null;
  /**
   * The array of track names to include in the composition. The composition includes all audio
   * sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The
   * track names in this property can include an asterisk as a wild card character, which matches
   * zero or more characters in a track name. For example, `student*` includes tracks named
   * `student` as well as `studentTeam`.
   */
  audioSources?: string[] | null;
  /**
   * The array of track names to exclude from the composition. The composition includes all audio
   * sources specified in `audio_sources` except for those specified in `audio_sources_excluded`.
   * The track names in this property can include an asterisk as a wild card character, which
   * matches zero or more characters in a track name. For example, `student*` excludes `student` as
   * well as `studentTeam`. This parameter can also be empty.
   */
  audioSourcesExcluded?: string[] | null;
  /**
   * An object that describes the video layout of the composition in terms of regions. See
   * [Specifying Video
   * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
   * for more info.
   */
  videoLayout?: Record<string, unknown> | null;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height). The
   * string's format is `{width}x{height}`, such as `640x480`.
   */
  resolution?: string | null;
  /**
   * Whether to remove intervals with no media, as specified in the POST request that created the
   * composition. Compositions with `trim` enabled are shorter when the Room is created and no
   * Participant joins for a while as well as if all the Participants leave the room and join later,
   * because those gaps will be removed. See [Specifying Video
   * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
   * for more info.
   */
  trim?: boolean | null;
  /**
   * The container format of the composition's media files as specified in the POST request that
   * created the Composition resource. See [POST
   * Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters)
   * for more information.
   */
  format?: CompositionEnumFormat;
  /** The average bit rate of the composition's media. @default 0 */
  bitrate?: number;
  /** The size of the composed media file in bytes. */
  size?: number | null;
  /** The duration of the composition's media file in seconds. @default 0 */
  duration?: number;
  /**
   * The URL of the media file associated with the composition when stored externally. See [External
   * S3 Compositions](/docs/video/api/external-s3-compositions) for more details.
   */
  mediaExternalLocation?: string | null;
  /**
   * The URL called using the `status_callback_method` to send status information on every
   * composition event.
   */
  statusCallback?: string | null;
  /**
   * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
   */
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URL of the media file associated with the composition. */
  links?: Record<string, unknown> | null;
};

export const videoV1CompositionSchema: Schema<VideoV1Composition> = s.object<VideoV1Composition>({
  accountSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => compositionEnumStatusSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateCompleted: s.optionalNullable(s.dateTime()),
  dateDeleted: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  roomSid: s.optionalNullable(s.string()),
  audioSources: s.optionalNullable(s.array(s.string())),
  audioSourcesExcluded: s.optionalNullable(s.array(s.string())),
  videoLayout: s.optionalNullable(s.record(s.string(), s.unknown())),
  resolution: s.optionalNullable(s.string()),
  trim: s.optionalNullable(s.boolean()),
  format: s.optional(s.lazy(() => compositionEnumFormatSchema)),
  bitrate: s.defaulted(s.int(), 0),
  size: s.optionalNullable(s.int()),
  duration: s.defaulted(s.int(), 0),
  mediaExternalLocation: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateCompleted: "date_completed",
    dateDeleted: "date_deleted",
    roomSid: "room_sid",
    audioSources: "audio_sources",
    audioSourcesExcluded: "audio_sources_excluded",
    videoLayout: "video_layout",
    mediaExternalLocation: "media_external_location",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
