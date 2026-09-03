import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSipAuthCallsIpAccessControlListMappingResponseSchema,
  type ListSipAuthCallsIpAccessControlListMappingResponse,
} from "../models/list-sip-auth-calls-ip-access-control-list-mapping-response.js";
import {
  sipAuthCallsIpAccessControlListMappingSchema,
  type SipAuthCallsIpAccessControlListMapping,
} from "../models/sip-auth-calls-ip-access-control-list-mapping.js";
import type { Servers } from "../servers.js";

export class Api20100401AuthCallsIpAccessControlListMapping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.CreateSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthCallsIpAccessControlListMapping, ResponseError> {
    return this.#rawClient.execute<SipAuthCallsIpAccessControlListMapping, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: sipAuthCallsIpAccessControlListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.DeleteSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json",
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

  fetchSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.FetchSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthCallsIpAccessControlListMapping, ResponseError> {
    return this.#rawClient.execute<SipAuthCallsIpAccessControlListMapping, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json",
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
        success: { kind: "json", schema: sipAuthCallsIpAccessControlListMappingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.ListSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipAuthCallsIpAccessControlListMappingResponse, ResponseError> {
    return this.#rawClient.execute<ListSipAuthCallsIpAccessControlListMappingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json",
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
        success: { kind: "json", schema: listSipAuthCallsIpAccessControlListMappingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthCallsIpAccessControlListMapping {
  export type CreateSipAuthCallsIpAccessControlListMappingRequest = {
    accountSid: string;
    domainSid: string;
    ipAccessControlListSid: string;
  };

  export type DeleteSipAuthCallsIpAccessControlListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type FetchSipAuthCallsIpAccessControlListMappingRequest = {
    accountSid: string;
    domainSid: string;
    sid: string;
  };

  export type ListSipAuthCallsIpAccessControlListMappingRequest = {
    accountSid: string;
    domainSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
