import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Keys in a sync map
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncMapItem(
    request: SyncV1SyncMapItem.CreateSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Key", value: request.key, schema: s.string() },
            { name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.int()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Keys in a sync map
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncMapItem(
    request: SyncV1SyncMapItem.DeleteSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Keys in a sync map
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncMapItem(
    request: SyncV1SyncMapItem.FetchSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Keys in a sync map
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncMapItem(
    request: SyncV1SyncMapItem.ListSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapItemResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapItemResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Keys in a sync map
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncMapItem(
    request: SyncV1SyncMapItem.UpdateSyncMapItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.int()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMapItem {
  export type CreateSyncMapItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the Map
     * Item in.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map to add the new Map Item to. Can be the Sync Map resource's `sid` or
     * its `unique_name`.
     */
    mapSid: string;
    /** The unique, user-defined key for the Map Item. Can be up to 320 characters long. */
    key: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can
     * be up to 16 KiB in length.
     */
    data: Record<string, unknown>;
    /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Map Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Map Item's parent Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
  };

  export type DeleteSyncMapItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Item resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to delete. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /** The `key` value of the Sync Map Item resource to delete. */
    key: string;
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item]
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
  };

  export type FetchSyncMapItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Item resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /** The `key` value of the Sync Map Item resource to fetch. */
    key: string;
  };

  export type ListSyncMapItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Map Item
     * resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc`
     * (descending) and the default is ascending. Map Items are [ordered
     * lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
     */
    order?: ChallengeEnumListOrders;
    /** The `key` of the first Sync Map Item resource to read. See also `bounds`. */
    from?: string;
    /**
     * Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to
     * include the Map Item referenced by the `from` parameter or `exclusive` to start with the next
     * Map Item. The default value is `inclusive`.
     */
    bounds?: SyncMapItemEnumQueryFromBoundType;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSyncMapItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Item resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to update. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /** The `key` value of the Sync Map Item resource to update. */
    key: string;
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item]
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can
     * be up to 16 KiB in length.
     */
    data?: Record<string, unknown>;
    /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Map Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Map Item's parent Sync Map expires (time-to-live) and is deleted. This parameter can only
     * be used when the Map Item's `data` or `ttl` is updated in the same request.
     */
    collectionTtl?: number;
  };
}
