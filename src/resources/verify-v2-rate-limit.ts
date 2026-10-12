import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listRateLimitResponseSchema,
  type ListRateLimitResponse,
} from "../models/list-rate-limit-response.js";
import {
  verifyV2ServiceRateLimitSchema,
  type VerifyV2ServiceRateLimit,
} from "../models/verify-v2-service-rate-limit.js";
import type { Servers } from "../servers.js";

export class VerifyV2RateLimit {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Rate Limit for a Service
   *
   * @remarks
   * Create a new Rate Limit for a Service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRateLimit(
    request: VerifyV2RateLimit.CreateRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.string() },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Rate Limit.
   *
   * @remarks
   * Delete a specific Rate Limit.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRateLimit(
    request: VerifyV2RateLimit.DeleteRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
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
   * Fetch a specific Rate Limit.
   *
   * @remarks
   * Fetch a specific Rate Limit.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRateLimit(
    request: VerifyV2RateLimit.FetchRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
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
        success: { kind: "json", schema: verifyV2ServiceRateLimitSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Rate Limits for a service.
   *
   * @remarks
   * Retrieve a list of all Rate Limits for a service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRateLimit(
    request: VerifyV2RateLimit.ListRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRateLimitResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits"),
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
        success: { kind: "json", schema: listRateLimitResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Rate Limit.
   *
   * @remarks
   * Update a specific Rate Limit.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRateLimit(
    request: VerifyV2RateLimit.UpdateRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Description", value: request.description, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2RateLimit {
  export type CreateRateLimitRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the
     * developer, to be optionally used in addition to SID. **This value should not contain PII.**
     */
    uniqueName: string;
    /** Description of this Rate Limit */
    description?: string;
  };

  export type DeleteRateLimitRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
    sid: string;
  };

  export type FetchRateLimitRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
    sid: string;
  };

  export type ListRateLimitRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
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

  export type UpdateRateLimitRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
    sid: string;
    /** Description of this Rate Limit */
    description?: string;
  };
}
