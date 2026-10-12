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

  /**
   * Items in a sync list
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncListItem(
    request: SyncV1SyncListItem.CreateSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "ItemTtl", value: request.itemTtl, schema: s.optional(s.int()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Items in a sync list
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncListItem(
    request: SyncV1SyncListItem.DeleteSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.int() },
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
   * Items in a sync list
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncListItem(
    request: SyncV1SyncListItem.FetchSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Items in a sync list
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncListItem(
    request: SyncV1SyncListItem.ListSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncListItemResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncListItemResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Items in a sync list
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncListItem(
    request: SyncV1SyncListItem.UpdateSyncListItemRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListItem, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Index", value: request.index, schema: s.int() },
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
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListItemSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncListItem {
  export type CreateSyncListItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new
     * List Item in.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List to add the new List Item to. Can be the Sync List resource's `sid`
     * or its `unique_name`.
     */
    listSid: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can
     * be up to 16 KiB in length.
     */
    data: Record<string, unknown>;
    /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the List Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the List Item's parent Sync List expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
  };

  export type DeleteSyncListItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Item resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Item resource to delete. Can be the Sync List
     * resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /** The index of the Sync List Item resource to delete. */
    index: number;
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item]
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
  };

  export type FetchSyncListItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Item resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Item resource to fetch. Can be the Sync List
     * resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /** The index of the Sync List Item resource to fetch. */
    index: number;
  };

  export type ListSyncListItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the List
     * Item resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the List Items to read. Can be the Sync List resource's `sid`
     * or its `unique_name`.
     */
    listSid: string;
    /**
     * How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or
     * `desc` (descending) and the default is ascending.
     */
    order?: ChallengeEnumListOrders;
    /** The `index` of the first Sync List Item resource to read. See also `bounds`. */
    from?: string;
    /**
     * Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to
     * include the List Item referenced by the `from` parameter or `exclusive` to start with the
     * next List Item. The default value is `inclusive`.
     */
    bounds?: SyncListItemEnumQueryFromBoundType;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSyncListItemRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Item resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Item resource to update. Can be the Sync List
     * resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /** The index of the Sync List Item resource to update. */
    index: number;
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item]
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can
     * be up to 16 KiB in length.
     */
    data?: Record<string, unknown>;
    /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the List Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the List Item's parent Sync List expires (time-to-live) and is deleted. This parameter can
     * only be used when the List Item's `data` or `ttl` is updated in the same request.
     */
    collectionTtl?: number;
  };
}
