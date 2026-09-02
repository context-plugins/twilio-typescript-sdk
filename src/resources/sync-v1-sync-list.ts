import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listSyncListResponseSchema, type ListSyncListResponse } from "../models/list-sync-list-response.js";
import {
  syncV1ServiceSyncListSchema,
  type SyncV1ServiceSyncList,
} from "../models/sync-v1-service-sync-list.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSyncList(
    request: SyncV1SyncList.CreateSyncListRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncList, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists"),
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
        success: { kind: "json", schema: syncV1ServiceSyncListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSyncList(
    request: SyncV1SyncList.DeleteSyncListRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{Sid}"),
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

  fetchSyncList(
    request: SyncV1SyncList.FetchSyncListRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncList, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncList(
    request: SyncV1SyncList.ListSyncListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncListResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncListResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists"),
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
        success: { kind: "json", schema: listSyncListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncList(
    request: SyncV1SyncList.UpdateSyncListRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncList, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{Sid}"),
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
        success: { kind: "json", schema: syncV1ServiceSyncListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncList {
  export type CreateSyncListRequest = {
    serviceSid: string;
    uniqueName?: string;
    ttl?: number;
    collectionTtl?: number;
  };

  export type DeleteSyncListRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchSyncListRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListSyncListRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncListRequest = {
    serviceSid: string;
    sid: string;
    ttl?: number;
    collectionTtl?: number;
  };
}
