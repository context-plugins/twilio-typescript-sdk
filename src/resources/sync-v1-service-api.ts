import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listServiceResponse4Schema, type ListServiceResponse4 } from "../models/list-service-response4.js";
import { syncV1ServiceSchema, type SyncV1Service } from "../models/sync-v1-service.js";
import type { Servers } from "../servers.js";

export class SyncV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createService5(
    request: SyncV1ServiceApi.CreateService5Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ResponseError> {
    return this.#rawClient.execute<SyncV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "WebhookUrl", value: request.webhookUrl, schema: s.optional(s.string()) },
            {
              name: "ReachabilityWebhooksEnabled",
              value: request.reachabilityWebhooksEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "AclEnabled", value: request.aclEnabled, schema: s.optional(s.boolean()) },
            {
              name: "ReachabilityDebouncingEnabled",
              value: request.reachabilityDebouncingEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "ReachabilityDebouncingWindow",
              value: request.reachabilityDebouncingWindow,
              schema: s.optional(s.number()),
            },
            {
              name: "WebhooksFromRestEnabled",
              value: request.webhooksFromRestEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteService5(
    request: SyncV1ServiceApi.DeleteService5Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{Sid}"),
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

  fetchService5(
    request: SyncV1ServiceApi.FetchService5Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ResponseError> {
    return this.#rawClient.execute<SyncV1Service, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listService5(
    request: SyncV1ServiceApi.ListService5Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse4, ResponseError> {
    return this.#rawClient.execute<ListServiceResponse4, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse4Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateService4(
    request: SyncV1ServiceApi.UpdateService4Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ResponseError> {
    return this.#rawClient.execute<SyncV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "WebhookUrl", value: request.webhookUrl, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "ReachabilityWebhooksEnabled",
              value: request.reachabilityWebhooksEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "AclEnabled", value: request.aclEnabled, schema: s.optional(s.boolean()) },
            {
              name: "ReachabilityDebouncingEnabled",
              value: request.reachabilityDebouncingEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "ReachabilityDebouncingWindow",
              value: request.reachabilityDebouncingWindow,
              schema: s.optional(s.number()),
            },
            {
              name: "WebhooksFromRestEnabled",
              value: request.webhooksFromRestEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1ServiceApi {
  export type CreateService5Request = {
    friendlyName?: string;
    webhookUrl?: string;
    reachabilityWebhooksEnabled?: boolean;
    aclEnabled?: boolean;
    reachabilityDebouncingEnabled?: boolean;
    reachabilityDebouncingWindow?: number;
    webhooksFromRestEnabled?: boolean;
  };

  export type DeleteService5Request = {
    sid: string;
  };

  export type FetchService5Request = {
    sid: string;
  };

  export type ListService5Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateService4Request = {
    sid: string;
    webhookUrl?: string;
    friendlyName?: string;
    reachabilityWebhooksEnabled?: boolean;
    aclEnabled?: boolean;
    reachabilityDebouncingEnabled?: boolean;
    reachabilityDebouncingWindow?: number;
    webhooksFromRestEnabled?: boolean;
  };
}
