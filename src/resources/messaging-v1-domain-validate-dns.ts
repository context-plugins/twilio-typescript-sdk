import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1DomainDnsValidationSchema,
  type MessagingV1DomainDnsValidation,
} from "../models/messaging-v1-domain-dns-validation.js";
import type { Servers } from "../servers.js";

export class MessagingV1DomainValidateDns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchDomainDnsValidation(
    request: MessagingV1DomainValidateDns.FetchDomainDnsValidationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainDnsValidation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/ValidateDns"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainDnsValidationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainValidateDns {
  export type FetchDomainDnsValidationRequest = {
    /** Unique string used to identify the domain. */
    domainSid: string;
  };
}
