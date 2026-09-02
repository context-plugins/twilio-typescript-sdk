import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  numbersV1BulkEligibilitySchema,
  type NumbersV1BulkEligibility,
} from "../models/numbers-v1-bulk-eligibility.js";
import type { Servers } from "../servers.js";

export class NumbersV1BulkEligibilityApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createBulkEligibility(
    request: NumbersV1BulkEligibilityApi.CreateBulkEligibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1BulkEligibility, ResponseError> {
    return this.#rawClient.execute<NumbersV1BulkEligibility, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v1/HostedNumber/Eligibility/Bulk"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1BulkEligibilitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchBulkEligibility(
    request: NumbersV1BulkEligibilityApi.FetchBulkEligibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1BulkEligibility, ResponseError> {
    return this.#rawClient.execute<NumbersV1BulkEligibility, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/HostedNumber/Eligibility/Bulk/{RequestId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RequestId", value: request.requestId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1BulkEligibilitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1BulkEligibilityApi {
  export type CreateBulkEligibilityRequest = {
    body?: Record<string, unknown>;
  };

  export type FetchBulkEligibilityRequest = {
    requestId: string;
  };
}
