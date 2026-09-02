import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listMetricResponseSchema, type ListMetricResponse } from "../models/list-metric-response.js";
import {
  metricEnumStreamDirectionSchema,
  type MetricEnumStreamDirection,
} from "../models/metric-enum-stream-direction.js";
import { metricEnumTwilioEdgeSchema, type MetricEnumTwilioEdge } from "../models/metric-enum-twilio-edge.js";
import type { Servers } from "../servers.js";

export class InsightsV1Metric {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listMetric(
    request: InsightsV1Metric.ListMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMetricResponse, ResponseError> {
    return this.#rawClient.execute<ListMetricResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/{CallSid}/Metrics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [
          { name: "Edge", value: request.edge, schema: s.optional(s.lazy(() => metricEnumTwilioEdgeSchema)) },
          {
            name: "Direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => metricEnumStreamDirectionSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMetricResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Metric {
  export type ListMetricRequest = {
    callSid: string;
    edge?: MetricEnumTwilioEdge;
    direction?: MetricEnumStreamDirection;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
