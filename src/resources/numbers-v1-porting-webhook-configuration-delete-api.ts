import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError } from "../core/index.js";
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

  deletePortingWebhookConfigurationDelete(
    request: NumbersV1PortingWebhookConfigurationDeleteApi.DeletePortingWebhookConfigurationDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v1/Porting/Configuration/Webhook/{WebhookType}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          {
            name: "WebhookType",
            value: request.webhookType,
            schema: portingWebhookConfigurationDeleteEnumWebhookTypeSchema,
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingWebhookConfigurationDeleteApi {
  export type DeletePortingWebhookConfigurationDeleteRequest = {
    webhookType: PortingWebhookConfigurationDeleteEnumWebhookType;
  };
}
