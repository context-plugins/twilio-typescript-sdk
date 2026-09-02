import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listUsageRecordMonthlyResponseSchema,
  type ListUsageRecordMonthlyResponse,
} from "../models/list-usage-record-monthly-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Monthly {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listUsageRecordMonthly(
    request: Api20100401Monthly.ListUsageRecordMonthlyRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsageRecordMonthlyResponse, ResponseError> {
    return this.#rawClient.execute<ListUsageRecordMonthlyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "Category", value: request.category, schema: s.optional(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "IncludeSubaccounts", value: request.includeSubaccounts, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsageRecordMonthlyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Monthly {
  export type ListUsageRecordMonthlyRequest = {
    accountSid: string;
    category?: string;
    startDate?: string;
    endDate?: string;
    includeSubaccounts?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
