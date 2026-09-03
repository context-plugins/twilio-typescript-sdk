import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listInboundPhoneNumbersReportsSchema,
  type ListInboundPhoneNumbersReports,
} from "../models/list-inbound-phone-numbers-reports.js";
import type { Servers } from "../servers.js";

export class InsightsV1GetInboundPhoneNumbersReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listInboundPhoneNumbersReport(
    request: InsightsV1GetInboundPhoneNumbersReport.ListInboundPhoneNumbersReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPhoneNumbersReports, ResponseError> {
    return this.#rawClient.execute<ListInboundPhoneNumbersReports, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v2/Voice/Reports/PhoneNumbers/Inbound/{reportId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPhoneNumbersReportsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1GetInboundPhoneNumbersReport {
  export type ListInboundPhoneNumbersReportRequest = {
    reportId: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
