import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  compositionHookEnumFormatSchema,
  type CompositionHookEnumFormat,
} from "./composition-hook-enum-format.js";

export type VideoV1CompositionHook = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * CompositionHook resource.
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource. Can be up to 100 characters long and
   * must be unique within the account.
   */
  friendlyName?: string | null;
  /**
   * Whether the CompositionHook is active. When `true`, the CompositionHook is triggered for every
   * completed Group Room on the account. When `false`, the CompositionHook is never triggered.
   */
  enabled?: boolean | null;
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
  /** The unique string that we created to identify the CompositionHook resource. */
  sid?: string | null;
  /**
   * The array of track names to include in the compositions created by the composition hook. A
   * composition triggered by the composition hook includes all audio sources specified in
   * `audio_sources` except those specified in `audio_sources_excluded`. The track names in this
   * property can include an asterisk as a wild card character, which matches zero or more
   * characters in a track name. For example, `student*` includes tracks named `student` as well as
   * `studentTeam`. Please, be aware that either video_layout or audio_sources have to be provided
   * to get a valid creation request
   */
  audioSources?: string[] | null;
  /**
   * The array of track names to exclude from the compositions created by the composition hook. A
   * composition triggered by the composition hook includes all audio sources specified in
   * `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this
   * property can include an asterisk as a wild card character, which matches zero or more
   * characters in a track name. For example, `student*` excludes `student` as well as
   * `studentTeam`. This parameter can also be empty.
   */
  audioSourcesExcluded?: string[] | null;
  /**
   * A JSON object that describes the video layout of the composition in terms of regions as
   * specified in the HTTP POST request that created the CompositionHook resource. See [POST
   * Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters)
   * for more information. Please, be aware that either video_layout or audio_sources have to be
   * provided to get a valid creation request
   */
  videoLayout?: Record<string, unknown> | null;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height). The
   * string's format is `{width}x{height}`, such as `640x480`.
   */
  resolution?: string | null;
  /**
   * Whether intervals with no media are clipped, as specified in the POST request that created the
   * CompositionHook resource. Compositions with `trim` enabled are shorter when the Room is created
   * and no Participant joins for a while as well as if all the Participants leave the room and join
   * later, because those gaps will be removed. See [Specifying Video
   * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
   * for more info.
   */
  trim?: boolean | null;
  /**
   * The container format of the media files used by the compositions created by the composition
   * hook. If `mp4` or `webm`, `audio_sources` must have one or more tracks and/or a `video_layout`
   * element must contain a valid `video_sources` list, otherwise an error occurs.
   */
  format?: CompositionHookEnumFormat;
  /**
   * The URL we call using the `status_callback_method` to send status information to your
   * application.
   */
  statusCallback?: string | null;
  /**
   * The HTTP method we should use to call `status_callback`. Can be `POST` or `GET` and defaults to
   * `POST`.
   */
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  /** The absolute URL of the resource. */
  url?: string | null;
};

export const videoV1CompositionHookSchema: Schema<VideoV1CompositionHook> = s.object<VideoV1CompositionHook>({
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  enabled: s.optionalNullable(s.boolean()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  audioSources: s.optionalNullable(s.array(s.string())),
  audioSourcesExcluded: s.optionalNullable(s.array(s.string())),
  videoLayout: s.optionalNullable(s.record(s.string(), s.unknown())),
  resolution: s.optionalNullable(s.string()),
  trim: s.optionalNullable(s.boolean()),
  format: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    audioSources: "audio_sources",
    audioSourcesExcluded: "audio_sources_excluded",
    videoLayout: "video_layout",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
