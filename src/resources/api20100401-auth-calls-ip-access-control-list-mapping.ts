import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new IP Access Control List mapping
   *
   * @remarks
   * Create a new IP Access Control List mapping
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.CreateSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthCallsIpAccessControlListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json",
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
        success: { kind: "json", schema: sipAuthCallsIpAccessControlListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an IP Access Control List mapping from the requested domain
   *
   * @remarks
   * Delete an IP Access Control List mapping from the requested domain
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.DeleteSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json",
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
   * Fetch a specific instance of an IP Access Control List mapping
   *
   * @remarks
   * Fetch a specific instance of an IP Access Control List mapping
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.FetchSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<SipAuthCallsIpAccessControlListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json",
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
        success: { kind: "json", schema: sipAuthCallsIpAccessControlListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
   *
   * @remarks
   * Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipAuthCallsIpAccessControlListMapping(
    request: Api20100401AuthCallsIpAccessControlListMapping.ListSipAuthCallsIpAccessControlListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipAuthCallsIpAccessControlListMappingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json",
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
        success: { kind: "json", schema: listSipAuthCallsIpAccessControlListMappingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AuthCallsIpAccessControlListMapping {
  export type CreateSipAuthCallsIpAccessControlListMappingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /** The SID of the SIP domain that will contain the new resource. */
    domainSid: string;
    /** The SID of the IpAccessControlList resource to map to the SIP domain. */
    ipAccessControlListSid: string;
  };

  export type DeleteSipAuthCallsIpAccessControlListMappingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IpAccessControlListMapping resources to delete.
     */
    accountSid: string;
    /** The SID of the SIP domain that contains the resources to delete. */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource
     * to delete.
     */
    sid: string;
  };

  export type FetchSipAuthCallsIpAccessControlListMappingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IpAccessControlListMapping resource to fetch.
     */
    accountSid: string;
    /** The SID of the SIP domain that contains the resource to fetch. */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource
     * to fetch.
     */
    sid: string;
  };

  export type ListSipAuthCallsIpAccessControlListMappingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IpAccessControlListMapping resources to read.
     */
    accountSid: string;
    /** The SID of the SIP domain that contains the resources to read. */
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
