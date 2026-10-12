import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Get a specific Call Summary.
   *
   * @remarks
   * Get a specific Call Summary.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSummary(
    request: InsightsV1CallSummaryApi.FetchSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallSummary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/{CallSid}/Summary"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [
          {
            name: "ProcessingState",
            value: request.processingState,
            schema: s.optional(s.lazy(() => summaryEnumProcessingStateSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallSummarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1CallSummaryApi {
  export type FetchSummaryRequest = {
    /** The unique SID identifier of the Call. */
    callSid: string;
    /** The Processing State of this Call Summary. One of `complete`, `partial` or `all`. */
    processingState?: SummaryEnumProcessingState;
  };
}
