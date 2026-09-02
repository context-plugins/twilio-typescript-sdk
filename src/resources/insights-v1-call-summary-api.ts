import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  insightsV1CallSummarySchema,
  type InsightsV1CallSummary,
} from "../models/insights-v1-call-summary.js";
import {
  summaryEnumProcessingStateSchema,
  type SummaryEnumProcessingState,
} from "../models/summary-enum-processing-state.js";
import type { Servers } from "../servers.js";

export class InsightsV1CallSummaryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchSummary(
    request: InsightsV1CallSummaryApi.FetchSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallSummary, ResponseError> {
    return this.#rawClient.execute<InsightsV1CallSummary, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/{CallSid}/Summary"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [
          {
            name: "ProcessingState",
            value: request.processingState,
            schema: s.optional(s.lazy(() => summaryEnumProcessingStateSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallSummarySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1CallSummaryApi {
  export type FetchSummaryRequest = {
    callSid: string;
    processingState?: SummaryEnumProcessingState;
  };
}
