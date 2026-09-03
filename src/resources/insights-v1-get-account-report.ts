import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchAccountReport(
    request: InsightsV1GetAccountReport.FetchAccountReportRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV2AccountReport, ResponseError> {
    return this.#rawClient.execute<InsightsV2AccountReport, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v2/Voice/Reports/{reportId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV2AccountReportSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1GetAccountReport {
  export type FetchAccountReportRequest = {
    reportId: string;
  };
}
