import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1DomainConfigSchema,
  type MessagingV1DomainConfig,
} from "../models/messaging-v1-domain-config.js";
import type { Servers } from "../servers.js";

export class MessagingV1DomainConfigApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchDomainConfig(
    request: MessagingV1DomainConfigApi.FetchDomainConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainConfig, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Config"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainConfigSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateDomainConfig(
    request: MessagingV1DomainConfigApi.UpdateDomainConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainConfig, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Config"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            { name: "ContinueOnFailure", value: request.continueOnFailure, schema: s.optional(s.boolean()) },
            { name: "DisableHttps", value: request.disableHttps, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1DomainConfigSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainConfigApi {
  export type FetchDomainConfigRequest = {
    /** Unique string used to identify the domain that this config should be associated with. */
    domainSid: string;
  };

  export type UpdateDomainConfigRequest = {
    /** Unique string used to identify the domain that this config should be associated with. */
    domainSid: string;
    /**
     * Any requests we receive to this domain that do not match an existing shortened message will
     * be redirected to the fallback url. These will likely be either expired messages, random
     * misdirected traffic, or intentional scraping.
     */
    fallbackUrl?: string;
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened
     * links
     */
    callbackUrl?: string;
    /**
     * Boolean field to set customer delivery preference when there is a failure in linkShortening
     * service
     */
    continueOnFailure?: boolean;
    /**
     * Customer's choice to send links with/without "https://" attached to shortened url. If true,
     * messages will not be sent with https:// at the beginning of the url. If false, messages will
     * be sent with https:// at the beginning of the url. False is the default behavior if it is not
     * specified.
     */
    disableHttps?: boolean;
  };
}
