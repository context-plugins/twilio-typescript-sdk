import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSigningKeySchema,
  type ApiV2010AccountSigningKey,
} from "../models/api-v2010-account-signing-key.js";
import {
  listSigningKeyResponseSchema,
  type ListSigningKeyResponse,
} from "../models/list-signing-key-response.js";
import type { Servers } from "../servers.js";

export class Api20100401SigningKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteSigningKey(
    request: Api20100401SigningKey.DeleteSigningKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json"),
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

  fetchSigningKey(
    request: Api20100401SigningKey.FetchSigningKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSigningKey, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSigningKey, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSigningKeySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSigningKey(
    request: Api20100401SigningKey.ListSigningKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSigningKeyResponse, ResponseError> {
    return this.#rawClient.execute<ListSigningKeyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SigningKeys.json"),
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
        success: { kind: "json", schema: listSigningKeyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSigningKey(
    request: Api20100401SigningKey.UpdateSigningKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSigningKey, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSigningKey, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountSigningKeySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401SigningKey {
  export type DeleteSigningKeyRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchSigningKeyRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListSigningKeyRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSigningKeyRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
  };
}
