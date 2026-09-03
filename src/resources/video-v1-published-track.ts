import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listRoomParticipantPublishedTrackResponseSchema,
  type ListRoomParticipantPublishedTrackResponse,
} from "../models/list-room-participant-published-track-response.js";
import {
  videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema,
  type VideoV1RoomRoomParticipantRoomParticipantPublishedTrack,
} from "../models/video-v1-room-room-participant-room-participant-published-track.js";
import type { Servers } from "../servers.js";

export class VideoV1PublishedTrack {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchRoomParticipantPublishedTrack(
    request: VideoV1PublishedTrack.FetchRoomParticipantPublishedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoomParticipantPublishedTrack(
    request: VideoV1PublishedTrack.ListRoomParticipantPublishedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantPublishedTrackResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomParticipantPublishedTrackResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomParticipantPublishedTrackResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1PublishedTrack {
  export type FetchRoomParticipantPublishedTrackRequest = {
    roomSid: string;
    participantSid: string;
    sid: string;
  };

  export type ListRoomParticipantPublishedTrackRequest = {
    roomSid: string;
    participantSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
