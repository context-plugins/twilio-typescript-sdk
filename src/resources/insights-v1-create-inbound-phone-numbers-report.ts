import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  insightsV2CreatePhoneNumbersReportRequestSchema,
  type InsightsV2CreatePhoneNumbersReportRequest,
} from "../models/insights-v2-create-phone-numbers-report-request.js";
import {
  insightsV2CreateReportResponseSchema,
  type InsightsV2CreateReportResponse,
} from "../models/insights-v2-create-report-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1CreateInboundPhoneNumbersReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInboundPhoneNumbersReport(
    request: InsightsV1CreateInboundPhoneNumbersReport.CreateInboundPhoneNumbersReportRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV2CreateReportResponse, ResponseError> {
    return this.#rawClient.execute<InsightsV2CreateReportResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default14("/v2/Voice/Reports/PhoneNumbers/Inbound"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightsV2CreatePhoneNumbersReportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: insightsV2CreateReportResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1CreateInboundPhoneNumbersReport {
  export type CreateInboundPhoneNumbersReportRequest = {
    body?: InsightsV2CreatePhoneNumbersReportRequest;
  };
}
