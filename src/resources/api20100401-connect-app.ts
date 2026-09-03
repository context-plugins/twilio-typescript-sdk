import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountConnectAppSchema,
  type ApiV2010AccountConnectApp,
} from "../models/api-v2010-account-connect-app.js";
import {
  connectAppEnumPermissionSchema,
  type ConnectAppEnumPermission,
} from "../models/connect-app-enum-permission.js";
import {
  deauthorizeCallbackMethod1Schema,
  type DeauthorizeCallbackMethod1,
} from "../models/deauthorize-callback-method1.js";
import {
  listConnectAppResponseSchema,
  type ListConnectAppResponse,
} from "../models/list-connect-app-response.js";
import type { Servers } from "../servers.js";

export class Api20100401ConnectApp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteConnectApp(
    request: Api20100401ConnectApp.DeleteConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
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

  fetchConnectApp(
    request: Api20100401ConnectApp.FetchConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConnectApp, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConnectApp, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConnectAppSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConnectApp(
    request: Api20100401ConnectApp.ListConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConnectAppResponse, ResponseError> {
    return this.#rawClient.execute<ListConnectAppResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps.json"),
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
        success: { kind: "json", schema: listConnectAppResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConnectApp(
    request: Api20100401ConnectApp.UpdateConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConnectApp, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConnectApp, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "AuthorizeRedirectUrl",
              value: request.authorizeRedirectUrl,
              schema: s.optional(s.string()),
            },
            { name: "CompanyName", value: request.companyName, schema: s.optional(s.string()) },
            {
              name: "DeauthorizeCallbackMethod",
              value: request.deauthorizeCallbackMethod,
              schema: s.optional(s.lazy(() => deauthorizeCallbackMethod1Schema)),
            },
            {
              name: "DeauthorizeCallbackUrl",
              value: request.deauthorizeCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "HomepageUrl", value: request.homepageUrl, schema: s.optional(s.string()) },
            {
              name: "Permissions",
              value: request.permissions,
              schema: s.optional(s.array(s.lazy(() => connectAppEnumPermissionSchema))),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConnectAppSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401ConnectApp {
  export type DeleteConnectAppRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchConnectAppRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListConnectAppRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConnectAppRequest = {
    accountSid: string;
    sid: string;
    authorizeRedirectUrl?: string;
    companyName?: string;
    deauthorizeCallbackMethod?: DeauthorizeCallbackMethod1;
    deauthorizeCallbackUrl?: string;
    description?: string;
    friendlyName?: string;
    homepageUrl?: string;
    permissions?: ConnectAppEnumPermission[];
  };
}
