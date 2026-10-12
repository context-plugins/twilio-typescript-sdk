import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  insightsV2AccountReportSchema,
  type InsightsV2AccountReport,
} from "../models/insights-v2-account-report.js";
import type { Servers } from "../servers.js";

export class InsightsV1GetAccountReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch Voice Insights Account Level Report
   *
   * @remarks
   * Get Account Level Report for the given Report Id.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAccountReport(
    request: InsightsV1GetAccountReport.FetchAccountReportRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV2AccountReport, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v2/Voice/Reports/{reportId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV2AccountReportSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1GetAccountReport {
  export type FetchAccountReportRequest = {
    /** A unique request id. */
    reportId: string;
  };
}
