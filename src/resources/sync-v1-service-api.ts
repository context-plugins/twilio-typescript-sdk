import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Containers for sync objects
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createService5(
    request: SyncV1ServiceApi.CreateService5Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optional(s.int()),
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Containers for sync objects
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteService5(
    request: SyncV1ServiceApi.DeleteService5Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Containers for sync objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchService5(
    request: SyncV1ServiceApi.FetchService5Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Containers for sync objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listService5(
    request: SyncV1ServiceApi.ListService5Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse4Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Containers for sync objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateService4(
    request: SyncV1ServiceApi.UpdateService4Request,
    options?: RequestOptions,
  ): ApiPromise<SyncV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optional(s.int()),
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1ServiceApi {
  export type CreateService5Request = {
    /** A string that you assign to describe the resource. */
    friendlyName?: string;
    /** The URL we should call when Sync objects are manipulated. */
    webhookUrl?: string;
    /**
     * Whether the service instance should call `webhook_url` when client endpoints connect to Sync.
     * The default is `false`.
     */
    reachabilityWebhooksEnabled?: boolean;
    /**
     * Whether token identities in the Service must be granted access to Sync objects by using the
     * [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource.
     */
    aclEnabled?: boolean;
    /**
     * Whether every `endpoint_disconnected` event should occur after a configurable delay. The
     * default is `false`, where the `endpoint_disconnected` event occurs immediately after
     * disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected`
     * event.
     */
    reachabilityDebouncingEnabled?: boolean;
    /**
     * The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.
     * Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds
     * after the last running client disconnects, and a Sync identity is declared offline, before
     * the `webhook_url` is called if all endpoints remain offline. A reconnection from the same
     * identity by any endpoint during this interval prevents the call to `webhook_url`.
     */
    reachabilityDebouncingWindow?: number;
    /**
     * Whether the Service instance should call `webhook_url` when the REST API is used to update
     * Sync objects. The default is `false`.
     */
    webhooksFromRestEnabled?: boolean;
  };

  export type DeleteService5Request = {
    /** The SID of the Service resource to delete. */
    sid: string;
  };

  export type FetchService5Request = {
    /** The SID of the Service resource to fetch. */
    sid: string;
  };

  export type ListService5Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateService4Request = {
    /** The SID of the Service resource to update. */
    sid: string;
    /** The URL we should call when Sync objects are manipulated. */
    webhookUrl?: string;
    /** A string that you assign to describe the resource. */
    friendlyName?: string;
    /**
     * Whether the service instance should call `webhook_url` when client endpoints connect to Sync.
     * The default is `false`.
     */
    reachabilityWebhooksEnabled?: boolean;
    /**
     * Whether token identities in the Service must be granted access to Sync objects by using the
     * [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource.
     */
    aclEnabled?: boolean;
    /**
     * Whether every `endpoint_disconnected` event should occur after a configurable delay. The
     * default is `false`, where the `endpoint_disconnected` event occurs immediately after
     * disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected`
     * event.
     */
    reachabilityDebouncingEnabled?: boolean;
    /**
     * The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.
     * Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds
     * after the last running client disconnects, and a Sync identity is declared offline, before
     * the webhook is called if all endpoints remain offline. A reconnection from the same identity
     * by any endpoint during this interval prevents the webhook from being called.
     */
    reachabilityDebouncingWindow?: number;
    /**
     * Whether the Service instance should call `webhook_url` when the REST API is used to update
     * Sync objects. The default is `false`.
     */
    webhooksFromRestEnabled?: boolean;
  };
}
