import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createRoom(
    request: VideoV1RoomApi.CreateRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ResponseError> {
    return this.#rawClient.execute<VideoV1Room, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms"),
        auth: this.#auth.accountSidAuthToken,
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
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.number()) },
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
              schema: s.optional(s.number()),
            },
            { name: "EmptyRoomTimeout", value: request.emptyRoomTimeout, schema: s.optional(s.number()) },
            { name: "UnusedRoomTimeout", value: request.unusedRoomTimeout, schema: s.optional(s.number()) },
            { name: "LargeRoom", value: request.largeRoom, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchRoom(
    request: VideoV1RoomApi.FetchRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ResponseError> {
    return this.#rawClient.execute<VideoV1Room, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoom(
    request: VideoV1RoomApi.ListRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => recordingTranscriptionEnumStatusSchema)),
          },
          { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRoom(
    request: VideoV1RoomApi.UpdateRoomRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Room, ResponseError> {
    return this.#rawClient.execute<VideoV1Room, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: recordingTranscriptionEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1RoomApi {
  export type CreateRoomRequest = {
    enableTurn?: boolean;
    type?: RoomEnumRoomType;
    uniqueName?: string;
    statusCallback?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    maxParticipants?: number;
    recordParticipantsOnConnect?: boolean;
    transcribeParticipantsOnConnect?: boolean;
    videoCodecs?: RoomEnumVideoCodec[];
    mediaRegion?: string;
    recordingRules?: Record<string, unknown>;
    transcriptionsConfiguration?: Record<string, unknown>;
    audioOnly?: boolean;
    maxParticipantDuration?: number;
    emptyRoomTimeout?: number;
    unusedRoomTimeout?: number;
    largeRoom?: boolean;
  };

  export type FetchRoomRequest = {
    sid: string;
  };

  export type ListRoomRequest = {
    status?: RecordingTranscriptionEnumStatus;
    uniqueName?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateRoomRequest = {
    sid: string;
    status: RecordingTranscriptionEnumStatus;
  };
}
