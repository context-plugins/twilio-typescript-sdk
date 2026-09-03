import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  insightsV1ConferenceConferenceParticipantSchema,
  type InsightsV1ConferenceConferenceParticipant,
} from "../models/insights-v1-conference-conference-participant.js";
import {
  listConferenceParticipantResponseSchema,
  type ListConferenceParticipantResponse,
} from "../models/list-conference-participant-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1ConferenceParticipant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchConferenceParticipant(
    request: InsightsV1ConferenceParticipant.FetchConferenceParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1ConferenceConferenceParticipant, ResponseError> {
    return this.#rawClient.execute<InsightsV1ConferenceConferenceParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [
          { name: "Events", value: request.events, schema: s.optional(s.string()) },
          { name: "Metrics", value: request.metrics, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1ConferenceConferenceParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConferenceParticipant(
    request: InsightsV1ConferenceParticipant.ListConferenceParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListConferenceParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Conferences/{ConferenceSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConferenceSid", value: request.conferenceSid, schema: s.string() }],
        query: [
          { name: "ParticipantSid", value: request.participantSid, schema: s.optional(s.string()) },
          { name: "Label", value: request.label, schema: s.optional(s.string()) },
          { name: "Events", value: request.events, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1ConferenceParticipant {
  export type FetchConferenceParticipantRequest = {
    conferenceSid: string;
    participantSid: string;
    events?: string;
    metrics?: string;
  };

  export type ListConferenceParticipantRequest = {
    conferenceSid: string;
    participantSid?: string;
    label?: string;
    events?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
