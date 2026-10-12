import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listDocumentPermissionResponseSchema,
  type ListDocumentPermissionResponse,
} from "../models/list-document-permission-response.js";
import {
  syncV1ServiceDocumentDocumentPermissionSchema,
  type SyncV1ServiceDocumentDocumentPermission,
} from "../models/sync-v1-service-document-document-permission.js";
import type { Servers } from "../servers.js";

export class SyncV1DocumentPermission {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a specific Sync Document Permission.
   *
   * @remarks
   * Delete a specific Sync Document Permission.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocumentPermission(
    request: SyncV1DocumentPermission.DeleteDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
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
   * Fetch a specific Sync Document Permission.
   *
   * @remarks
   * Fetch a specific Sync Document Permission.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDocumentPermission(
    request: SyncV1DocumentPermission.FetchDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentDocumentPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Permissions applying to a Sync Document.
   *
   * @remarks
   * Retrieve a list of all Permissions applying to a Sync Document.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocumentPermission(
    request: SyncV1DocumentPermission.ListDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDocumentPermissionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
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
        success: { kind: "json", schema: listDocumentPermissionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an identity's access to a specific Sync Document.
   *
   * @remarks
   * Update an identity's access to a specific Sync Document.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDocumentPermission(
    request: SyncV1DocumentPermission.UpdateDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
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
        success: { kind: "json", schema: syncV1ServiceDocumentDocumentPermissionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1DocumentPermission {
  export type DeleteDocumentPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * Permission resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Document with the Document Permission resource to delete. Can be the
     * Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission
     * resource to delete.
     */
    identity: string;
  };

  export type FetchDocumentPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * Permission resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Document with the Document Permission resource to fetch. Can be the
     * Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission
     * resource to fetch.
     */
    identity: string;
  };

  export type ListDocumentPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * Permission resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Document with the Document Permission resources to read. Can be the
     * Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateDocumentPermissionRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * Permission resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Document with the Document Permission resource to update. Can be the
     * Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission
     * resource to update.
     */
    identity: string;
    /** Whether the identity can read the Sync Document. Default value is `false`. */
    read: boolean;
    /** Whether the identity can update the Sync Document. Default value is `false`. */
    write: boolean;
    /** Whether the identity can delete the Sync Document. Default value is `false`. */
    manage: boolean;
  };
}
