import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  messagingV1RequestManagedCertSchema,
  type MessagingV1RequestManagedCert,
} from "../models/messaging-v1-request-managed-cert.js";
import type { Servers } from "../servers.js";

export class MessagingV1RequestManagedCertApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updateRequestManagedCert(
    request: MessagingV1RequestManagedCertApi.UpdateRequestManagedCertRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1RequestManagedCert, ResponseError> {
    return this.#rawClient.execute<MessagingV1RequestManagedCert, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1RequestManagedCertSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1RequestManagedCertApi {
  export type UpdateRequestManagedCertRequest = {
    domainSid: string;
  };
}
