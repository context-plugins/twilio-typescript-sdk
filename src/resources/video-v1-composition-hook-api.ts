import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  compositionHookEnumFormatSchema,
  type CompositionHookEnumFormat,
} from "../models/composition-hook-enum-format.js";
import {
  listCompositionHookResponseSchema,
  type ListCompositionHookResponse,
} from "../models/list-composition-hook-response.js";
import {
  videoV1CompositionHookSchema,
  type VideoV1CompositionHook,
} from "../models/video-v1-composition-hook.js";
import type { Servers } from "../servers.js";

export class VideoV1CompositionHookApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Recording composition hooks
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCompositionHook(
    request: VideoV1CompositionHookApi.CreateCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/CompositionHooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
            {
              name: "VideoLayout",
              value: request.videoLayout,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AudioSources", value: request.audioSources, schema: s.optional(s.array(s.string())) },
            {
              name: "AudioSourcesExcluded",
              value: request.audioSourcesExcluded,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Resolution", value: request.resolution, schema: s.optional(s.string()) },
            {
              name: "Format",
              value: request.format,
              schema: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
   *
   * @remarks
   * Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCompositionHook(
    request: VideoV1CompositionHookApi.DeleteCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Returns a single CompositionHook resource identified by a CompositionHook SID.
   *
   * @remarks
   * Returns a single CompositionHook resource identified by a CompositionHook SID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCompositionHook(
    request: VideoV1CompositionHookApi.FetchCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List of all Recording CompositionHook resources.
   *
   * @remarks
   * List of all Recording CompositionHook resources.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCompositionHook(
    request: VideoV1CompositionHookApi.ListCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompositionHookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/CompositionHooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompositionHookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Recording composition hooks
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCompositionHook(
    request: VideoV1CompositionHookApi.UpdateCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
            {
              name: "VideoLayout",
              value: request.videoLayout,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AudioSources", value: request.audioSources, schema: s.optional(s.array(s.string())) },
            {
              name: "AudioSourcesExcluded",
              value: request.audioSourcesExcluded,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.boolean()) },
            {
              name: "Format",
              value: request.format,
              schema: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
            },
            { name: "Resolution", value: request.resolution, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1CompositionHookApi {
  export type CreateCompositionHookRequest = {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 100 characters
     * long and it must be unique within the account.
     */
    friendlyName: string;
    /**
     * Whether the composition hook is active. When `true`, the composition hook will be triggered
     * for every completed Group Room in the account. When `false`, the composition hook will never
     * be triggered.
     */
    enabled?: boolean;
    /**
     * An object that describes the video layout of the composition hook in terms of regions. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    videoLayout?: Record<string, unknown>;
    /**
     * An array of track names from the same group room to merge into the compositions created by
     * the composition hook. Can include zero or more track names. A composition triggered by the
     * composition hook includes all audio sources specified in `audio_sources` except those
     * specified in `audio_sources_excluded`. The track names in this parameter can include an
     * asterisk as a wild card character, which matches zero or more characters in a track name. For
     * example, `student*` includes tracks named `student` as well as `studentTeam`.
     */
    audioSources?: string[];
    /**
     * An array of track names to exclude. A composition triggered by the composition hook includes
     * all audio sources specified in `audio_sources` except for those specified in
     * `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild
     * card character, which matches zero or more characters in a track name. For example,
     * `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
     */
    audioSourcesExcluded?: string[];
    /**
     * A string that describes the columns (width) and rows (height) of the generated composed video
     * in pixels. Defaults to `640x480`. The string's format is `{width}x{height}` where:
     *
     * * 16 <= `{width}` <= 1280
     * * 16 <= `{height}` <= 1280
     * * `{width}` * `{height}` <= 921,600
     *
     * Typical values are:
     *
     * * HD = `1280x720`
     * * PAL = `1024x576`
     * * VGA = `640x480`
     * * CIF = `320x240`
     *
     * Note that the `resolution` imposes an aspect ratio to the resulting composition. When the
     * original video tracks are constrained by the aspect ratio, they are scaled to fit. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    resolution?: string;
    /**
     * The container format of the media files used by the compositions created by the composition
     * hook. If `mp4` or `webm`, `audio_sources` must have one or more tracks and/or a
     * `video_layout` element must contain a valid `video_sources` list, otherwise an error occurs.
     */
    format?: CompositionHookEnumFormat;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application on every composition event. If not provided, status callback events will not be
     * dispatched.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the
     * default is `POST`.
     */
    statusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * Whether to clip the intervals where there is no active media in the Compositions triggered by
     * the composition hook. The default is `true`. Compositions with `trim` enabled are shorter
     * when the Room is created and no Participant joins for a while as well as if all the
     * Participants leave the room and join later, because those gaps will be removed. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    trim?: boolean;
  };

  export type DeleteCompositionHookRequest = {
    /** The SID of the CompositionHook resource to delete. */
    sid: string;
  };

  export type FetchCompositionHookRequest = {
    /** The SID of the CompositionHook resource to fetch. */
    sid: string;
  };

  export type ListCompositionHookRequest = {
    /** Read only CompositionHook resources with an `enabled` value that matches this parameter. */
    enabled?: boolean;
    /**
     * Read only CompositionHook resources created on or after this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only CompositionHook resources created before this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedBefore?: Date;
    /**
     * Read only CompositionHook resources with friendly names that match this string. The match is
     * not case sensitive and can include asterisk `*` characters as wildcard match.
     */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateCompositionHookRequest = {
    /** The SID of the CompositionHook resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 100 characters
     * long and it must be unique within the account.
     */
    friendlyName: string;
    /**
     * Whether the composition hook is active. When `true`, the composition hook will be triggered
     * for every completed Group Room in the account. When `false`, the composition hook never
     * triggers.
     */
    enabled?: boolean;
    /**
     * A JSON object that describes the video layout of the composition hook in terms of regions.
     * See [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    videoLayout?: Record<string, unknown>;
    /**
     * An array of track names from the same group room to merge into the compositions created by
     * the composition hook. Can include zero or more track names. A composition triggered by the
     * composition hook includes all audio sources specified in `audio_sources` except those
     * specified in `audio_sources_excluded`. The track names in this parameter can include an
     * asterisk as a wild card character, which matches zero or more characters in a track name. For
     * example, `student*` includes tracks named `student` as well as `studentTeam`.
     */
    audioSources?: string[];
    /**
     * An array of track names to exclude. A composition triggered by the composition hook includes
     * all audio sources specified in `audio_sources` except for those specified in
     * `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild
     * card character, which matches zero or more characters in a track name. For example,
     * `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
     */
    audioSourcesExcluded?: string[];
    /**
     * Whether to clip the intervals where there is no active media in the compositions triggered by
     * the composition hook. The default is `true`. Compositions with `trim` enabled are shorter
     * when the Room is created and no Participant joins for a while as well as if all the
     * Participants leave the room and join later, because those gaps will be removed. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    trim?: boolean;
    /**
     * The container format of the media files used by the compositions created by the composition
     * hook. If `mp4` or `webm`, `audio_sources` must have one or more tracks and/or a
     * `video_layout` element must contain a valid `video_sources` list, otherwise an error occurs.
     */
    format?: CompositionHookEnumFormat;
    /**
     * A string that describes the columns (width) and rows (height) of the generated composed video
     * in pixels. Defaults to `640x480`. The string's format is `{width}x{height}` where:
     *
     * * 16 <= `{width}` <= 1280
     * * 16 <= `{height}` <= 1280
     * * `{width}` * `{height}` <= 921,600
     *
     * Typical values are:
     *
     * * HD = `1280x720`
     * * PAL = `1024x576`
     * * VGA = `640x480`
     * * CIF = `320x240`
     *
     * Note that the `resolution` imposes an aspect ratio to the resulting composition. When the
     * original video tracks are constrained by the aspect ratio, they are scaled to fit. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    resolution?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application on every composition event. If not provided, status callback events will not be
     * dispatched.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the
     * default is `POST`.
     */
    statusCallbackMethod?: AmdStatusCallbackMethod;
  };
}
