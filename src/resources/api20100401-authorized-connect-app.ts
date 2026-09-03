import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchAuthorizedConnectApp(
    request: Api20100401AuthorizedConnectApp.FetchAuthorizedConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAuthorizedConnectApp, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountAuthorizedConnectApp, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConnectAppSid", value: request.connectAppSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAuthorizedConnectAppSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAuthorizedConnectApp(
    request: Api20100401AuthorizedConnectApp.ListAuthorizedConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAuthorizedConnectAppResponse, ResponseError> {
    return this.#rawClient.execute<ListAuthorizedConnectAppResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAuthorizedConnectAppResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthorizedConnectApp {
  export type FetchAuthorizedConnectAppRequest = {
    accountSid: string;
    connectAppSid: string;
  };

  export type ListAuthorizedConnectAppRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
