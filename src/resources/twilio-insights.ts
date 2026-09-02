import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class TwilioInsights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createQueryResults(
    request: TwilioInsights.CreateQueryResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsQueryResponse, TwilioInsights.CreateQueryResultsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/v3/InsightsDomains/Conversations/Query"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) }],
        body: { kind: "json", value: request.body, schema: insightsQueryRequestSchema },
      },
      {
        success: { kind: "json", schema: insightsQueryResponseSchema },
        errorFactory: TwilioInsights.CreateQueryResultsError,
      },
      options,
    );
  }

  fetchMetadata(
    options?: RequestOptions,
  ): ApiPromise<InsightsMetadataResponse, TwilioInsights.FetchMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/v3/InsightsDomains/Conversations/Metadata"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsMetadataResponseSchema },
        errorFactory: TwilioInsights.FetchMetadataError,
      },
      options,
    );
  }

  fetchQueryResults(
    request: TwilioInsights.FetchQueryResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsQueryResponse, TwilioInsights.FetchQueryResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/v3/InsightsDomains/Conversations/Query"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "pageToken", value: request.pageToken, schema: s.string() }],
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
    pageSize?: number;
    body: InsightsQueryRequest;
  };

  export class CreateQueryResultsError extends ResponseError<
    | Declared<"v3InsightsDomainsConversationsQuery400Error1", V3InsightsDomainsConversationsQuery400Error1>
    | Declared<"v3InsightsDomainsConversationsQuery429Error1", V3InsightsDomainsConversationsQuery429Error1>
    | Declared<"v3InsightsDomainsConversationsQuery500Error1", V3InsightsDomainsConversationsQuery500Error1>
  > {
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

  export class FetchMetadataError extends ResponseError<
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
  > {
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
    pageToken: string;
  };

  export class FetchQueryResultsError extends ResponseError<
    | Declared<"v3InsightsDomainsConversationsQuery400Error1", V3InsightsDomainsConversationsQuery400Error1>
    | Declared<"v3InsightsDomainsConversationsQuery429Error1", V3InsightsDomainsConversationsQuery429Error1>
    | Declared<"v3InsightsDomainsConversationsQuery500Error1", V3InsightsDomainsConversationsQuery500Error1>
  > {
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
