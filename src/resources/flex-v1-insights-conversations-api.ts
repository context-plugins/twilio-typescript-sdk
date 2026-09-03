import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listInsightsConversationsResponseSchema,
  type ListInsightsConversationsResponse,
} from "../models/list-insights-conversations-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsConversationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listInsightsConversations(
    request: FlexV1InsightsConversationsApi.ListInsightsConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsConversationsResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsConversationsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsConversationsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsConversationsApi {
  export type ListInsightsConversationsRequest = {
    segmentId?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };
}
