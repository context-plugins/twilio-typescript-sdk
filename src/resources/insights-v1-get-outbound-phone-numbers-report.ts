import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listOutboundPhoneNumbersReportsSchema,
  type ListOutboundPhoneNumbersReports,
} from "../models/list-outbound-phone-numbers-reports.js";
import type { Servers } from "../servers.js";

export class InsightsV1GetOutboundPhoneNumbersReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listOutboundPhoneNumbersReport(
    request: InsightsV1GetOutboundPhoneNumbersReport.ListOutboundPhoneNumbersReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOutboundPhoneNumbersReports, ResponseError> {
    return this.#rawClient.execute<ListOutboundPhoneNumbersReports, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v2/Voice/Reports/PhoneNumbers/Outbound/{reportId}"),
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
        success: { kind: "json", schema: listOutboundPhoneNumbersReportsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1GetOutboundPhoneNumbersReport {
  export type ListOutboundPhoneNumbersReportRequest = {
    reportId: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
