import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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
  ): ApiPromise<MessagingV1DomainConfigMessagingService, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainConfigMessagingServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainConfigMessagingServiceApi {
  export type FetchDomainConfigMessagingServiceRequest = {
    /**
     * Unique string used to identify the Messaging service that this domain should be associated
     * with.
     */
    messagingServiceSid: string;
  };
}
