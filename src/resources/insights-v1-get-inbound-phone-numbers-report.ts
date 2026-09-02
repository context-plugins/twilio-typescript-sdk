import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
