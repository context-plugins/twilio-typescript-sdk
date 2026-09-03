import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipDomainSipCredentialListMappingSchema,
  type ApiV2010AccountSipSipDomainSipCredentialListMapping,
} from "../models/api-v2010-account-sip-sip-domain-sip-credential-list-mapping.js";
import {
  listSipCredentialListMappingResponseSchema,
  type ListSipCredentialListMappingResponse,
} from "../models/list-sip-credential-list-mapping-response.js";
import type { Servers } from "../servers.js";

export class Api20100401CredentialListMapping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipCredentialListMapping(
    request: Api20100401CredentialListMapping.CreateSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "CredentialListSid", value: request.credentialListSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipCredentialListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipCredentialListMapping(
    request: Api20100401CredentialListMapping.DeleteSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchSipCredentialListMapping(
    request: Api20100401CredentialListMapping.FetchSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipCredentialListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipCredentialListMapping(
    request: Api20100401CredentialListMapping.ListSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialListMappingResponse, ResponseError> {
    return this.#rawClient.execute<ListSipCredentialListMappingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipCredentialListMappingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401CredentialListMapping {
  export type CreateSipCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    credentialListSid: string;
  };

  export type DeleteSipCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type FetchSipCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type ListSipCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
