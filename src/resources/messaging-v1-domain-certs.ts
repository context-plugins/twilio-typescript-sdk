import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1DomainCertV4Schema,
  type MessagingV1DomainCertV4,
} from "../models/messaging-v1-domain-cert-v4.js";
import type { Servers } from "../servers.js";

export class MessagingV1DomainCerts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteDomainCertV4(
    request: MessagingV1DomainCerts.DeleteDomainCertV4Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
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

  fetchDomainCertV4(
    request: MessagingV1DomainCerts.FetchDomainCertV4Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainCertV4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainCertV4Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateDomainCertV4(
    request: MessagingV1DomainCerts.UpdateDomainCertV4Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainCertV4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "TlsCert", value: request.tlsCert, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1DomainCertV4Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainCerts {
  export type DeleteDomainCertV4Request = {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
  };

  export type FetchDomainCertV4Request = {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
  };

  export type UpdateDomainCertV4Request = {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
    /**
     * Contains the full TLS certificate and private for this domain in PEM format:
     * https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail. Twilio uses this information to process
     * HTTPS traffic sent to your domain.
     */
    tlsCert: string;
  };
}
