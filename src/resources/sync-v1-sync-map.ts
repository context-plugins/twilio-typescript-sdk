import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listSyncMapResponseSchema, type ListSyncMapResponse } from "../models/list-sync-map-response.js";
import { syncV1ServiceSyncMapSchema, type SyncV1ServiceSyncMap } from "../models/sync-v1-service-sync-map.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncMap {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSyncMap(
    request: SyncV1SyncMap.CreateSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMap, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSyncMap(
    request: SyncV1SyncMap.DeleteSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
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

  fetchSyncMap(
    request: SyncV1SyncMap.FetchSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMap, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncMap(
    request: SyncV1SyncMap.ListSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncMapResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncMap(
    request: SyncV1SyncMap.UpdateSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMap, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMap {
  export type CreateSyncMapRequest = {
    serviceSid: string;
    uniqueName?: string;
    ttl?: number;
    collectionTtl?: number;
  };

  export type DeleteSyncMapRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchSyncMapRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListSyncMapRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncMapRequest = {
    serviceSid: string;
    sid: string;
    ttl?: number;
    collectionTtl?: number;
  };
}
