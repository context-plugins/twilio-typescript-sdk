import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listSessionResponseSchema, type ListSessionResponse } from "../models/list-session-response.js";
import {
  proxyV1ServiceSessionSchema,
  type ProxyV1ServiceSession,
} from "../models/proxy-v1-service-session.js";
import { sessionEnumModeSchema, type SessionEnumMode } from "../models/session-enum-mode.js";
import { sessionEnumStatusSchema, type SessionEnumStatus } from "../models/session-enum-status.js";
import type { Servers } from "../servers.js";

export class ProxyV1Session {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Session
   *
   * @remarks
   * Create a new Session
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSession(
    request: ProxyV1Session.CreateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "DateExpiry", value: request.dateExpiry, schema: s.optional(s.dateTime()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            { name: "Mode", value: request.mode, schema: s.optional(s.lazy(() => sessionEnumModeSchema)) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => sessionEnumStatusSchema)),
            },
            {
              name: "Participants",
              value: request.participants,
              schema: s.optional(s.array(s.record(s.string(), s.unknown()))),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Session.
   *
   * @remarks
   * Delete a specific Session.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSession(
    request: ProxyV1Session.DeleteSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
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
   * Fetch a specific Session.
   *
   * @remarks
   * Fetch a specific Session.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSession(
    request: ProxyV1Session.FetchSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
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
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per
   * page.
   *
   * @remarks
   * Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per
   * page.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSession(
    request: ProxyV1Session.ListSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSessionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions"),
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
        success: { kind: "json", schema: listSessionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Session.
   *
   * @remarks
   * Update a specific Session.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSession(
    request: ProxyV1Session.UpdateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "DateExpiry", value: request.dateExpiry, schema: s.optional(s.dateTime()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.int()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => sessionEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1Session {
  export type CreateSessionRequest = {
    /** The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource. */
    serviceSid: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191
     * characters or fewer in length and be unique. **This value should not have PII.**
     */
    uniqueName?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire.
     * If this is value is present, it overrides the `ttl` value.
     */
    dateExpiry?: Date;
    /**
     * The time, in seconds, when the session will expire. The time is measured from the last
     * Session create or the Session's last Interaction.
     */
    ttl?: number;
    /** The Mode of the Session. Can be: `message-only`, `voice-only`, or `voice-and-message`. */
    mode?: SessionEnumMode;
    /**
     * The status of the Session. Can be: `open`, `in-progress`, `closed`, `failed`, or `unknown`.
     */
    status?: SessionEnumStatus;
    /** The Participant objects to include in the new session. */
    participants?: Record<string, unknown>[];
  };

  export type DeleteSessionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to delete.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Session resource to delete. */
    sid: string;
  };

  export type FetchSessionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to fetch.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Session resource to fetch. */
    sid: string;
  };

  export type ListSessionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to read.
     */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSessionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to update.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Session resource to update. */
    sid: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire.
     * If this is value is present, it overrides the `ttl` value.
     */
    dateExpiry?: Date;
    /**
     * The time, in seconds, when the session will expire. The time is measured from the last
     * Session create or the Session's last Interaction.
     */
    ttl?: number;
    /**
     * The status of the Session. Can be: `open`, `in-progress`, `closed`, `failed`, or `unknown`.
     */
    status?: SessionEnumStatus;
  };
}
