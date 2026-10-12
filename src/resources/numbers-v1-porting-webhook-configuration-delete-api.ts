import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  portingWebhookConfigurationDeleteEnumWebhookTypeSchema,
  type PortingWebhookConfigurationDeleteEnumWebhookType,
} from "../models/porting-webhook-configuration-delete-enum-webhook-type.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingWebhookConfigurationDeleteApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Allows the client to delete a webhook configuration.
   *
   * @remarks
   * Allows the client to delete a webhook configuration.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePortingWebhookConfigurationDelete(
    request: NumbersV1PortingWebhookConfigurationDeleteApi.DeletePortingWebhookConfigurationDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v1/Porting/Configuration/Webhook/{WebhookType}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          {
            name: "WebhookType",
            value: request.webhookType,
            schema: portingWebhookConfigurationDeleteEnumWebhookTypeSchema,
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingWebhookConfigurationDeleteApi {
  export type DeletePortingWebhookConfigurationDeleteRequest = {
    /** The webhook type for the configuration to be delete. `PORT_IN`, `PORT_OUT` */
    webhookType: PortingWebhookConfigurationDeleteEnumWebhookType;
  };
}
