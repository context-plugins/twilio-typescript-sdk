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
import { listRoomResponseSchema, type ListRoomResponse } from "../models/list-room-response.js";
import {
  recordingTranscriptionEnumStatusSchema,
  type RecordingTranscriptionEnumStatus,
} from "../models/recording-transcription-enum-status.js";
import { roomEnumRoomTypeSchema, type RoomEnumRoomType } from "../models/room-enum-room-type.js";
import { roomEnumVideoCodecSchema, type RoomEnumVideoCodec } from "../models/room-enum-video-codec.js";
import { videoV1RoomSchema, type VideoV1Room } from "../models/video-v1-room.js";
import type { Servers } from "../servers.js";

export class VideoV1RoomApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Video rooms with one or more participants
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRoom(
    request: VideoV1RoomApi.CreateRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "EnableTurn", value: request.enableTurn, schema: s.optional(s.boolean()) },
            { name: "Type", value: request.type, schema: s.optional(s.lazy(() => roomEnumRoomTypeSchema)) },
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.int()) },
            {
              name: "RecordParticipantsOnConnect",
              value: request.recordParticipantsOnConnect,
              schema: s.optional(s.boolean()),
            },
            {
              name: "TranscribeParticipantsOnConnect",
              value: request.transcribeParticipantsOnConnect,
              schema: s.optional(s.boolean()),
            },
            {
              name: "VideoCodecs",
              value: request.videoCodecs,
              schema: s.optional(s.array(s.lazy(() => roomEnumVideoCodecSchema))),
            },
            { name: "MediaRegion", value: request.mediaRegion, schema: s.optional(s.string()) },
            {
              name: "RecordingRules",
              value: request.recordingRules,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            {
              name: "TranscriptionsConfiguration",
              value: request.transcriptionsConfiguration,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AudioOnly", value: request.audioOnly, schema: s.optional(s.boolean()) },
            {
              name: "MaxParticipantDuration",
              value: request.maxParticipantDuration,
              schema: s.optional(s.int()),
            },
            { name: "EmptyRoomTimeout", value: request.emptyRoomTimeout, schema: s.optional(s.int()) },
            { name: "UnusedRoomTimeout", value: request.unusedRoomTimeout, schema: s.optional(s.int()) },
            { name: "LargeRoom", value: request.largeRoom, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Video rooms with one or more participants
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoom(
    request: VideoV1RoomApi.FetchRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Video rooms with one or more participants
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoom(
    request: VideoV1RoomApi.ListRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => recordingTranscriptionEnumStatusSchema)),
          },
          { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Video rooms with one or more participants
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoom(
    request: VideoV1RoomApi.UpdateRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: recordingTranscriptionEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1RoomApi {
  export type CreateRoomRequest = {
    /** Deprecated, now always considered to be true. */
    enableTurn?: boolean;
    /**
     * Type of room. Use `group` for new implementations. `go`, `peer-to-peer`, and `group-small`
     * are deprecated.
     */
    type?: RoomEnumRoomType;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as a
     * `room_sid` in place of the resource's `sid` in the URL to address the resource, assuming it
     * does not contain any [reserved characters](https://tools.ietf.org/html/rfc3986#section-2.2)
     * that would need to be URL encoded. This value is unique for `in-progress` rooms. SDK clients
     * can use this name to connect to the room. REST API clients can use this name in place of the
     * Room SID to interact with the room as long as the room is `in-progress`.
     */
    uniqueName?: string;
    /**
     * The URL Twilio should call using the `status_callback_method` to send status information to
     * your application on every room event. See [Status
     * Callbacks](https://www.twilio.com/docs/video/api/status-callbacks) for more info.
     */
    statusCallback?: string;
    /** The HTTP method Twilio should use to call `status_callback`. Can be `POST` or `GET`. */
    statusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The maximum number of concurrent Participants allowed in the room. The maximum allowed value
     * is 50.
     */
    maxParticipants?: number;
    /** Whether to start recording when Participants connect. */
    recordParticipantsOnConnect?: boolean;
    /**
     * Whether to start transcriptions when Participants connect. If TranscriptionsConfiguration is
     * not provided, default settings will be used.
     */
    transcribeParticipantsOnConnect?: boolean;
    /**
     * An array of the video codecs that are supported when publishing a track in the room. Can be:
     * `VP8` and `H264`.
     */
    videoCodecs?: RoomEnumVideoCodec[];
    /**
     * The region for the Room's media server. Can be one of the [available Media
     * Regions](https://www.twilio.com/docs/video/ip-addresses#group-rooms-media-servers).
     */
    mediaRegion?: string;
    /**
     * A collection of Recording Rules that describe how to include or exclude matching tracks for
     * recording
     */
    recordingRules?: Record<string, unknown>;
    /**
     * A collection of properties that describe transcription behaviour. If
     * TranscribeParticipantsOnConnect is set to true and TranscriptionsConfiguration is not
     * provided, default settings will be used.
     */
    transcriptionsConfiguration?: Record<string, unknown>;
    /**
     * When set to true, indicates that the participants in the room will only publish audio. No
     * video tracks will be allowed.
     */
    audioOnly?: boolean;
    /**
     * The maximum number of seconds a Participant can be connected to the room. The maximum
     * possible value is 86400 seconds (24 hours). The default is 14400 seconds (4 hours).
     */
    maxParticipantDuration?: number;
    /**
     * Configures how long (in minutes) a room will remain active after last participant leaves.
     * Valid values range from 1 to 60 minutes (no fractions).
     */
    emptyRoomTimeout?: number;
    /**
     * Configures how long (in minutes) a room will remain active if no one joins. Valid values
     * range from 1 to 60 minutes (no fractions).
     */
    unusedRoomTimeout?: number;
    /** When set to true, indicated that this is the large room. */
    largeRoom?: boolean;
  };

  export type FetchRoomRequest = {
    /** The SID of the Room resource to fetch. */
    sid: string;
  };

  export type ListRoomRequest = {
    /** Read only the rooms with this status. Can be: `in-progress` (default) or `completed` */
    status?: RecordingTranscriptionEnumStatus;
    /** Read only rooms with the this `unique_name`. */
    uniqueName?: string;
    /** Read only rooms that started on or after this date, given as `YYYY-MM-DD`. */
    dateCreatedAfter?: Date;
    /** Read only rooms that started before this date, given as `YYYY-MM-DD`. */
    dateCreatedBefore?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateRoomRequest = {
    /** The SID of the Room resource to update. */
    sid: string;
    status: RecordingTranscriptionEnumStatus;
  };
}
