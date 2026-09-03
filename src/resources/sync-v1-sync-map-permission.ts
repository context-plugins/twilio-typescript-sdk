import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  deleteSyncMapPermission(
    request: SyncV1SyncMapPermission.DeleteSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
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

  fetchSyncMapPermission(
    request: SyncV1SyncMapPermission.FetchSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMapSyncMapPermission, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapPermissionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncMapPermission(
    request: SyncV1SyncMapPermission.ListSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncMapPermissionResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncMapPermissionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSyncMapPermissionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncMapPermission(
    request: SyncV1SyncMapPermission.UpdateSyncMapPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncMapSyncMapPermission, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "MapSid", value: request.mapSid, schema: s.string() },
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
        success: { kind: "json", schema: syncV1ServiceSyncMapSyncMapPermissionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncMapPermission {
  export type DeleteSyncMapPermissionRequest = {
    serviceSid: string;
    mapSid: string;
    identity: string;
  };

  export type FetchSyncMapPermissionRequest = {
    serviceSid: string;
    mapSid: string;
    identity: string;
  };

  export type ListSyncMapPermissionRequest = {
    serviceSid: string;
    mapSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncMapPermissionRequest = {
    serviceSid: string;
    mapSid: string;
    identity: string;
    read: boolean;
    write: boolean;
    manage: boolean;
  };
}
