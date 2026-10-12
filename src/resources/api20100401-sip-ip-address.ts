import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema,
  type ApiV2010AccountSipSipIpAccessControlListSipIpAddress,
} from "../models/api-v2010-account-sip-sip-ip-access-control-list-sip-ip-address.js";
import {
  listSipIpAddressResponseSchema,
  type ListSipIpAddressResponse,
} from "../models/list-sip-ip-address-response.js";
import type { Servers } from "../servers.js";

export class Api20100401SipIpAddress {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new IpAddress resource.
   *
   * @remarks
   * Create a new IpAddress resource.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipIpAddress(
    request: Api20100401SipIpAddress.CreateSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "IpAddress", value: request.ipAddress, schema: s.string() },
            { name: "CidrPrefixLength", value: request.cidrPrefixLength, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an IpAddress resource.
   *
   * @remarks
   * Delete an IpAddress resource.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipIpAddress(
    request: Api20100401SipIpAddress.DeleteSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
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
   * Read one IpAddress resource.
   *
   * @remarks
   * Read one IpAddress resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipIpAddress(
    request: Api20100401SipIpAddress.FetchSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Read multiple IpAddress resources.
   *
   * @remarks
   * Read multiple IpAddress resources.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipIpAddress(
    request: Api20100401SipIpAddress.ListSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipIpAddressResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
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
        success: { kind: "json", schema: listSipIpAddressResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an IpAddress resource.
   *
   * @remarks
   * Update an IpAddress resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipIpAddress(
    request: Api20100401SipIpAddress.UpdateSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IpAddress", value: request.ipAddress, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CidrPrefixLength", value: request.cidrPrefixLength, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401SipIpAddress {
  export type CreateSipIpAddressRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** The IpAccessControlList Sid with which to associate the created IpAddress resource. */
    ipAccessControlListSid: string;
    /** A human readable descriptive text for this resource, up to 255 characters long. */
    friendlyName: string;
    /**
     * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP
     * requests from this IP address will be allowed by Twilio. IPv4 only supported today.
     */
    ipAddress: string;
    /**
     * An integer representing the length of the CIDR prefix to use with this IP address when
     * accepting traffic. By default the entire IP address is used.
     */
    cidrPrefixLength?: number;
  };

  export type DeleteSipIpAddressRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** The IpAccessControlList Sid that identifies the IpAddress resources to delete. */
    ipAccessControlListSid: string;
    /** A 34 character string that uniquely identifies the resource to delete. */
    sid: string;
  };

  export type FetchSipIpAddressRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** The IpAccessControlList Sid that identifies the IpAddress resources to fetch. */
    ipAccessControlListSid: string;
    /** A 34 character string that uniquely identifies the IpAddress resource to fetch. */
    sid: string;
  };

  export type ListSipIpAddressRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** The IpAccessControlList Sid that identifies the IpAddress resources to read. */
    ipAccessControlListSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSipIpAddressRequest = {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
     * this resource.
     */
    accountSid: string;
    /** The IpAccessControlList Sid that identifies the IpAddress resources to update. */
    ipAccessControlListSid: string;
    /** A 34 character string that identifies the IpAddress resource to update. */
    sid: string;
    /**
     * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP
     * requests from this IP address will be allowed by Twilio. IPv4 only supported today.
     */
    ipAddress?: string;
    /** A human readable descriptive text for this resource, up to 255 characters long. */
    friendlyName?: string;
    /**
     * An integer representing the length of the CIDR prefix to use with this IP address when
     * accepting traffic. By default the entire IP address is used.
     */
    cidrPrefixLength?: number;
  };
}
