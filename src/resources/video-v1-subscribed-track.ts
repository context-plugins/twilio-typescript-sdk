import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listRoomParticipantSubscribedTrackResponseSchema,
  type ListRoomParticipantSubscribedTrackResponse,
} from "../models/list-room-participant-subscribed-track-response.js";
import {
  videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema,
  type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack,
} from "../models/video-v1-room-room-participant-room-participant-subscribed-track.js";
import type { Servers } from "../servers.js";

export class VideoV1SubscribedTrack {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchRoomParticipantSubscribedTrack(
    request: VideoV1SubscribedTrack.FetchRoomParticipantSubscribedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}",
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
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRoomParticipantSubscribedTrack(
    request: VideoV1SubscribedTrack.ListRoomParticipantSubscribedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantSubscribedTrackResponse, ResponseError> {
    return this.#rawClient.execute<ListRoomParticipantSubscribedTrackResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks"),
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
        success: { kind: "json", schema: listRoomParticipantSubscribedTrackResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1SubscribedTrack {
  export type FetchRoomParticipantSubscribedTrackRequest = {
    roomSid: string;
    participantSid: string;
    sid: string;
  };

  export type ListRoomParticipantSubscribedTrackRequest = {
    roomSid: string;
    participantSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
