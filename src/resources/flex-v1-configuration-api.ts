import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flexV1ConfigurationSchema, type FlexV1Configuration } from "../models/flex-v1-configuration.js";
import type { Servers } from "../servers.js";

export class FlexV1ConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Configuration for a Flex instance
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConfiguration3(
    request: FlexV1ConfigurationApi.FetchConfiguration3Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Configuration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [{ name: "UiVersion", value: request.uiVersion, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Configuration for a Flex instance
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConfiguration3(
    request: FlexV1ConfigurationApi.UpdateConfiguration3Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Configuration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1ConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1ConfigurationApi {
  export type FetchConfiguration3Request = {
    /** The Pinned UI version of the Configuration resource to fetch. */
    uiVersion?: string;
  };

  export type UpdateConfiguration3Request = {
    body?: Record<string, unknown>;
  };
}
