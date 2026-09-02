import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<MessagingV1DomainConfig, ResponseError> {
    return this.#rawClient.execute<MessagingV1DomainConfig, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Config"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1DomainConfigSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateDomainConfig(
    request: MessagingV1DomainConfigApi.UpdateDomainConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1DomainConfig, ResponseError> {
    return this.#rawClient.execute<MessagingV1DomainConfig, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/LinkShortening/Domains/{DomainSid}/Config"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "DomainSid", value: request.domainSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1DomainConfigApi {
  export type FetchDomainConfigRequest = {
    domainSid: string;
  };

  export type UpdateDomainConfigRequest = {
    domainSid: string;
    fallbackUrl?: string;
    callbackUrl?: string;
    continueOnFailure?: boolean;
    disableHttps?: boolean;
  };
}
