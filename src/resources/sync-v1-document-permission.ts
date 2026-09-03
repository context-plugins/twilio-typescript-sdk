import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  deleteDocumentPermission(
    request: SyncV1DocumentPermission.DeleteDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
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

  fetchDocumentPermission(
    request: SyncV1DocumentPermission.FetchDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceDocumentDocumentPermission, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentDocumentPermissionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listDocumentPermission(
    request: SyncV1DocumentPermission.ListDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDocumentPermissionResponse, ResponseError> {
    return this.#rawClient.execute<ListDocumentPermissionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDocumentPermissionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateDocumentPermission(
    request: SyncV1DocumentPermission.UpdateDocumentPermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceDocumentDocumentPermission, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12(
          "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "DocumentSid", value: request.documentSid, schema: s.string() },
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
        success: { kind: "json", schema: syncV1ServiceDocumentDocumentPermissionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1DocumentPermission {
  export type DeleteDocumentPermissionRequest = {
    serviceSid: string;
    documentSid: string;
    identity: string;
  };

  export type FetchDocumentPermissionRequest = {
    serviceSid: string;
    documentSid: string;
    identity: string;
  };

  export type ListDocumentPermissionRequest = {
    serviceSid: string;
    documentSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateDocumentPermissionRequest = {
    serviceSid: string;
    documentSid: string;
    identity: string;
    read: boolean;
    write: boolean;
    manage: boolean;
  };
}
