import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Synchronous operation to insert or update a configuration for the customer.
   *
   * @remarks
   * Synchronous operation to insert or update a configuration for the customer.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSigningRequestConfiguration(
    request: NumbersV1SigningRequestConfigurationApi.CreateSigningRequestConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1SigningRequestConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v1/SigningRequest/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1SigningRequestConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Synchronous operation to retrieve configurations for the customer.
   *
   * @remarks
   * Synchronous operation to retrieve configurations for the customer.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSigningRequestConfiguration(
    request: NumbersV1SigningRequestConfigurationApi.ListSigningRequestConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSigningRequestConfigurationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/SigningRequest/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Country", value: request.country, schema: s.optional(s.string()) },
          { name: "Product", value: request.product, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSigningRequestConfigurationResponseSchema },
        errorFactory: ApiError,
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
    /**
     * The country ISO code to apply this configuration, this is an optional field, Example: US, MX
     */
    country?: string;
    /**
     * The product or service for which is requesting the signature, this is an optional field,
     * Example: Porting, Hosting
     */
    product?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
