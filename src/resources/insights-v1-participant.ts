import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchVideoParticipantSummary(
    request: InsightsV1Participant.FetchVideoParticipantSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1VideoRoomSummaryVideoParticipantSummary, ResponseError> {
    return this.#rawClient.execute<InsightsV1VideoRoomSummaryVideoParticipantSummary, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1VideoRoomSummaryVideoParticipantSummarySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listVideoParticipantSummary(
    request: InsightsV1Participant.ListVideoParticipantSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVideoParticipantSummaryResponse, ResponseError> {
    return this.#rawClient.execute<ListVideoParticipantSummaryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Video/Rooms/{RoomSid}/Participants"),
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
        success: { kind: "json", schema: listVideoParticipantSummaryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Participant {
  export type FetchVideoParticipantSummaryRequest = {
    roomSid: string;
    participantSid: string;
  };

  export type ListVideoParticipantSummaryRequest = {
    roomSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
