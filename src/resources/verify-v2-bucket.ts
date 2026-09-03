import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBucket(
    request: VerifyV2Bucket.CreateBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimitBucket, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Max", value: request.max, schema: s.number() },
            { name: "Interval", value: request.interval, schema: s.number() },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBucket(
    request: VerifyV2Bucket.DeleteBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
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

  fetchBucket(
    request: VerifyV2Bucket.FetchBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimitBucket, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBucket(
    request: VerifyV2Bucket.ListBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBucketResponse, ResponseError> {
    return this.#rawClient.execute<ListBucketResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBucketResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBucket(
    request: VerifyV2Bucket.UpdateBucketRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimitBucket, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "RateLimitSid", value: request.rateLimitSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Max", value: request.max, schema: s.optional(s.number()) },
            { name: "Interval", value: request.interval, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitBucketSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Bucket {
  export type CreateBucketRequest = {
    serviceSid: string;
    rateLimitSid: string;
    max: number;
    interval: number;
  };

  export type DeleteBucketRequest = {
    serviceSid: string;
    rateLimitSid: string;
    sid: string;
  };

  export type FetchBucketRequest = {
    serviceSid: string;
    rateLimitSid: string;
    sid: string;
  };

  export type ListBucketRequest = {
    serviceSid: string;
    rateLimitSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateBucketRequest = {
    serviceSid: string;
    rateLimitSid: string;
    sid: string;
    max?: number;
    interval?: number;
  };
}
