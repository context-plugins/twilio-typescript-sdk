import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  messagingV2DomainCertV4Schema,
  type MessagingV2DomainCertV4,
} from "../models/messaging-v2-domain-cert-v4.js";
import type { Servers } from "../servers.js";

export class MessagingV2DomainCerts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchDomainCertV42(
    request: MessagingV2DomainCerts.FetchDomainCertV42Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2DomainCertV4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v2/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV2DomainCertV4Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV2DomainCerts {
  export type FetchDomainCertV42Request = {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
  };
}
