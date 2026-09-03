import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createRateLimit(
    request: VerifyV2RateLimit.CreateRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimit, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteRateLimit(
    request: VerifyV2RateLimit.DeleteRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
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

  fetchRateLimit(
    request: VerifyV2RateLimit.FetchRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimit, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRateLimit(
    request: VerifyV2RateLimit.ListRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRateLimitResponse, ResponseError> {
    return this.#rawClient.execute<ListRateLimitResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits"),
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
        success: { kind: "json", schema: listRateLimitResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRateLimit(
    request: VerifyV2RateLimit.UpdateRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceRateLimit, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceRateLimit, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/RateLimits/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Description", value: request.description, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceRateLimitSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2RateLimit {
  export type CreateRateLimitRequest = {
    serviceSid: string;
    uniqueName: string;
    description?: string;
  };

  export type DeleteRateLimitRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchRateLimitRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListRateLimitRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateRateLimitRequest = {
    serviceSid: string;
    sid: string;
    description?: string;
  };
}
