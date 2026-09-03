import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createShortCodeApplicationRequestSchema,
  type CreateShortCodeApplicationRequest,
} from "../models/create-short-code-application-request.js";
import {
  createShortCodeApplicationResponseSchema,
  type CreateShortCodeApplicationResponse,
} from "../models/create-short-code-application-response.js";
import {
  shortCodeApplicationResponsePageSchema,
  type ShortCodeApplicationResponsePage,
} from "../models/short-code-application-response-page.js";
import { shortCodeApplicationSchema, type ShortCodeApplication } from "../models/short-code-application.js";
import type { Servers } from "../servers.js";

export class V2ShortCodeApplications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createShortCodeApplication(
    request: V2ShortCodeApplications.CreateShortCodeApplicationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateShortCodeApplicationResponse, ResponseError> {
    return this.#rawClient.execute<CreateShortCodeApplicationResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/ShortCodes/Applications"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: createShortCodeApplicationRequestSchema },
      },
      {
        success: { kind: "json", schema: createShortCodeApplicationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchShortCodeApplication(
    request: V2ShortCodeApplications.FetchShortCodeApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ShortCodeApplication, ResponseError> {
    return this.#rawClient.execute<ShortCodeApplication, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/ShortCodes/Applications/{sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shortCodeApplicationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listShortCodeApplications(
    request: V2ShortCodeApplications.ListShortCodeApplicationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShortCodeApplicationResponsePage, ResponseError> {
    return this.#rawClient.execute<ShortCodeApplicationResponsePage, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/ShortCodes/Applications"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "AccountSid", value: request.accountSid, schema: s.optional(s.string()) },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "Status", value: request.status, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shortCodeApplicationResponsePageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace V2ShortCodeApplications {
  export type CreateShortCodeApplicationRequestParams = {
    body: CreateShortCodeApplicationRequest;
  };

  export type FetchShortCodeApplicationRequest = {
    sid: string;
  };

  export type ListShortCodeApplicationsRequest = {
    accountSid?: string;
    isoCountry?: string;
    status?: string;
    friendlyName?: string;
    sid?: string;
    pageSize?: number;
    page?: number;
  };
}
