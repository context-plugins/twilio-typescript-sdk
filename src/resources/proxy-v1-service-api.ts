import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listServiceResponse3Schema, type ListServiceResponse3 } from "../models/list-service-response3.js";
import { proxyV1ServiceSchema, type ProxyV1Service } from "../models/proxy-v1-service.js";
import {
  serviceEnumGeoMatchLevelSchema,
  type ServiceEnumGeoMatchLevel,
} from "../models/service-enum-geo-match-level.js";
import {
  serviceEnumNumberSelectionBehaviorSchema,
  type ServiceEnumNumberSelectionBehavior,
} from "../models/service-enum-number-selection-behavior.js";
import type { Servers } from "../servers.js";

export class ProxyV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createService4(
    request: ProxyV1ServiceApi.CreateService4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ResponseError> {
    return this.#rawClient.execute<ProxyV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.string() },
            { name: "DefaultTtl", value: request.defaultTtl, schema: s.optional(s.number()) },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            {
              name: "GeoMatchLevel",
              value: request.geoMatchLevel,
              schema: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
            },
            {
              name: "NumberSelectionBehavior",
              value: request.numberSelectionBehavior,
              schema: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
            },
            {
              name: "InterceptCallbackUrl",
              value: request.interceptCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "OutOfSessionCallbackUrl",
              value: request.outOfSessionCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "ChatInstanceSid", value: request.chatInstanceSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteService4(
    request: ProxyV1ServiceApi.DeleteService4Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchService4(
    request: ProxyV1ServiceApi.FetchService4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ResponseError> {
    return this.#rawClient.execute<ProxyV1Service, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listService4(
    request: ProxyV1ServiceApi.ListService4Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse3, ResponseError> {
    return this.#rawClient.execute<ListServiceResponse3, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse3Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateService3(
    request: ProxyV1ServiceApi.UpdateService3Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ResponseError> {
    return this.#rawClient.execute<ProxyV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "DefaultTtl", value: request.defaultTtl, schema: s.optional(s.number()) },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            {
              name: "GeoMatchLevel",
              value: request.geoMatchLevel,
              schema: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
            },
            {
              name: "NumberSelectionBehavior",
              value: request.numberSelectionBehavior,
              schema: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
            },
            {
              name: "InterceptCallbackUrl",
              value: request.interceptCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "OutOfSessionCallbackUrl",
              value: request.outOfSessionCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "ChatInstanceSid", value: request.chatInstanceSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1ServiceApi {
  export type CreateService4Request = {
    uniqueName: string;
    defaultTtl?: number;
    callbackUrl?: string;
    geoMatchLevel?: ServiceEnumGeoMatchLevel;
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
    interceptCallbackUrl?: string;
    outOfSessionCallbackUrl?: string;
    chatInstanceSid?: string;
  };

  export type DeleteService4Request = {
    sid: string;
  };

  export type FetchService4Request = {
    sid: string;
  };

  export type ListService4Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateService3Request = {
    sid: string;
    uniqueName?: string;
    defaultTtl?: number;
    callbackUrl?: string;
    geoMatchLevel?: ServiceEnumGeoMatchLevel;
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
    interceptCallbackUrl?: string;
    outOfSessionCallbackUrl?: string;
    chatInstanceSid?: string;
  };
}
