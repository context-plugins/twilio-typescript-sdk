import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<MessagingV1LinkshorteningMessagingService, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1LinkshorteningMessagingServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteLinkshorteningMessagingService(
    request: MessagingV1LinkshorteningMessagingServiceApi.DeleteLinkshorteningMessagingServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1(
          "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
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

export namespace MessagingV1LinkshorteningMessagingServiceApi {
  export type CreateLinkshorteningMessagingServiceRequest = {
    /**
     * The domain SID to associate with a messaging service. With URL shortening enabled, links in
     * messages sent with the associated messaging service will be shortened to the provided domain
     */
    domainSid: string;
    /**
     * A messaging service SID to associate with a domain. With URL shortening enabled, links in
     * messages sent with the provided messaging service will be shortened to the associated domain
     */
    messagingServiceSid: string;
  };

  export type DeleteLinkshorteningMessagingServiceRequest = {
    /**
     * The domain SID to dissociate from a messaging service. With URL shortening enabled, links in
     * messages sent with the associated messaging service will be shortened to the provided domain
     */
    domainSid: string;
    /**
     * A messaging service SID to dissociate from a domain. With URL shortening enabled, links in
     * messages sent with the provided messaging service will be shortened to the associated domain
     */
    messagingServiceSid: string;
  };
}
