import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listRoomTranscriptionsResponseSchema,
  type ListRoomTranscriptionsResponse,
} from "../models/list-room-transcriptions-response.js";
import {
  roomTranscriptionsEnumStatusSchema,
  type RoomTranscriptionsEnumStatus,
} from "../models/room-transcriptions-enum-status.js";
import {
  videoV1RoomRoomTranscriptionsSchema,
  type VideoV1RoomRoomTranscriptions,
} from "../models/video-v1-room-room-transcriptions.js";
import type { Servers } from "../servers.js";

export class VideoV1Transcriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * transcriptions in video rooms
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRoomTranscriptions(
    request: VideoV1Transcriptions.CreateRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Configuration",
              value: request.configuration,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomTranscriptionsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * transcriptions in video rooms
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomTranscriptions(
    request: VideoV1Transcriptions.FetchRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions/{Ttid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Ttid", value: request.ttid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomTranscriptionsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * transcriptions in video rooms
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoomTranscriptions(
    request: VideoV1Transcriptions.ListRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomTranscriptionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomTranscriptionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * transcriptions in video rooms
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoomTranscriptions(
    request: VideoV1Transcriptions.UpdateRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions/{Ttid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Ttid", value: request.ttid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => roomTranscriptionsEnumStatusSchema)),
            },
            {
              name: "Configuration",
              value: request.configuration,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomTranscriptionsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1Transcriptions {
  export type CreateRoomTranscriptionsRequest = {
    /** The SID of the room new transcriptions resource to be created. */
    roomSid: string;
    /** A collection of properties that describe transcription behaviour. */
    configuration?: Record<string, unknown>;
  };

  export type FetchRoomTranscriptionsRequest = {
    /** The SID of the room with the transcriptions resource to fetch. */
    roomSid: string;
    /** The Twilio type id of the transcriptions resource to fetch. */
    ttid: string;
  };

  export type ListRoomTranscriptionsRequest = {
    /** The SID of the room with the transcriptions resources to read. */
    roomSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateRoomTranscriptionsRequest = {
    /** The SID of the room with the transcriptions resource to update. */
    roomSid: string;
    /** The Twilio type id of the transcriptions resource to update. */
    ttid: string;
    /** The status of the transcriptions resource. */
    status?: RoomTranscriptionsEnumStatus;
    /** A collection of properties that describe transcription behaviour. */
    configuration?: Record<string, unknown>;
  };
}
