import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a bulk eligibility check for a set of numbers that you want to host in Twilio.
   *
   * @remarks
   * Create a bulk eligibility check for a set of numbers that you want to host in Twilio.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkEligibility(
    request: NumbersV1BulkEligibilityApi.CreateBulkEligibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1BulkEligibility, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v1/HostedNumber/Eligibility/Bulk"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1BulkEligibilitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch an eligibility bulk check that you requested to host in Twilio.
   *
   * @remarks
   * Fetch an eligibility bulk check that you requested to host in Twilio.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBulkEligibility(
    request: NumbersV1BulkEligibilityApi.FetchBulkEligibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1BulkEligibility, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/HostedNumber/Eligibility/Bulk/{RequestId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RequestId", value: request.requestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1BulkEligibilitySchema },
        errorFactory: ApiError,
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
    /** The SID of the bulk eligibility check that you want to know about. */
    requestId: string;
  };
}
