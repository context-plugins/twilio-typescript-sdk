import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountShortCodeSchema,
  type ApiV2010AccountShortCode,
} from "../models/api-v2010-account-short-code.js";
import {
  listShortCodeResponseSchema,
  type ListShortCodeResponse,
} from "../models/list-short-code-response.js";
import { smsFallbackMethod14Schema, type SmsFallbackMethod14 } from "../models/sms-fallback-method14.js";
import { smsMethod14Schema, type SmsMethod14 } from "../models/sms-method14.js";
import type { Servers } from "../servers.js";

export class Api20100401ShortCode {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchShortCode(
    request: Api20100401ShortCode.FetchShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountShortCode, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountShortCode, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountShortCodeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listShortCode(
    request: Api20100401ShortCode.ListShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListShortCodeResponse, ResponseError> {
    return this.#rawClient.execute<ListShortCodeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "ShortCode", value: request.shortCode, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listShortCodeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateShortCode(
    request: Api20100401ShortCode.UpdateShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountShortCode, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountShortCode, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod14Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod14Schema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountShortCodeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401ShortCode {
  export type FetchShortCodeRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListShortCodeRequest = {
    accountSid: string;
    friendlyName?: string;
    shortCode?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateShortCodeRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
    apiVersion?: string;
    smsUrl?: string;
    smsMethod?: SmsMethod14;
    smsFallbackUrl?: string;
    smsFallbackMethod?: SmsFallbackMethod14;
  };
}
