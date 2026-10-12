import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listBucketResponseSchema, type ListBucketResponse } from "../models/list-bucket-response.js";
import {
  verifyV2ServiceRateLimitBucketSchema,
  type VerifyV2ServiceRateLimitBucket,
} from "../models/verify-v2-service-rate-limit-bucket.js";
import type { Servers } from "../servers.js";

export class VerifyV2Bucket {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Bucket for a Rate Limit
   *
   * @remarks
   * Create a new Bucket for a Rate Limit
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBucket(
    request: VerifyV2Bucket.CreateBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Max", value: request.max, schema: s.int() },
            { name: "Interval", value: request.interval, schema: s.int() },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Bucket.
   *
   * @remarks
   * Delete a specific Bucket.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBucket(
    request: VerifyV2Bucket.DeleteBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3(
          "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
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
   * Fetch a specific Bucket.
   *
   * @remarks
   * Fetch a specific Bucket.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBucket(
    request: VerifyV2Bucket.FetchBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3(
          "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Buckets for a Rate Limit.
   *
   * @remarks
   * Retrieve a list of all Buckets for a Rate Limit.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBucket(
    request: VerifyV2Bucket.ListBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBucketResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
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
        success: { kind: "json", schema: listBucketResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Bucket.
   *
   * @remarks
   * Update a specific Bucket.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBucket(
    request: VerifyV2Bucket.UpdateBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3(
          "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Max", value: request.max, schema: s.optional(s.int()) },
            { name: "Interval", value: request.interval, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Bucket {
  export type CreateBucketRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
    rateLimitSid: string;
    /** Maximum number of requests permitted in during the interval. */
    max: number;
    /** Number of seconds that the rate limit will be enforced over. */
    interval: number;
  };

  export type DeleteBucketRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
    rateLimitSid: string;
    /** A 34 character string that uniquely identifies this Bucket. */
    sid: string;
  };

  export type FetchBucketRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
    rateLimitSid: string;
    /** A 34 character string that uniquely identifies this Bucket. */
    sid: string;
  };

  export type ListBucketRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
    rateLimitSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateBucketRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
     * associated with.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
    rateLimitSid: string;
    /** A 34 character string that uniquely identifies this Bucket. */
    sid: string;
    /** Maximum number of requests permitted in during the interval. */
    max?: number;
    /** Number of seconds that the rate limit will be enforced over. */
    interval?: number;
  };
}
