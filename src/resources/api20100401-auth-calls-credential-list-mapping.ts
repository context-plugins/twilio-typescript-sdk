import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema,
  type ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping,
} from "../models/api-v2010-account-sip-sip-domain-sip-auth-sip-auth-calls-sip-auth-calls-credential-list-mapping.js";
import {
  listSipAuthCallsCredentialListMappingResponseSchema,
  type ListSipAuthCallsCredentialListMappingResponse,
} from "../models/list-sip-auth-calls-credential-list-mapping-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AuthCallsCredentialListMapping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipAuthCallsCredentialListMapping(
    request: Api20100401AuthCallsCredentialListMapping.CreateSipAuthCallsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping,
    ResponseError
  > {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json",
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
        success: {
          kind: "json",
          schema: apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipAuthCallsCredentialListMapping(
    request: Api20100401AuthCallsCredentialListMapping.DeleteSipAuthCallsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json",
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

  fetchSipAuthCallsCredentialListMapping(
    request: Api20100401AuthCallsCredentialListMapping.FetchSipAuthCallsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping,
    ResponseError
  > {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json",
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
        success: {
          kind: "json",
          schema: apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipAuthCallsCredentialListMapping(
    request: Api20100401AuthCallsCredentialListMapping.ListSipAuthCallsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipAuthCallsCredentialListMappingResponse, ResponseError> {
    return this.#rawClient.execute<ListSipAuthCallsCredentialListMappingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json",
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
        success: { kind: "json", schema: listSipAuthCallsCredentialListMappingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthCallsCredentialListMapping {
  export type CreateSipAuthCallsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    credentialListSid: string;
  };

  export type DeleteSipAuthCallsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type FetchSipAuthCallsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type ListSipAuthCallsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
