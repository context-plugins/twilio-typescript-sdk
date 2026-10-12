import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accountEnumStatusSchema, type AccountEnumStatus } from "../models/account-enum-status.js";
import { apiV2010AccountSchema, type ApiV2010Account } from "../models/api-v2010-account.js";
import { listAccountResponseSchema, type ListAccountResponse } from "../models/list-account-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Twilio Subaccount from the account making the request
   *
   * @remarks
   * Create a new Twilio Subaccount from the account making the request
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAccount(
    request: Api20100401Account.CreateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the account specified by the provided Account Sid
   *
   * @remarks
   * Fetch the account specified by the provided Account Sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAccount(
    request: Api20100401Account.FetchAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieves a collection of Accounts belonging to the account used to make the request
   *
   * @remarks
   * Retrieves a collection of Accounts belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccount(
    request: Api20100401Account.ListAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => accountEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify the properties of a given Account
   *
   * @remarks
   * Modify the properties of a given Account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAccount(
    request: Api20100401Account.UpdateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010Account, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => accountEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Account {
  export type CreateAccountRequest = {
    /**
     * A human readable description of the account to create, defaults to `SubAccount Created at
     * {YYYY-MM-DD HH:MM meridian}`
     */
    friendlyName?: string;
  };

  export type FetchAccountRequest = {
    /** The Account Sid that uniquely identifies the account to fetch */
    sid: string;
  };

  export type ListAccountRequest = {
    /** Only return the Account resources with friendly names that exactly match this name. */
    friendlyName?: string;
    /**
     * Only return Account resources with the given status. Can be `closed`, `suspended` or
     * `active`.
     */
    status?: AccountEnumStatus;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateAccountRequest = {
    /** The Account Sid that uniquely identifies the account to update */
    sid: string;
    /** Update the human-readable description of this Account */
    friendlyName?: string;
    /** The status of this account. Usually `active`, but can be `suspended` or `closed`. */
    status?: AccountEnumStatus;
  };
}
