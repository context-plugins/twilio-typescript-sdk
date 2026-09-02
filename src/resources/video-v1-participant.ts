import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listRoomParticipantResponseSchema,
  type ListRoomParticipantResponse,
} from "../models/list-room-participant-response.js";
import {
  roomParticipantEnumStatusSchema,
  type RoomParticipantEnumStatus,
} from "../models/room-participant-enum-status.js";
import {
  videoV1RoomRoomParticipantSchema,
  type VideoV1RoomRoomParticipant,
} from "../models/video-v1-room-room-participant.js";
import type { Servers } from "../servers.js";

export class VideoV1Participant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchRoomParticipant(
    request: VideoV1Participant.FetchRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipant, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoomParticipant(
    request: VideoV1Participant.ListRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => roomParticipantEnumStatusSchema)),
          },
          { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRoomParticipant(
    request: VideoV1Participant.UpdateRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipant, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => roomParticipantEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1Participant {
  export type FetchRoomParticipantRequest = {
    roomSid: string;
    sid: string;
  };

  export type ListRoomParticipantRequest = {
    roomSid: string;
    status?: RoomParticipantEnumStatus;
    identity?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateRoomParticipantRequest = {
    roomSid: string;
    sid: string;
    status?: RoomParticipantEnumStatus;
  };
}
