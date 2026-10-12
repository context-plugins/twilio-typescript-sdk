import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  insightsV1VideoRoomSummaryVideoParticipantSummarySchema,
  type InsightsV1VideoRoomSummaryVideoParticipantSummary,
} from "../models/insights-v1-video-room-summary-video-participant-summary.js";
import {
  listVideoParticipantSummaryResponseSchema,
  type ListVideoParticipantSummaryResponse,
} from "../models/list-video-participant-summary-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1Participant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Video Log Analyzer data for a Room Participant.
   *
   * @remarks
   * Get Video Log Analyzer data for a Room Participant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVideoParticipantSummary(
    request: InsightsV1Participant.FetchVideoParticipantSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1VideoRoomSummaryVideoParticipantSummary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1VideoRoomSummaryVideoParticipantSummarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of room participants.
   *
   * @remarks
   * Get a list of room participants.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVideoParticipantSummary(
    request: InsightsV1Participant.ListVideoParticipantSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVideoParticipantSummaryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Video/Rooms/{RoomSid}/Participants"),
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
        success: { kind: "json", schema: listVideoParticipantSummaryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1Participant {
  export type FetchVideoParticipantSummaryRequest = {
    /** The SID of the Room resource. */
    roomSid: string;
    /** The SID of the Participant resource. */
    participantSid: string;
  };

  export type ListVideoParticipantSummaryRequest = {
    /** The SID of the Room resource. */
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
}
