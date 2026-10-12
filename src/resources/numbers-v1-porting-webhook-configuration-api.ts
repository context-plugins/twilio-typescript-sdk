import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  numbersV1PortingWebhookConfigurationSchema,
  type NumbersV1PortingWebhookConfiguration,
} from "../models/numbers-v1-porting-webhook-configuration.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingWebhookConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Webhook Configuration
   *
   * @remarks
   * Create a Webhook Configuration
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPortingWebhookConfiguration(
    request: NumbersV1PortingWebhookConfigurationApi.CreatePortingWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingWebhookConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v1/Porting/Configuration/Webhook"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1PortingWebhookConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingWebhookConfigurationApi {
  export type CreatePortingWebhookConfigurationRequest = {
    body?: Record<string, unknown>;
  };
}
