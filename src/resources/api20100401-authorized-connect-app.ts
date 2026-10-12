import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountAuthorizedConnectAppSchema,
  type ApiV2010AccountAuthorizedConnectApp,
} from "../models/api-v2010-account-authorized-connect-app.js";
import {
  listAuthorizedConnectAppResponseSchema,
  type ListAuthorizedConnectAppResponse,
} from "../models/list-authorized-connect-app-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AuthorizedConnectApp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch an instance of an authorized-connect-app
   *
   * @remarks
   * Fetch an instance of an authorized-connect-app
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAuthorizedConnectApp(
    request: Api20100401AuthorizedConnectApp.FetchAuthorizedConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAuthorizedConnectApp, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConnectAppSid", value: request.connectAppSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAuthorizedConnectAppSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of authorized-connect-apps belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of authorized-connect-apps belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAuthorizedConnectApp(
    request: Api20100401AuthorizedConnectApp.ListAuthorizedConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAuthorizedConnectAppResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAuthorizedConnectAppResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthorizedConnectApp {
  export type FetchAuthorizedConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * AuthorizedConnectApp resource to fetch.
     */
    accountSid: string;
    /** The SID of the Connect App to fetch. */
    connectAppSid: string;
  };

  export type ListAuthorizedConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * AuthorizedConnectApp resources to read.
     */
    accountSid: string;
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
