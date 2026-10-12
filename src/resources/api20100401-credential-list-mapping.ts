import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a CredentialListMapping resource for an account.
   *
   * @remarks
   * Create a CredentialListMapping resource for an account.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipCredentialListMapping(
    request: Api20100401CredentialListMapping.CreateSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
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
          value: [{ name: "CredentialListSid", value: request.credentialListSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipCredentialListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a CredentialListMapping resource from an account.
   *
   * @remarks
   * Delete a CredentialListMapping resource from an account.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipCredentialListMapping(
    request: Api20100401CredentialListMapping.DeleteSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
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
   * Fetch a single CredentialListMapping resource from an account.
   *
   * @remarks
   * Fetch a single CredentialListMapping resource from an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipCredentialListMapping(
    request: Api20100401CredentialListMapping.FetchSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
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
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSipCredentialListMappingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Read multiple CredentialListMapping resources from an account.
   *
   * @remarks
   * Read multiple CredentialListMapping resources from an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipCredentialListMapping(
    request: Api20100401CredentialListMapping.ListSipCredentialListMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialListMappingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
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
        success: { kind: "json", schema: listSipCredentialListMappingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401CredentialListMapping {
  export type CreateSipCredentialListMappingRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain for which the CredentialList
     * resource will be mapped.
     */
    domainSid: string;
    /**
     * A 34 character string that uniquely identifies the CredentialList resource to map to the SIP
     * domain.
     */
    credentialListSid: string;
  };

  export type DeleteSipCredentialListMappingRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain that includes the resource to
     * delete.
     */
    domainSid: string;
    /** A 34 character string that uniquely identifies the resource to delete. */
    sid: string;
  };

  export type FetchSipCredentialListMappingRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain that includes the resource to
     * fetch.
     */
    domainSid: string;
    /** A 34 character string that uniquely identifies the resource to fetch. */
    sid: string;
  };

  export type ListSipCredentialListMappingRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain that includes the resource to
     * read.
     */
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
