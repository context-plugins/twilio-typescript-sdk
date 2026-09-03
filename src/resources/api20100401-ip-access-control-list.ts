import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipIpAccessControlListSchema,
  type ApiV2010AccountSipSipIpAccessControlList,
} from "../models/api-v2010-account-sip-sip-ip-access-control-list.js";
import {
  listSipIpAccessControlListResponseSchema,
  type ListSipIpAccessControlListResponse,
} from "../models/list-sip-ip-access-control-list-response.js";
import type { Servers } from "../servers.js";

export class Api20100401IpAccessControlList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipIpAccessControlList(
    request: Api20100401IpAccessControlList.CreateSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipIpAccessControlList(
    request: Api20100401IpAccessControlList.DeleteSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json"),
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

  fetchSipIpAccessControlList(
    request: Api20100401IpAccessControlList.FetchSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipIpAccessControlList(
    request: Api20100401IpAccessControlList.ListSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipIpAccessControlListResponse, ResponseError> {
    return this.#rawClient.execute<ListSipIpAccessControlListResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json"),
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
        success: { kind: "json", schema: listSipIpAccessControlListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSipIpAccessControlList(
    request: Api20100401IpAccessControlList.UpdateSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401IpAccessControlList {
  export type CreateSipIpAccessControlListRequest = {
    accountSid: string;
    friendlyName: string;
  };

  export type DeleteSipIpAccessControlListRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchSipIpAccessControlListRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListSipIpAccessControlListRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSipIpAccessControlListRequest = {
    accountSid: string;
    sid: string;
    friendlyName: string;
  };
}
