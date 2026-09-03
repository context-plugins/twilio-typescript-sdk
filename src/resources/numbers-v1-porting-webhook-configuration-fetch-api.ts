import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import {
  numbersV1PortingWebhookConfigurationFetchSchema,
  type NumbersV1PortingWebhookConfigurationFetch,
} from "../models/numbers-v1-porting-webhook-configuration-fetch.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingWebhookConfigurationFetchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchPortingWebhookConfigurationFetch(
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingWebhookConfigurationFetch, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingWebhookConfigurationFetch, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/Porting/Configuration/Webhook"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingWebhookConfigurationFetchSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
