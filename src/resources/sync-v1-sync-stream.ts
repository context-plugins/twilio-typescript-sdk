import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listSyncStreamResponseSchema,
  type ListSyncStreamResponse,
} from "../models/list-sync-stream-response.js";
import {
  syncV1ServiceSyncStreamSchema,
  type SyncV1ServiceSyncStream,
} from "../models/sync-v1-service-sync-stream.js";
import type { Servers } from "../servers.js";

export class SyncV1SyncStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSyncStream(
    request: SyncV1SyncStream.CreateSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncStream, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSyncStream(
    request: SyncV1SyncStream.DeleteSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
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

  fetchSyncStream(
    request: SyncV1SyncStream.FetchSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncStream, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSyncStream(
    request: SyncV1SyncStream.ListSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncStreamResponse, ResponseError> {
    return this.#rawClient.execute<ListSyncStreamResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams"),
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
        success: { kind: "json", schema: listSyncStreamResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSyncStream(
    request: SyncV1SyncStream.UpdateSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncStream, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Ttl", value: request.ttl, schema: s.optional(s.number()) }],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncStream {
  export type CreateSyncStreamRequest = {
    serviceSid: string;
    uniqueName?: string;
    ttl?: number;
  };

  export type DeleteSyncStreamRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchSyncStreamRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListSyncStreamRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSyncStreamRequest = {
    serviceSid: string;
    sid: string;
    ttl?: number;
  };
}
