import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  insightsMetadataResponseSchema,
  type InsightsMetadataResponse,
} from "../models/insights-metadata-response.js";
import { insightsQueryRequestSchema, type InsightsQueryRequest } from "../models/insights-query-request.js";
import {
  insightsQueryResponseSchema,
  type InsightsQueryResponse,
} from "../models/insights-query-response.js";
import {
  v3InsightsDomainsConversationsMetadata400Error1Schema,
  type V3InsightsDomainsConversationsMetadata400Error1,
} from "../models/v3-insights-domains-conversations-metadata400-error1.js";
import {
  v3InsightsDomainsConversationsMetadata429Error1Schema,
  type V3InsightsDomainsConversationsMetadata429Error1,
} from "../models/v3-insights-domains-conversations-metadata429-error1.js";
import {
  v3InsightsDomainsConversationsMetadata500Error1Schema,
  type V3InsightsDomainsConversationsMetadata500Error1,
} from "../models/v3-insights-domains-conversations-metadata500-error1.js";
import {
  v3InsightsDomainsConversationsQuery400Error1Schema,
  type V3InsightsDomainsConversationsQuery400Error1,
} from "../models/v3-insights-domains-conversations-query400-error1.js";
import {
  v3InsightsDomainsConversationsQuery429Error1Schema,
  type V3InsightsDomainsConversationsQuery429Error1,
} from "../models/v3-insights-domains-conversations-query429-error1.js";
import {
  v3InsightsDomainsConversationsQuery500Error1Schema,
  type V3InsightsDomainsConversationsQuery500Error1,
} from "../models/v3-insights-domains-conversations-query500-error1.js";
import type { Servers } from "../servers.js";

/**
 * Twilio Insights API.
 */
export class TwilioInsights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Execute a semantic query
   *
   * @remarks
   * Execute a semantic query against the Conversations domain.
   *
   * @returns Successful query response
   *
   * @throws {@link TwilioInsights.CreateQueryResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQueryResults(
    request: TwilioInsights.CreateQueryResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsQueryResponse, TwilioInsights.CreateQueryResultsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/v3/InsightsDomains/Conversations/Query"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [{ name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsQueryRequestSchema },
      },
      {
        success: { kind: "json", schema: insightsQueryResponseSchema },
        errorFactory: TwilioInsights.CreateQueryResultsError,
      },
      options,
    );
  }

  /**
   * Fetch Metadata for the Conversations domain
   *
   * @remarks
   * Fetch Metadata for the Conversations domain.
   *
   * @returns successful operation
   *
   * @throws {@link TwilioInsights.FetchMetadataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchMetadata(
    options?: RequestOptions,
  ): ApiPromise<InsightsMetadataResponse, TwilioInsights.FetchMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v3/InsightsDomains/Conversations/Metadata"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsMetadataResponseSchema },
        errorFactory: TwilioInsights.FetchMetadataError,
      },
      options,
    );
  }

  /**
   * Fetch semantic query results
   *
   * @returns Successful query response
   *
   * @throws {@link TwilioInsights.FetchQueryResultsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchQueryResults(
    request: TwilioInsights.FetchQueryResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsQueryResponse, TwilioInsights.FetchQueryResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v3/InsightsDomains/Conversations/Query"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [{ name: "pageToken", value: request.pageToken, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsQueryResponseSchema },
        errorFactory: TwilioInsights.FetchQueryResultsError,
      },
      options,
    );
  }
}

export namespace TwilioInsights {
  export type CreateQueryResultsRequest = {
    /** Number of items per page */
    pageSize?: number;
    body: InsightsQueryRequest;
  };

  export class CreateQueryResultsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"v3InsightsDomainsConversationsQuery400Error1", V3InsightsDomainsConversationsQuery400Error1>
      | Declared<"v3InsightsDomainsConversationsQuery429Error1", V3InsightsDomainsConversationsQuery429Error1>
      | Declared<"v3InsightsDomainsConversationsQuery500Error1", V3InsightsDomainsConversationsQuery500Error1>
    >;

    static readonly errors: ErrorDecoders<CreateQueryResultsError> = [
      {
        on: 400,
        kind: "v3InsightsDomainsConversationsQuery400Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery400Error1Schema },
      },
      {
        on: 429,
        kind: "v3InsightsDomainsConversationsQuery429Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery429Error1Schema },
      },
      {
        on: 500,
        kind: "v3InsightsDomainsConversationsQuery500Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery500Error1Schema },
      },
    ];
  }

  export class FetchMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "v3InsightsDomainsConversationsMetadata400Error1",
          V3InsightsDomainsConversationsMetadata400Error1
        >
      | Declared<
          "v3InsightsDomainsConversationsMetadata429Error1",
          V3InsightsDomainsConversationsMetadata429Error1
        >
      | Declared<
          "v3InsightsDomainsConversationsMetadata500Error1",
          V3InsightsDomainsConversationsMetadata500Error1
        >
    >;

    static readonly errors: ErrorDecoders<FetchMetadataError> = [
      {
        on: 400,
        kind: "v3InsightsDomainsConversationsMetadata400Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsMetadata400Error1Schema },
      },
      {
        on: 429,
        kind: "v3InsightsDomainsConversationsMetadata429Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsMetadata429Error1Schema },
      },
      {
        on: 500,
        kind: "v3InsightsDomainsConversationsMetadata500Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsMetadata500Error1Schema },
      },
    ];
  }

  export type FetchQueryResultsRequest = {
    /** Pagination token */
    pageToken: string;
  };

  export class FetchQueryResultsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"v3InsightsDomainsConversationsQuery400Error1", V3InsightsDomainsConversationsQuery400Error1>
      | Declared<"v3InsightsDomainsConversationsQuery429Error1", V3InsightsDomainsConversationsQuery429Error1>
      | Declared<"v3InsightsDomainsConversationsQuery500Error1", V3InsightsDomainsConversationsQuery500Error1>
    >;

    static readonly errors: ErrorDecoders<FetchQueryResultsError> = [
      {
        on: 400,
        kind: "v3InsightsDomainsConversationsQuery400Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery400Error1Schema },
      },
      {
        on: 429,
        kind: "v3InsightsDomainsConversationsQuery429Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery429Error1Schema },
      },
      {
        on: 500,
        kind: "v3InsightsDomainsConversationsQuery500Error1",
        decode: { kind: "json", schema: v3InsightsDomainsConversationsQuery500Error1Schema },
      },
    ];
  }
}
