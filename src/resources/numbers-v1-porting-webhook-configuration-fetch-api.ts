import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Allows to fetch the webhook configuration
   *
   * @remarks
   * Allows to fetch the webhook configuration
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPortingWebhookConfigurationFetch(
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingWebhookConfigurationFetch, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/Porting/Configuration/Webhook"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingWebhookConfigurationFetchSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
