import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listSyncListPermissionResponseSchema,
  type ListSyncListPermissionResponse,
} from "../models/list-sync-list-permission-response.js";
import {
  syncV1ServiceSyncListSyncListPermissionSchema,
  type SyncV1ServiceSyncListSyncListPermission,
} from "../models/sync-v1-service-sync-list-sync-list-permission.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncListPermission {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a specific Sync List Permission.
   *
   * @remarks
   * Delete a specific Sync List Permission.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncListPermission(
    request: SyncV1SyncListPermission.DeleteSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
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
   * Fetch a specific Sync List Permission.
   *
   * @remarks
   * Fetch a specific Sync List Permission.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncListPermission(
    request: SyncV1SyncListPermission.FetchSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Permissions applying to a Sync List.
   *
   * @remarks
   * Retrieve a list of all Permissions applying to a Sync List.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncListPermission(
    request: SyncV1SyncListPermission.ListSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncListPermissionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
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
        success: { kind: "json", schema: listSyncListPermissionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an identity's access to a specific Sync List.
   *
   * @remarks
   * Update an identity's access to a specific Sync List.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncListPermission(
    request: SyncV1SyncListPermission.UpdateSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
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
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncListPermission {
  export type DeleteSyncListPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Permission resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Permission resource to delete. Can be the Sync
     * List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync List Permission
     * resource to delete.
     */
    identity: string;
  };

  export type FetchSyncListPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Permission resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Permission resource to fetch. Can be the Sync
     * List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync List Permission
     * resource to fetch.
     */
    identity: string;
  };

  export type ListSyncListPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Permission resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Permission resources to read. Can be the Sync
     * List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSyncListPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * List Permission resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List with the Sync List Permission resource to update. Can be the Sync
     * List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Sync List Permission
     * resource to update.
     */
    identity: string;
    /** Whether the identity can read the Sync List and its Items. Default value is `false`. */
    read: boolean;
    /**
     * Whether the identity can create, update, and delete Items in the Sync List. Default value is
     * `false`.
     */
    write: boolean;
    /** Whether the identity can delete the Sync List. Default value is `false`. */
    manage: boolean;
  };
}
