import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchConfiguration3(
    request: FlexV1ConfigurationApi.FetchConfiguration3Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Configuration, ResponseError> {
    return this.#rawClient.execute<FlexV1Configuration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "UiVersion", value: request.uiVersion, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConfiguration3(
    request: FlexV1ConfigurationApi.UpdateConfiguration3Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Configuration, ResponseError> {
    return this.#rawClient.execute<FlexV1Configuration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1ConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1ConfigurationApi {
  export type FetchConfiguration3Request = {
    uiVersion?: string;
  };

  export type UpdateConfiguration3Request = {
    body?: Record<string, unknown>;
  };
}
