import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  messagingV1LinkshorteningMessagingServiceSchema,
  type MessagingV1LinkshorteningMessagingService,
} from "../models/messaging-v1-linkshortening-messaging-service.js";
import type { Servers } from "../servers.js";

export class MessagingV1LinkshorteningMessagingServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createLinkshorteningMessagingService(
    request: MessagingV1LinkshorteningMessagingServiceApi.CreateLinkshorteningMessagingServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1LinkshorteningMessagingService, ResponseError> {
    return this.#rawClient.execute<MessagingV1LinkshorteningMessagingService, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1(
          "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1LinkshorteningMessagingServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteLinkshorteningMessagingService(
    request: MessagingV1LinkshorteningMessagingServiceApi.DeleteLinkshorteningMessagingServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1(
          "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
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

export namespace MessagingV1LinkshorteningMessagingServiceApi {
  export type CreateLinkshorteningMessagingServiceRequest = {
    domainSid: string;
    messagingServiceSid: string;
  };

  export type DeleteLinkshorteningMessagingServiceRequest = {
    domainSid: string;
    messagingServiceSid: string;
  };
}
