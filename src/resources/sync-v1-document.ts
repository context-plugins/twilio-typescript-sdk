import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Sync Document objects
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDocument(
    request: SyncV1Document.CreateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync Document objects
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocument(
    request: SyncV1Document.DeleteDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
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
   * Sync Document objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDocument(
    request: SyncV1Document.FetchDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
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
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync Document objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocument(
    request: SyncV1Document.ListDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDocumentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents"),
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
        success: { kind: "json", schema: listDocumentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Sync Document objects
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDocument(
    request: SyncV1Document.UpdateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Documents/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Data", value: request.data, schema: s.optional(s.record(s.string(), s.unknown())) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1Document {
  export type CreateDocumentRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new
     * Document resource in.
     */
    serviceSid: string;
    /** An application-defined string that uniquely identifies the Sync Document */
    uniqueName?: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Sync Document stores.
     * Can be up to 16 KiB in length.
     */
    data?: Record<string, unknown>;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Sync Document expires and is deleted (the Sync Document's time-to-live).
     */
    ttl?: number;
  };

  export type DeleteDocumentRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to delete. Can be the Document resource's `sid` or its
     * `unique_name`.
     */
    sid: string;
  };

  export type FetchDocumentRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to fetch. Can be the Document resource's `sid` or its
     * `unique_name`.
     */
    sid: string;
  };

  export type ListDocumentRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
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

  export type UpdateDocumentRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document
     * resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to update. Can be the Document resource's `sid` or its
     * `unique_name`.
     */
    sid: string;
    /** The If-Match HTTP request header */
    ifMatch?: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Sync Document stores.
     * Can be up to 16 KiB in length.
     */
    data?: Record<string, unknown>;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Sync Document expires and is deleted (time-to-live).
     */
    ttl?: number;
  };
}
