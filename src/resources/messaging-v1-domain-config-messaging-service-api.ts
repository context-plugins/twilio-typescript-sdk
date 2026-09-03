import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1DomainConfigMessagingServiceSchema,
  type MessagingV1DomainConfigMessagingService,
} from "../models/messaging-v1-domain-config-messaging-service.js";
import type { Servers } from "../servers.js";

export class MessagingV1DomainConfigMessagingServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchDomainConfigMessagingService(
    request: MessagingV1DomainConfigMessagingServiceApi.FetchDomainConfigMessagingServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainConfigMessagingService, ResponseError> {
    return this.#rawClient.execute<MessagingV1DomainConfigMessagingService, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainConfigMessagingServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainConfigMessagingServiceApi {
  export type FetchDomainConfigMessagingServiceRequest = {
    messagingServiceSid: string;
  };
}
