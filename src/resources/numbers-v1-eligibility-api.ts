import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { numbersV1EligibilitySchema, type NumbersV1Eligibility } from "../models/numbers-v1-eligibility.js";
import type { Servers } from "../servers.js";

export class NumbersV1EligibilityApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEligibility(
    request: NumbersV1EligibilityApi.CreateEligibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1Eligibility, ResponseError> {
    return this.#rawClient.execute<NumbersV1Eligibility, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v1/HostedNumber/Eligibility"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1EligibilitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1EligibilityApi {
  export type CreateEligibilityRequest = {
    body?: Record<string, unknown>;
  };
}
