import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new Stream.
   *
   * @remarks
   * Create a new Stream.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncStream(
    request: SyncV1SyncStream.CreateSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Stream.
   *
   * @remarks
   * Delete a specific Stream.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSyncStream(
    request: SyncV1SyncStream.DeleteSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
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
   * Fetch a specific Stream.
   *
   * @remarks
   * Fetch a specific Stream.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSyncStream(
    request: SyncV1SyncStream.FetchSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
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
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Streams in a Service Instance.
   *
   * @remarks
   * Retrieve a list of all Streams in a Service Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncStream(
    request: SyncV1SyncStream.ListSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSyncStreamResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams"),
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
        success: { kind: "json", schema: listSyncStreamResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Stream.
   *
   * @remarks
   * Update a specific Stream.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncStream(
    request: SyncV1SyncStream.UpdateSyncStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStream, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Ttl", value: request.ttl, schema: s.optional(s.int()) }],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1SyncStream {
  export type CreateSyncStreamRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new
     * Stream in.
     */
    serviceSid: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be
     * unique within its Service and it can be up to 320 characters long. The `unique_name` value
     * can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Stream expires and is deleted (time-to-live).
     */
    ttl?: number;
  };

  export type DeleteSyncStreamRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * Stream resource to delete.
     */
    serviceSid: string;
    /** The SID of the Stream resource to delete. */
    sid: string;
  };

  export type FetchSyncStreamRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * Stream resource to fetch.
     */
    serviceSid: string;
    /** The SID of the Stream resource to fetch. */
    sid: string;
  };

  export type ListSyncStreamRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Stream
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

  export type UpdateSyncStreamRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync
     * Stream resource to update.
     */
    serviceSid: string;
    /** The SID of the Stream resource to update. */
    sid: string;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before
     * the Stream expires and is deleted (time-to-live).
     */
    ttl?: number;
  };
}
