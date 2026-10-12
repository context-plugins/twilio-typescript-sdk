import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipCredentialListSchema,
  type ApiV2010AccountSipSipCredentialList,
} from "../models/api-v2010-account-sip-sip-credential-list.js";
import {
  listSipCredentialListResponseSchema,
  type ListSipCredentialListResponse,
} from "../models/list-sip-credential-list-response.js";
import type { Servers } from "../servers.js";

export class Api20100401CredentialList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Credential List
   *
   * @remarks
   * Create a Credential List
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipCredentialList(
    request: Api20100401CredentialList.CreateSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Credential List
   *
   * @remarks
   * Delete a Credential List
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipCredentialList(
    request: Api20100401CredentialList.DeleteSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Get a Credential List
   *
   * @remarks
   * Get a Credential List
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipCredentialList(
    request: Api20100401CredentialList.FetchSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get All Credential Lists
   *
   * @remarks
   * Get All Credential Lists
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipCredentialList(
    request: Api20100401CredentialList.ListSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipCredentialListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Credential List
   *
   * @remarks
   * Update a Credential List
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipCredentialList(
    request: Api20100401CredentialList.UpdateSipCredentialListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401CredentialList {
  export type CreateSipCredentialListRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /**
     * A human readable descriptive text that describes the CredentialList, up to 64 characters
     * long.
     */
    friendlyName: string;
  };

  export type DeleteSipCredentialListRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The credential list Sid that uniquely identifies this resource */
    sid: string;
  };

  export type FetchSipCredentialListRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The credential list Sid that uniquely identifies this resource */
    sid: string;
  };

  export type ListSipCredentialListRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSipCredentialListRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The credential list Sid that uniquely identifies this resource */
    sid: string;
    /** A human readable descriptive text for a CredentialList, up to 64 characters long. */
    friendlyName: string;
  };
}
