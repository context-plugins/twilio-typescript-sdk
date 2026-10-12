import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipCredentialListSipCredentialSchema,
  type ApiV2010AccountSipSipCredentialListSipCredential,
} from "../models/api-v2010-account-sip-sip-credential-list-sip-credential.js";
import {
  listSipCredentialResponseSchema,
  type ListSipCredentialResponse,
} from "../models/list-sip-credential-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Credential {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new credential resource.
   *
   * @remarks
   * Create a new credential resource.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipCredential(
    request: Api20100401Credential.CreateSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Username", value: request.username, schema: s.string() },
            { name: "Password", value: request.password, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a credential resource.
   *
   * @remarks
   * Delete a credential resource.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipCredential(
    request: Api20100401Credential.DeleteSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
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
   * Fetch a single credential.
   *
   * @remarks
   * Fetch a single credential.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipCredential(
    request: Api20100401Credential.FetchSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of credentials.
   *
   * @remarks
   * Retrieve a list of credentials.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipCredential(
    request: Api20100401Credential.ListSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
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
        success: { kind: "json", schema: listSipCredentialResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a credential resource.
   *
   * @remarks
   * Update a credential resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipCredential(
    request: Api20100401Credential.UpdateSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Password", value: request.password, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Credential {
  export type CreateSipCredentialRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The unique id that identifies the credential list to include the created credential. */
    credentialListSid: string;
    /**
     * The username that will be passed when authenticating SIP requests. The username should be
     * sent in response to Twilio's challenge of the initial INVITE. It can be up to 32 characters
     * long.
     */
    username: string;
    /**
     * The password that the username will use when authenticating SIP requests. The password must
     * be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg
     * `IWasAtSignal2018`)
     */
    password: string;
  };

  export type DeleteSipCredentialRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The unique id that identifies the credential list that contains the desired credentials. */
    credentialListSid: string;
    /** The unique id that identifies the resource to delete. */
    sid: string;
  };

  export type FetchSipCredentialRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The unique id that identifies the credential list that contains the desired credential. */
    credentialListSid: string;
    /** The unique id that identifies the resource to fetch. */
    sid: string;
  };

  export type ListSipCredentialRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The unique id that identifies the credential list that contains the desired credentials. */
    credentialListSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSipCredentialRequest = {
    /** The unique id of the Account that is responsible for this resource. */
    accountSid: string;
    /** The unique id that identifies the credential list that includes this credential. */
    credentialListSid: string;
    /** The unique id that identifies the resource to update. */
    sid: string;
    /**
     * The password that the username will use when authenticating SIP requests. The password must
     * be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg
     * `IWasAtSignal2018`)
     */
    password?: string;
  };
}
