import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createPortingWebhookConfiguration(
    request: NumbersV1PortingWebhookConfigurationApi.CreatePortingWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingWebhookConfiguration, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingWebhookConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v1/Porting/Configuration/Webhook"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV1PortingWebhookConfigurationSchema },
        errorFactory: ResponseError,
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
