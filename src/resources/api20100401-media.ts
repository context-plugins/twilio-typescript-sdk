import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { listMediaResponseSchema, type ListMediaResponse } from "../models/list-media-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Media {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read a list of Media resources associated with a specific Message resource
   *
   * @remarks
   * Read a list of Media resources associated with a specific Message resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMedia(
    request: Api20100401Media.ListMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMediaResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateTime()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMediaResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Media {
  export type ListMediaRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is associated with
     * the Media resources.
     */
    accountSid: string;
    /** The SID of the Message resource that is associated with the Media resources. */
    messageSid: string;
    /**
     * Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD`
     * in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also
     * specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or
     * before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on
     * or after midnight of this date.
     */
    dateCreated?: Date;
    /**
     * Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD`
     * in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also
     * specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or
     * before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on
     * or after midnight of this date.
     */
    dateCreatedQuery?: Date;
    /**
     * Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD`
     * in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also
     * specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or
     * before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on
     * or after midnight of this date.
     */
    dateCreatedQueryQuery?: Date;
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
