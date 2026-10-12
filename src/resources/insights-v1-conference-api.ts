import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a specific Conference Summary.
   *
   * @remarks
   * Get a specific Conference Summary.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConference2(
    request: InsightsV1ConferenceApi.FetchConference2Request,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1Conference, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Conferences/{ConferenceSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConferenceSid", value: request.conferenceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1ConferenceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of Conference Summaries.
   *
   * @remarks
   * Get a list of Conference Summaries.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConference2(
    request: InsightsV1ConferenceApi.ListConference2Request,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Conferences"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1ConferenceApi {
  export type FetchConference2Request = {
    /** The unique SID identifier of the Conference. */
    conferenceSid: string;
  };

  export type ListConference2Request = {
    /** The SID of the conference. */
    conferenceSid?: string;
    /** Custom label for the conference resource, up to 64 characters. */
    friendlyName?: string;
    /** Conference status. */
    status?: string;
    /** Conferences created after the provided timestamp specified in ISO 8601 format */
    createdAfter?: string;
    /** Conferences created before the provided timestamp specified in ISO 8601 format. */
    createdBefore?: string;
    /** Twilio region where the conference media was mixed. */
    mixerRegion?: string;
    /**
     * Tags applied by Twilio for common potential configuration, quality, or performance issues.
     */
    tags?: string;
    /** Account SID for the subaccount whose resources you wish to retrieve. */
    subaccount?: string;
    /** Potential configuration, behavior, or performance issues detected during the conference. */
    detectedIssues?: string;
    /** Conference end reason; e.g. last participant left, modified by API, etc. */
    endReason?: string;
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
