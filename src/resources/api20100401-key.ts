import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { apiV2010AccountKeySchema, type ApiV2010AccountKey } from "../models/api-v2010-account-key.js";
import { listKeyResponseSchema, type ListKeyResponse } from "../models/list-key-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Key {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteKey(
    request: Api20100401Key.DeleteKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchKey(
    request: Api20100401Key.FetchKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountKey, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountKey, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountKeySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listKey(
    request: Api20100401Key.ListKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ListKeyResponse, ResponseError> {
    return this.#rawClient.execute<ListKeyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Keys.json"),
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
        success: { kind: "json", schema: listKeyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateKey(
    request: Api20100401Key.UpdateKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountKey, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountKey, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountKeySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Key {
  export type DeleteKeyRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchKeyRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListKeyRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateKeyRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
  };
}
