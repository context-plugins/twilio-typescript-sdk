import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Returns a single Track resource represented by TrackName or SID.
   *
   * @remarks
   * Returns a single Track resource represented by TrackName or SID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomParticipantPublishedTrack(
    request: VideoV1PublishedTrack.FetchRoomParticipantPublishedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks
   * are in the list resource.
   *
   * @remarks
   * Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks
   * are in the list resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoomParticipantPublishedTrack(
    request: VideoV1PublishedTrack.ListRoomParticipantPublishedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantPublishedTrackResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomParticipantPublishedTrackResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1PublishedTrack {
  export type FetchRoomParticipantPublishedTrackRequest = {
    /** The SID of the Room resource where the Track resource to fetch is published. */
    roomSid: string;
    /** The SID of the Participant resource with the published track to fetch. */
    participantSid: string;
    /** The SID of the RoomParticipantPublishedTrack resource to fetch. */
    sid: string;
  };

  export type ListRoomParticipantPublishedTrackRequest = {
    /** The SID of the Room resource where the Track resources to read are published. */
    roomSid: string;
    /** The SID of the Participant resource with the published tracks to read. */
    participantSid: string;
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
