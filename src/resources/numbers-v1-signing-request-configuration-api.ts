import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSigningRequestConfigurationResponseSchema,
  type ListSigningRequestConfigurationResponse,
} from "../models/list-signing-request-configuration-response.js";
import {
  numbersV1SigningRequestConfigurationSchema,
  type NumbersV1SigningRequestConfiguration,
} from "../models/numbers-v1-signing-request-configuration.js";
import type { Servers } from "../servers.js";

export class NumbersV1SigningRequestConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSigningRequestConfiguration(
    request: NumbersV1SigningRequestConfigurationApi.CreateSigningRequestConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1SigningRequestConfiguration, ResponseError> {
    return this.#rawClient.execute<NumbersV1SigningRequestConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v1/SigningRequest/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1SigningRequestConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSigningRequestConfiguration(
    request: NumbersV1SigningRequestConfigurationApi.ListSigningRequestConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSigningRequestConfigurationResponse, ResponseError> {
    return this.#rawClient.execute<ListSigningRequestConfigurationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/SigningRequest/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Country", value: request.country, schema: s.optional(s.string()) },
          { name: "Product", value: request.product, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSigningRequestConfigurationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1SigningRequestConfigurationApi {
  export type CreateSigningRequestConfigurationRequest = {
    body?: Record<string, unknown>;
  };

  export type ListSigningRequestConfigurationRequest = {
    country?: string;
    product?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
