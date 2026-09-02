import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { accountEnumStatusSchema, type AccountEnumStatus } from "../models/account-enum-status.js";
import { apiV2010AccountSchema, type ApiV2010Account } from "../models/api-v2010-account.js";
import { listAccountResponseSchema, type ListAccountResponse } from "../models/list-account-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAccount(
    request: Api20100401Account.CreateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ResponseError> {
    return this.#rawClient.execute<ApiV2010Account, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts.json"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchAccount(
    request: Api20100401Account.FetchAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ResponseError> {
    return this.#rawClient.execute<ApiV2010Account, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAccount(
    request: Api20100401Account.ListAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAccountResponse, ResponseError> {
    return this.#rawClient.execute<ListAccountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts.json"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => accountEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateAccount(
    request: Api20100401Account.UpdateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ResponseError> {
    return this.#rawClient.execute<ApiV2010Account, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => accountEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Account {
  export type CreateAccountRequest = {
    friendlyName?: string;
  };

  export type FetchAccountRequest = {
    sid: string;
  };

  export type ListAccountRequest = {
    friendlyName?: string;
    status?: AccountEnumStatus;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateAccountRequest = {
    sid: string;
    friendlyName?: string;
    status?: AccountEnumStatus;
  };
}
