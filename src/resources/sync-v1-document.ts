import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listDocumentResponseSchema, type ListDocumentResponse } from "../models/list-document-response.js";
import {
  syncV1ServiceDocumentSchema,
  type SyncV1ServiceDocument,
} from "../models/sync-v1-service-document.js";
import type { Servers } from "../servers.js";

export class SyncV1Document {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createDocument(
    request: SyncV1Document.CreateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteDocument(
    request: SyncV1Document.DeleteDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
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

  fetchDocument(
    request: SyncV1Document.FetchDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceDocument, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listDocument(
    request: SyncV1Document.ListDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDocumentResponse, ResponseError> {
    return this.#rawClient.execute<ListDocumentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDocumentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateDocument(
    request: SyncV1Document.UpdateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1Document {
  export type CreateDocumentRequest = {
    serviceSid: string;
    uniqueName?: string;
    data?: Record<string, unknown>;
    ttl?: number;
  };

  export type DeleteDocumentRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchDocumentRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListDocumentRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateDocumentRequest = {
    serviceSid: string;
    sid: string;
    ifMatch?: string;
    data?: Record<string, unknown>;
    ttl?: number;
  };
}
