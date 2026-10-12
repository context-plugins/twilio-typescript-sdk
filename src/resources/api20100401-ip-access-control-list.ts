import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipIpAccessControlListSchema,
  type ApiV2010AccountSipSipIpAccessControlList,
} from "../models/api-v2010-account-sip-sip-ip-access-control-list.js";
import {
  listSipIpAccessControlListResponseSchema,
  type ListSipIpAccessControlListResponse,
} from "../models/list-sip-ip-access-control-list-response.js";
import type { Servers } from "../servers.js";

export class Api20100401IpAccessControlList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new IpAccessControlList resource
   *
   * @remarks
   * Create a new IpAccessControlList resource
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipIpAccessControlList(
    request: Api20100401IpAccessControlList.CreateSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json"),
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
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an IpAccessControlList from the requested account
   *
   * @remarks
   * Delete an IpAccessControlList from the requested account
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipIpAccessControlList(
    request: Api20100401IpAccessControlList.DeleteSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
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
   * Fetch a specific instance of an IpAccessControlList
   *
   * @remarks
   * Fetch a specific instance of an IpAccessControlList
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipIpAccessControlList(
    request: Api20100401IpAccessControlList.FetchSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
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
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of IpAccessControlLists that belong to the account used to make the request
   *
   * @remarks
   * Retrieve a list of IpAccessControlLists that belong to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipIpAccessControlList(
    request: Api20100401IpAccessControlList.ListSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipIpAccessControlListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json"),
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
        success: { kind: "json", schema: listSipIpAccessControlListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Rename an IpAccessControlList
   *
   * @remarks
   * Rename an IpAccessControlList
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipIpAccessControlList(
    request: Api20100401IpAccessControlList.UpdateSipIpAccessControlListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
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
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401IpAccessControlList {
  export type CreateSipIpAccessControlListRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /**
     * A human readable descriptive text that describes the IpAccessControlList, up to 255
     * characters long.
     */
    friendlyName: string;
  };

  export type DeleteSipIpAccessControlListRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** A 34 character string that uniquely identifies the resource to delete. */
    sid: string;
  };

  export type FetchSipIpAccessControlListRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** A 34 character string that uniquely identifies the resource to fetch. */
    sid: string;
  };

  export type ListSipIpAccessControlListRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
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

  export type UpdateSipIpAccessControlListRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** A 34 character string that uniquely identifies the resource to udpate. */
    sid: string;
    /** A human readable descriptive text, up to 255 characters long. */
    friendlyName: string;
  };
}
