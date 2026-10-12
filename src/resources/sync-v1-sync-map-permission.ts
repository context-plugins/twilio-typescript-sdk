import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listSyncMapPermissionResponseSchema,
  type ListSyncMapPermissionResponse,
} from "../models/list-sync-map-permission-response.js";
import {
  syncV1ServiceSyncMapSyncMapPermissionSchema,
  type SyncV1ServiceSyncMapSyncMapPermission,
} from "../models/sync-v1-service-sync-map-sync-map-permission.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncMapPermission {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a specific Sync Map Permission.
   *
   * @remarks
   * Delete a specific Sync Map Permission.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncMapPermission(
    request: SyncV1SyncMapPermission.DeleteSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
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
   * Fetch a specific Sync Map Permission.
   *
   * @remarks
   * Fetch a specific Sync Map Permission.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncMapPermission(
    request: SyncV1SyncMapPermission.FetchSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Permissions applying to a Sync Map.
   *
   * @remarks
   * Retrieve a list of all Permissions applying to a Sync Map.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncMapPermission(
    request: SyncV1SyncMapPermission.ListSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapPermissionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapPermissionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an identity's access to a specific Sync Map.
   *
   * @remarks
   * Update an identity's access to a specific Sync Map.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncMapPermission(
    request: SyncV1SyncMapPermission.UpdateSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Read", value: request.read, schema: s.boolean() },
            { name: "Write", value: request.write, schema: s.boolean() },
            { name: "Manage", value: request.manage, schema: s.boolean() },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMapPermission {
  export type DeleteSyncMapPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Permission resource to delete. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to delete. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission
     * resource to delete.
     */
    identity: string;
  };

  export type FetchSyncMapPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Permission resource to fetch. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to fetch. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission
     * resource to fetch.
     */
    identity: string;
  };

  export type ListSyncMapPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Permission resources to read. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Permission resources to read. Can be the Sync Map resource's
     * `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSyncMapPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map
     * Permission resource to update. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to update. Can be the Sync Map
     * resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission
     * resource to update.
     */
    identity: string;
    /** Whether the identity can read the Sync Map and its Items. Default value is `false`. */
    read: boolean;
    /**
     * Whether the identity can create, update, and delete Items in the Sync Map. Default value is
     * `false`.
     */
    write: boolean;
    /** Whether the identity can delete the Sync Map. Default value is `false`. */
    manage: boolean;
  };
}
