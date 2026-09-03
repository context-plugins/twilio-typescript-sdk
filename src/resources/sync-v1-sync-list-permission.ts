import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  deleteSyncListPermission(
    request: SyncV1SyncListPermission.DeleteSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
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

  fetchSyncListPermission(
    request: SyncV1SyncListPermission.FetchSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncListSyncListPermission, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncListSyncListPermissionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncListPermission(
    request: SyncV1SyncListPermission.ListSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncListPermissionResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncListPermissionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncListPermissionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncListPermission(
    request: SyncV1SyncListPermission.UpdateSyncListPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncListSyncListPermission, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "ListSid", value: request.listSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncListPermission {
  export type DeleteSyncListPermissionRequest = {
    serviceSid: string;
    listSid: string;
    identity: string;
  };

  export type FetchSyncListPermissionRequest = {
    serviceSid: string;
    listSid: string;
    identity: string;
  };

  export type ListSyncListPermissionRequest = {
    serviceSid: string;
    listSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncListPermissionRequest = {
    serviceSid: string;
    listSid: string;
    identity: string;
    read: boolean;
    write: boolean;
    manage: boolean;
  };
}
