import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Sync map objects
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncMap(
    request: SyncV1SyncMap.CreateSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync map objects
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncMap(
    request: SyncV1SyncMap.DeleteSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
   * Sync map objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncMap(
    request: SyncV1SyncMap.FetchSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync map objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncMap(
    request: SyncV1SyncMap.ListSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync map objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncMap(
    request: SyncV1SyncMap.UpdateSyncMapRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMap, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "CollectionTtl", value: request.collectionTtl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMap {
  export type CreateSyncMapRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the
     * Sync Map in.
     */
    serviceSid: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an
     * alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /** An alias for `collection_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
  };

  export type DeleteSyncMapRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to delete. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
  };

  export type FetchSyncMapRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to fetch. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
  };

  export type ListSyncMapRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * resources to read.
     */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSyncMapRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to update. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
    /** An alias for `collection_ttl`. If both parameters are provided, this value is ignored. */
    ttl?: number;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
  };
}
