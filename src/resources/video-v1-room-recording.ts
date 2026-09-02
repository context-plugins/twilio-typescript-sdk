import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  deleteRoomRecording(
    request: VideoV1RoomRecording.DeleteRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchRoomRecording(
    request: VideoV1RoomRecording.FetchRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecording, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomRecording, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomRecordingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoomRecording(
    request: VideoV1RoomRecording.ListRoomRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomRecordingResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomRecordingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Recordings"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomRecordingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1RoomRecording {
  export type DeleteRoomRecordingRequest = {
    roomSid: string;
    sid: string;
  };

  export type FetchRoomRecordingRequest = {
    roomSid: string;
    sid: string;
  };

  export type ListRoomRecordingRequest = {
    roomSid: string;
    status?: RoomRecordingEnumStatus;
    sourceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
