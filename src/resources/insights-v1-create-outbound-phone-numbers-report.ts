import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  insightsV2CreatePhoneNumbersReportRequestSchema,
  type InsightsV2CreatePhoneNumbersReportRequest,
} from "../models/insights-v2-create-phone-numbers-report-request.js";
import {
  insightsV2CreateReportResponseSchema,
  type InsightsV2CreateReportResponse,
} from "../models/insights-v2-create-report-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1CreateOutboundPhoneNumbersReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Outbound Phone Numbers Level Report
   *
   * @remarks
   * Create Outbound specific Phone Numbers Report for a specific account with given time range.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOutboundPhoneNumbersReport(
    request: InsightsV1CreateOutboundPhoneNumbersReport.CreateOutboundPhoneNumbersReportRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV2CreateReportResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/v2/Voice/Reports/PhoneNumbers/Outbound"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightsV2CreatePhoneNumbersReportRequestSchema)),
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

export namespace InsightsV1CreateOutboundPhoneNumbersReport {
  export type CreateOutboundPhoneNumbersReportRequest = {
    body?: InsightsV2CreatePhoneNumbersReportRequest;
  };
}
