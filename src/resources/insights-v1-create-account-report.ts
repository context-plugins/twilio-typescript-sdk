import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  insightsV2CreateAccountReportRequestSchema,
  type InsightsV2CreateAccountReportRequest,
} from "../models/insights-v2-create-account-report-request.js";
import {
  insightsV2CreateReportResponseSchema,
  type InsightsV2CreateReportResponse,
} from "../models/insights-v2-create-report-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1CreateAccountReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Account Level Report
   *
   * @remarks
   * Create a Report for a specific account with given time range and filters.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAccountReport(
    request: InsightsV1CreateAccountReport.CreateAccountReportRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV2CreateReportResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/v2/Voice/Reports"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightsV2CreateAccountReportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: insightsV2CreateReportResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1CreateAccountReport {
  export type CreateAccountReportRequest = {
    body?: InsightsV2CreateAccountReportRequest;
  };
}
