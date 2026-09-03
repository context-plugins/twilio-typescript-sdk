import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<MessagingV1LinkshorteningMessagingServiceDomainAssociation, ResponseError> {
    return this.#rawClient.execute<MessagingV1LinkshorteningMessagingServiceDomainAssociation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1LinkshorteningMessagingServiceDomainAssociationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1LinkshorteningMessagingServiceDomainAssociationApi {
  export type FetchLinkshorteningMessagingServiceDomainAssociationRequest = {
    messagingServiceSid: string;
  };
}
