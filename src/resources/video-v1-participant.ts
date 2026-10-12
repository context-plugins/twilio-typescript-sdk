import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Participants in video rooms
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomParticipant(
    request: VideoV1Participant.FetchRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}"),
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
        success: { kind: "json", schema: videoV1RoomRoomParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Participants in video rooms
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoomParticipant(
    request: VideoV1Participant.ListRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoomParticipantResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoomParticipantResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Participants in video rooms
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoomParticipant(
    request: VideoV1Participant.UpdateRoomParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1Participant {
  export type FetchRoomParticipantRequest = {
    /** The SID of the room with the Participant resource to fetch. */
    roomSid: string;
    /** The SID of the RoomParticipant resource to fetch. */
    sid: string;
  };

  export type ListRoomParticipantRequest = {
    /** The SID of the room with the Participant resources to read. */
    roomSid: string;
    /**
     * Read only the participants with this status. Can be: `connected` or `disconnected`. For
     * `in-progress` Rooms the default Status is `connected`, for `completed` Rooms only
     * `disconnected` Participants are returned.
     */
    status?: RoomParticipantEnumStatus;
    /**
     * Read only the Participants with this
     * [User](https://www.twilio.com/docs/chat/rest/user-resource) `identity` value.
     */
    identity?: string;
    /**
     * Read only Participants that started after this date in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only Participants that started before this date in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
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

  export type UpdateRoomParticipantRequest = {
    /** The SID of the room with the participant to update. */
    roomSid: string;
    /** The SID of the RoomParticipant resource to update. */
    sid: string;
    /** The status of the Participant. Can be: `connected` or `disconnected`. */
    status?: RoomParticipantEnumStatus;
  };
}
