import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * List Outbound Phone Numbers Level Reports
   *
   * @remarks
   * Get Outbound Phone Numbers Level Report for the given Report Id.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOutboundPhoneNumbersReport(
    request: InsightsV1GetOutboundPhoneNumbersReport.ListOutboundPhoneNumbersReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOutboundPhoneNumbersReports, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v2/Voice/Reports/PhoneNumbers/Outbound/{reportId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOutboundPhoneNumbersReportsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1GetOutboundPhoneNumbersReport {
  export type ListOutboundPhoneNumbersReportRequest = {
    /** A unique Report Id. */
    reportId: string;
    /** How many resources to return in each list page. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
