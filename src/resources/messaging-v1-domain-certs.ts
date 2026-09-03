import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchDomainCertV4(
    request: MessagingV1DomainCerts.FetchDomainCertV4Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainCertV4, ResponseError> {
    return this.#rawClient.execute<MessagingV1DomainCertV4, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainCertV4Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateDomainCertV4(
    request: MessagingV1DomainCerts.UpdateDomainCertV4Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainCertV4, ResponseError> {
    return this.#rawClient.execute<MessagingV1DomainCertV4, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "TlsCert", value: request.tlsCert, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1DomainCertV4Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainCerts {
  export type DeleteDomainCertV4Request = {
    domainSid: string;
  };

  export type FetchDomainCertV4Request = {
    domainSid: string;
  };

  export type UpdateDomainCertV4Request = {
    domainSid: string;
    tlsCert: string;
  };
}
