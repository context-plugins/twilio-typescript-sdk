import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listUsageRecordResponseSchema,
  type ListUsageRecordResponse,
} from "../models/list-usage-record-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Record {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listUsageRecord(
    request: Api20100401Record.ListUsageRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsageRecordResponse, ResponseError> {
    return this.#rawClient.execute<ListUsageRecordResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Records.json"),
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
        success: { kind: "json", schema: listUsageRecordResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Record {
  export type ListUsageRecordRequest = {
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
