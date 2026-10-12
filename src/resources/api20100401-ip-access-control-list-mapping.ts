import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema,
  type ApiV2010AccountSipSipDomainSipIpAccessControlListMapping,
} from "../models/api-v2010-account-sip-sip-domain-sip-ip-access-control-list-mapping.js";
import {
  listSipIpAccessControlListMappingResponseSchema,
  type ListSipIpAccessControlListMappingResponse,
} from "../models/list-sip-ip-access-control-list-mapping-response.js";
import type { Servers } from "../servers.js";

export class Api20100401IpAccessControlListMapping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new IpAccessControlListMapping resource.
   *
   * @remarks
   * Create a new IpAccessControlListMapping resource.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipIpAccessControlListMapping(
    request: Api20100401IpAccessControlListMapping.CreateSipIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an IpAccessControlListMapping resource.
   *
   * @remarks
   * Delete an IpAccessControlListMapping resource.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipIpAccessControlListMapping(
    request: Api20100401IpAccessControlListMapping.DeleteSipIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch an IpAccessControlListMapping resource.
   *
   * @remarks
   * Fetch an IpAccessControlListMapping resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipIpAccessControlListMapping(
    request: Api20100401IpAccessControlListMapping.FetchSipIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of IpAccessControlListMapping resources.
   *
   * @remarks
   * Retrieve a list of IpAccessControlListMapping resources.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipIpAccessControlListMapping(
    request: Api20100401IpAccessControlListMapping.ListSipIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipIpAccessControlListMappingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "DomainSid", value: request.domainSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipIpAccessControlListMappingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401IpAccessControlListMapping {
  export type CreateSipIpAccessControlListMappingRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** A 34 character string that uniquely identifies the SIP domain. */
    domainSid: string;
    /** The unique id of the IP access control list to map to the SIP domain. */
    ipAccessControlListSid: string;
  };

  export type DeleteSipIpAccessControlListMappingRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** A 34 character string that uniquely identifies the SIP domain. */
    domainSid: string;
    /** A 34 character string that uniquely identifies the resource to delete. */
    sid: string;
  };

  export type FetchSipIpAccessControlListMappingRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** A 34 character string that uniquely identifies the SIP domain. */
    domainSid: string;
    /** A 34 character string that uniquely identifies the resource to fetch. */
    sid: string;
  };

  export type ListSipIpAccessControlListMappingRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** A 34 character string that uniquely identifies the SIP domain. */
    domainSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
