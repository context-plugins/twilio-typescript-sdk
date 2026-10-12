import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1LinkshorteningMessagingServiceDomainAssociationSchema,
  type MessagingV1LinkshorteningMessagingServiceDomainAssociation,
} from "../models/messaging-v1-linkshortening-messaging-service-domain-association.js";
import type { Servers } from "../servers.js";

export class MessagingV1LinkshorteningMessagingServiceDomainAssociationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchLinkshorteningMessagingServiceDomainAssociation(
    request: MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.FetchLinkshorteningMessagingServiceDomainAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1LinkshorteningMessagingServiceDomainAssociation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1LinkshorteningMessagingServiceDomainAssociationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1LinkshorteningMessagingServiceDomainAssociationApi {
  export type FetchLinkshorteningMessagingServiceDomainAssociationRequest = {
    /**
     * Unique string used to identify the Messaging service that this domain should be associated
     * with.
     */
    messagingServiceSid: string;
  };
}
