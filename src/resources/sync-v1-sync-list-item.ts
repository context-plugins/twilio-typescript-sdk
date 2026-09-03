import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  challengeEnumListOrdersSchema,
  type ChallengeEnumListOrders,
} from "../models/challenge-enum-list-orders.js";
import {
  listSyncListItemResponseSchema,
  type ListSyncListItemResponse,
} from "../models/list-sync-list-item-response.js";
import {
  syncListItemEnumQueryFromBoundTypeSchema,
  type SyncListItemEnumQueryFromBoundType,
} from "../models/sync-list-item-enum-query-from-bound-type.js";
import {
  syncV1ServiceSyncListSyncListItemSchema,
  type SyncV1ServiceSyncListSyncListItem,
} from "../models/sync-v1-service-sync-list-sync-list-item.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncListItem {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSyncListItem(
    request: SyncV1SyncListItem.CreateSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncListSyncListItem, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.number()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSyncListItem(
    request: SyncV1SyncListItem.DeleteSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.number() },
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

  fetchSyncListItem(
    request: SyncV1SyncListItem.FetchSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncListSyncListItem, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncListItem(
    request: SyncV1SyncListItem.ListSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncListItemResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncListItemResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
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
            schema: s.optional(s.lazy(() => syncListItemEnumQueryFromBoundTypeSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncListItemResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncListItem(
    request: SyncV1SyncListItem.UpdateSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncListSyncListItem, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.number() },
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
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncListItem {
  export type CreateSyncListItemRequest = {
    serviceSid: string;
    listSid: string;
    data: Record<string, unknown>;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
  };

  export type DeleteSyncListItemRequest = {
    serviceSid: string;
    listSid: string;
    index: number;
    ifMatch?: string;
  };

  export type FetchSyncListItemRequest = {
    serviceSid: string;
    listSid: string;
    index: number;
  };

  export type ListSyncListItemRequest = {
    serviceSid: string;
    listSid: string;
    order?: ChallengeEnumListOrders;
    from?: string;
    bounds?: SyncListItemEnumQueryFromBoundType;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncListItemRequest = {
    serviceSid: string;
    listSid: string;
    index: number;
    ifMatch?: string;
    data?: Record<string, unknown>;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
  };
}
