import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { insightsV1ConferenceSchema, type InsightsV1Conference } from "../models/insights-v1-conference.js";
import {
  listConferenceResponse1Schema,
  type ListConferenceResponse1,
} from "../models/list-conference-response1.js";
import type { Servers } from "../servers.js";

export class InsightsV1ConferenceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchConference2(
    request: InsightsV1ConferenceApi.FetchConference2Request,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1Conference, ResponseError> {
    return this.#rawClient.execute<InsightsV1Conference, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Conferences/{ConferenceSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConferenceSid", value: request.conferenceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1ConferenceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConference2(
    request: InsightsV1ConferenceApi.ListConference2Request,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceResponse1, ResponseError> {
    return this.#rawClient.execute<ListConferenceResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Conferences"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Status", value: request.status, schema: s.optional(s.string()) },
          { name: "CreatedAfter", value: request.createdAfter, schema: s.optional(s.string()) },
          { name: "CreatedBefore", value: request.createdBefore, schema: s.optional(s.string()) },
          { name: "MixerRegion", value: request.mixerRegion, schema: s.optional(s.string()) },
          { name: "Tags", value: request.tags, schema: s.optional(s.string()) },
          { name: "Subaccount", value: request.subaccount, schema: s.optional(s.string()) },
          { name: "DetectedIssues", value: request.detectedIssues, schema: s.optional(s.string()) },
          { name: "EndReason", value: request.endReason, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1ConferenceApi {
  export type FetchConference2Request = {
    conferenceSid: string;
  };

  export type ListConference2Request = {
    conferenceSid?: string;
    friendlyName?: string;
    status?: string;
    createdAfter?: string;
    createdBefore?: string;
    mixerRegion?: string;
    tags?: string;
    subaccount?: string;
    detectedIssues?: string;
    endReason?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
