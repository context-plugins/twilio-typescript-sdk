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
  compositionEnumFormatSchema,
  type CompositionEnumFormat,
} from "../models/composition-enum-format.js";
import {
  compositionEnumStatusSchema,
  type CompositionEnumStatus,
} from "../models/composition-enum-status.js";
import {
  listCompositionResponseSchema,
  type ListCompositionResponse,
} from "../models/list-composition-response.js";
import { videoV1CompositionSchema, type VideoV1Composition } from "../models/video-v1-composition.js";
import type { Servers } from "../servers.js";

export class VideoV1CompositionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Recording compositions
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComposition(
    request: VideoV1CompositionApi.CreateCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Composition, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Compositions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "RoomSid", value: request.roomSid, schema: s.string() },
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
              schema: s.optional(s.lazy(() => compositionEnumFormatSchema)),
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
        success: { kind: "json", schema: videoV1CompositionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Recording Composition resource identified by a Composition SID.
   *
   * @remarks
   * Delete a Recording Composition resource identified by a Composition SID.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteComposition(
    request: VideoV1CompositionApi.DeleteCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default6("/v1/Compositions/{Sid}"),
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
   * Returns a single Composition resource identified by a Composition SID.
   *
   * @remarks
   * Returns a single Composition resource identified by a Composition SID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchComposition(
    request: VideoV1CompositionApi.FetchCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Composition, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Compositions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1CompositionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List of all Recording compositions.
   *
   * @remarks
   * List of all Recording compositions.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listComposition(
    request: VideoV1CompositionApi.ListCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompositionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Compositions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => compositionEnumStatusSchema)),
          },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "RoomSid", value: request.roomSid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompositionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1CompositionApi {
  export type CreateCompositionRequest = {
    /** The SID of the Group Room with the media tracks to be used as composition sources. */
    roomSid: string;
    /**
     * An object that describes the video layout of the composition in terms of regions. See
     * [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info. Please, be aware that either video_layout or audio_sources have to be provided
     * to get a valid creation request
     */
    videoLayout?: Record<string, unknown>;
    /**
     * An array of track names from the same group room to merge into the new composition. Can
     * include zero or more track names. The new composition includes all audio sources specified in
     * `audio_sources` except for those specified in `audio_sources_excluded`. The track names in
     * this parameter can include an asterisk as a wild card character, which will match zero or
     * more characters in a track name. For example, `student*` includes `student` as well as
     * `studentTeam`. Please, be aware that either video_layout or audio_sources have to be provided
     * to get a valid creation request
     */
    audioSources?: string[];
    /**
     * An array of track names to exclude. The new composition includes all audio sources specified
     * in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in
     * this parameter can include an asterisk as a wild card character, which will match zero or
     * more characters in a track name. For example, `student*` excludes `student` as well as
     * `studentTeam`. This parameter can also be empty.
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
     * The container format of the composition's media files as specified in the POST request that
     * created the Composition resource. See [POST
     * Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters)
     * for more information.
     */
    format?: CompositionEnumFormat;
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
     * Whether to clip the intervals where there is no active media in the composition. The default
     * is `true`. Compositions with `trim` enabled are shorter when the Room is created and no
     * Participant joins for a while as well as if all the Participants leave the room and join
     * later, because those gaps will be removed. See [Specifying Video
     * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
     * for more info.
     */
    trim?: boolean;
  };

  export type DeleteCompositionRequest = {
    /** The SID of the Composition resource to delete. */
    sid: string;
  };

  export type FetchCompositionRequest = {
    /** The SID of the Composition resource to fetch. */
    sid: string;
  };

  export type ListCompositionRequest = {
    /**
     * Read only Composition resources with this status. Can be: `enqueued`, `processing`,
     * `completed`, `deleted`, or `failed`.
     */
    status?: CompositionEnumStatus;
    /**
     * Read only Composition resources created on or after this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
     */
    dateCreatedAfter?: Date;
    /** Read only Composition resources created before this ISO 8601 date-time with time zone. */
    dateCreatedBefore?: Date;
    /** Read only Composition resources with this Room SID. */
    roomSid?: string;
    /** How many resources to return in each list page. @default 50 */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
