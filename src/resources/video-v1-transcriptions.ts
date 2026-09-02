import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createRoomTranscriptions(
    request: VideoV1Transcriptions.CreateRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomTranscriptions, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchRoomTranscriptions(
    request: VideoV1Transcriptions.FetchRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomTranscriptions, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions/{Ttid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Ttid", value: request.ttid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomTranscriptionsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoomTranscriptions(
    request: VideoV1Transcriptions.ListRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomTranscriptionsResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomTranscriptionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomTranscriptionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRoomTranscriptions(
    request: VideoV1Transcriptions.UpdateRoomTranscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomTranscriptions, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomTranscriptions, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Transcriptions/{Ttid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Ttid", value: request.ttid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1Transcriptions {
  export type CreateRoomTranscriptionsRequest = {
    roomSid: string;
    configuration?: Record<string, unknown>;
  };

  export type FetchRoomTranscriptionsRequest = {
    roomSid: string;
    ttid: string;
  };

  export type ListRoomTranscriptionsRequest = {
    roomSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateRoomTranscriptionsRequest = {
    roomSid: string;
    ttid: string;
    status?: RoomTranscriptionsEnumStatus;
    configuration?: Record<string, unknown>;
  };
}
