import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listInsightsSegmentsResponseSchema,
  type ListInsightsSegmentsResponse,
} from "../models/list-insights-segments-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsSegmentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listInsightsSegments(
    request: FlexV1InsightsSegmentsApi.ListInsightsSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsSegmentsResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsSegmentsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/Segments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "ReservationId", value: request.reservationId, schema: s.optional(s.array(s.string())) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsSegmentsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsSegmentsApi {
  export type ListInsightsSegmentsRequest = {
    segmentId?: string;
    reservationId?: string[];
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };
}
