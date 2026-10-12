import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listRoomRecordingResponseSchema,
  type ListRoomRecordingResponse,
} from "../models/list-room-recording-response.js";
import {
  roomRecordingEnumStatusSchema,
  type RoomRecordingEnumStatus,
} from "../models/room-recording-enum-status.js";
import {
  videoV1RoomRoomRecordingSchema,
  type VideoV1RoomRoomRecording,
} from "../models/video-v1-room-room-recording.js";
import type { Servers } from "../servers.js";

export class VideoV1RoomRecording {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Single-track, single-media room recordings
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRoomRecording(
    request: VideoV1RoomRecording.DeleteRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
   * Single-track, single-media room recordings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomRecording(
    request: VideoV1RoomRecording.FetchRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomRecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Single-track, single-media room recordings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoomRecording(
    request: VideoV1RoomRecording.ListRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomRecordingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => roomRecordingEnumStatusSchema)),
          },
          { name: "SourceSid", value: request.sourceSid, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: listRoomRecordingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1RoomRecording {
  export type DeleteRoomRecordingRequest = {
    /** The SID of the room with the RoomRecording resource to delete. */
    roomSid: string;
    /** The SID of the RoomRecording resource to delete. */
    sid: string;
  };

  export type FetchRoomRecordingRequest = {
    /** The SID of the Room resource with the recording to fetch. */
    roomSid: string;
    /** The SID of the RoomRecording resource to fetch. */
    sid: string;
  };

  export type ListRoomRecordingRequest = {
    /** The SID of the room with the RoomRecording resources to read. */
    roomSid: string;
    /**
     * Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
     */
    status?: RoomRecordingEnumStatus;
    /** Read only the recordings that have this `source_sid`. */
    sourceSid?: string;
    /**
     * Read only recordings that started on or after this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only Recordings that started before this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
     */
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
}
