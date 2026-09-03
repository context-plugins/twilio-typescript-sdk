import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSipAuthRegistrationsCredentialListMappingResponseSchema,
  type ListSipAuthRegistrationsCredentialListMappingResponse,
} from "../models/list-sip-auth-registrations-credential-list-mapping-response.js";
import {
  sipAuthRegistrationsCredentialListMappingSchema,
  type SipAuthRegistrationsCredentialListMapping,
} from "../models/sip-auth-registrations-credential-list-mapping.js";
import type { Servers } from "../servers.js";

export class Api20100401AuthRegistrationsCredentialListMapping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipAuthRegistrationsCredentialListMapping(
    request: Api20100401AuthRegistrationsCredentialListMapping.CreateSipAuthRegistrationsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthRegistrationsCredentialListMapping, ResponseError> {
    return this.#rawClient.execute<SipAuthRegistrationsCredentialListMapping, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json",
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
        success: { kind: "json", schema: sipAuthRegistrationsCredentialListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipAuthRegistrationsCredentialListMapping(
    request: Api20100401AuthRegistrationsCredentialListMapping.DeleteSipAuthRegistrationsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json",
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

  fetchSipAuthRegistrationsCredentialListMapping(
    request: Api20100401AuthRegistrationsCredentialListMapping.FetchSipAuthRegistrationsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthRegistrationsCredentialListMapping, ResponseError> {
    return this.#rawClient.execute<SipAuthRegistrationsCredentialListMapping, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json",
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
        success: { kind: "json", schema: sipAuthRegistrationsCredentialListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipAuthRegistrationsCredentialListMapping(
    request: Api20100401AuthRegistrationsCredentialListMapping.ListSipAuthRegistrationsCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipAuthRegistrationsCredentialListMappingResponse, ResponseError> {
    return this.#rawClient.execute<ListSipAuthRegistrationsCredentialListMappingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json",
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
        success: { kind: "json", schema: listSipAuthRegistrationsCredentialListMappingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthRegistrationsCredentialListMapping {
  export type CreateSipAuthRegistrationsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    credentialListSid: string;
  };

  export type DeleteSipAuthRegistrationsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type FetchSipAuthRegistrationsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type ListSipAuthRegistrationsCredentialListMappingRequest = {
    accountSid: string;
    domainSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
