import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  challengeEnumListOrdersSchema,
  type ChallengeEnumListOrders,
} from "../models/challenge-enum-list-orders.js";
import {
  listSyncMapItemResponseSchema,
  type ListSyncMapItemResponse,
} from "../models/list-sync-map-item-response.js";
import {
  syncMapItemEnumQueryFromBoundTypeSchema,
  type SyncMapItemEnumQueryFromBoundType,
} from "../models/sync-map-item-enum-query-from-bound-type.js";
import {
  syncV1ServiceSyncMapSyncMapItemSchema,
  type SyncV1ServiceSyncMapSyncMapItem,
} from "../models/sync-v1-service-sync-map-sync-map-item.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncMapItem {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSyncMapItem(
    request: SyncV1SyncMapItem.CreateSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMapSyncMapItem, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Key", value: request.key, schema: s.string() },
            { name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.number()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSyncMapItem(
    request: SyncV1SyncMapItem.DeleteSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchSyncMapItem(
    request: SyncV1SyncMapItem.FetchSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMapSyncMapItem, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncMapItem(
    request: SyncV1SyncMapItem.ListSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapItemResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncMapItemResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
        ],
        query: [
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          {
            name: "Bounds",
            value: request.bounds,
            schema: s.optional(s.lazy(() => syncMapItemEnumQueryFromBoundTypeSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapItemResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncMapItem(
    request: SyncV1SyncMapItem.UpdateSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMapSyncMapItem, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.number()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMapItem {
  export type CreateSyncMapItemRequest = {
    serviceSid: string;
    mapSid: string;
    key: string;
    data: Record<string, unknown>;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
  };

  export type DeleteSyncMapItemRequest = {
    serviceSid: string;
    mapSid: string;
    key: string;
    ifMatch?: string;
  };

  export type FetchSyncMapItemRequest = {
    serviceSid: string;
    mapSid: string;
    key: string;
  };

  export type ListSyncMapItemRequest = {
    serviceSid: string;
    mapSid: string;
    order?: ChallengeEnumListOrders;
    from?: string;
    bounds?: SyncMapItemEnumQueryFromBoundType;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncMapItemRequest = {
    serviceSid: string;
    mapSid: string;
    key: string;
    ifMatch?: string;
    data?: Record<string, unknown>;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
  };
}
