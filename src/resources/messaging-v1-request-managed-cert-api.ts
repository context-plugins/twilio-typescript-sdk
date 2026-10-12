import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<MessagingV1RequestManagedCert, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1RequestManagedCertSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1RequestManagedCertApi {
  export type UpdateRequestManagedCertRequest = {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
  };
}
