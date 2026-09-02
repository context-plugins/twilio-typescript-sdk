import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountSipSipCredentialListSchema,
  type ApiV2010AccountSipSipCredentialList,
} from "../models/api-v2010-account-sip-sip-credential-list.js";
import {
  listSipCredentialListResponseSchema,
  type ListSipCredentialListResponse,
} from "../models/list-sip-credential-list-response.js";
import type { Servers } from "../servers.js";

export class Api20100401CredentialList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipCredentialList(
    request: Api20100401CredentialList.CreateSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipCredentialList(
    request: Api20100401CredentialList.DeleteSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json"),
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

  fetchSipCredentialList(
    request: Api20100401CredentialList.FetchSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipCredentialList(
    request: Api20100401CredentialList.ListSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialListResponse, ResponseError> {
    return this.#rawClient.execute<ListSipCredentialListResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json"),
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
        success: { kind: "json", schema: listSipCredentialListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSipCredentialList(
    request: Api20100401CredentialList.UpdateSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401CredentialList {
  export type CreateSipCredentialListRequest = {
    accountSid: string;
    friendlyName: string;
  };

  export type DeleteSipCredentialListRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchSipCredentialListRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListSipCredentialListRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSipCredentialListRequest = {
    accountSid: string;
    sid: string;
    friendlyName: string;
  };
}
