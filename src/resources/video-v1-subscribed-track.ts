import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Returns a single Track resource represented by `track_sid`. Note: This is one resource with the
   * Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be
   * unique.
   *
   * @remarks
   * Returns a single Track resource represented by `track_sid`. Note: This is one resource with the
   * Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be
   * unique.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomParticipantSubscribedTrack(
    request: VideoV1SubscribedTrack.FetchRoomParticipantSubscribedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}",
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
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Returns a list of tracks that are subscribed for the participant.
   *
   * @remarks
   * Returns a list of tracks that are subscribed for the participant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoomParticipantSubscribedTrack(
    request: VideoV1SubscribedTrack.ListRoomParticipantSubscribedTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantSubscribedTrackResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks",
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
        success: { kind: "json", schema: listRoomParticipantSubscribedTrackResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1SubscribedTrack {
  export type FetchRoomParticipantSubscribedTrackRequest = {
    /** The SID of the Room where the Track resource to fetch is subscribed. */
    roomSid: string;
    /** The SID of the participant that subscribes to the Track resource to fetch. */
    participantSid: string;
    /** The SID of the RoomParticipantSubscribedTrack resource to fetch. */
    sid: string;
  };

  export type ListRoomParticipantSubscribedTrackRequest = {
    /** The SID of the Room resource with the Track resources to read. */
    roomSid: string;
    /** The SID of the participant that subscribes to the Track resources to read. */
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
