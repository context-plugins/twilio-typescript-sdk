import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listUsageRecordTodayResponseSchema,
  type ListUsageRecordTodayResponse,
} from "../models/list-usage-record-today-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Today {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Usage records for today
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsageRecordToday(
    request: Api20100401Today.ListUsageRecordTodayRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsageRecordTodayResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "Category", value: request.category, schema: s.optional(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateOnly()) },
          { name: "IncludeSubaccounts", value: request.includeSubaccounts, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsageRecordTodayResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Today {
  export type ListUsageRecordTodayRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * UsageRecord resources to read.
     */
    accountSid: string;
    /**
     * The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of
     * the UsageRecord resources to read. Only UsageRecord resources in the specified category are
     * retrieved.
     */
    category?: string;
    /**
     * Only include usage that has occurred on or after this date. Specify the date in GMT and
     * format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as:
     * `-30days`, which will set the start date to be 30 days before the current date.
     */
    startDate?: string;
    /**
     * Only include usage that occurred on or before this date. Specify the date in GMT and format
     * as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `+30days`,
     * which will set the end date to 30 days from the current date.
     */
    endDate?: string;
    /**
     * Whether to include usage from the master account and all its subaccounts. Can be: `true` (the
     * default) to include usage from the master account and all subaccounts or `false` to retrieve
     * usage from only the specified account.
     */
    includeSubaccounts?: boolean;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
