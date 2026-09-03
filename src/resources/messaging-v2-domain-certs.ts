import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<MessagingV2DomainCertV4, ResponseError> {
    return this.#rawClient.execute<MessagingV2DomainCertV4, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v2/LinkShortening/Domains/{DomainSid}/Certificate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV2DomainCertV4Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV2DomainCerts {
  export type FetchDomainCertV42Request = {
    domainSid: string;
  };
}
