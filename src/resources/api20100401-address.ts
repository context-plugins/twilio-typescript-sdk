import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountAddressSchema,
  type ApiV2010AccountAddress,
} from "../models/api-v2010-account-address.js";
import { listAddressResponseSchema, type ListAddressResponse } from "../models/list-address-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Address {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * An Address instance resource represents your or your customer's physical location within a
   * country. Around the world, some local authorities require the name and address of the user to
   * be on file with Twilio to purchase and own a phone number.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAddress(
    request: Api20100401Address.CreateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CustomerName", value: request.customerName, schema: s.string() },
            { name: "Street", value: request.street, schema: s.string() },
            { name: "City", value: request.city, schema: s.string() },
            { name: "Region", value: request.region, schema: s.string() },
            { name: "PostalCode", value: request.postalCode, schema: s.string() },
            { name: "IsoCountry", value: request.isoCountry, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "EmergencyEnabled", value: request.emergencyEnabled, schema: s.optional(s.boolean()) },
            {
              name: "AutoCorrectAddress",
              value: request.autoCorrectAddress,
              schema: s.optional(s.boolean()),
            },
            { name: "StreetSecondary", value: request.streetSecondary, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * An Address instance resource represents your or your customer's physical location within a
   * country. Around the world, some local authorities require the name and address of the user to
   * be on file with Twilio to purchase and own a phone number.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAddress(
    request: Api20100401Address.DeleteAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
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
   * An Address instance resource represents your or your customer's physical location within a
   * country. Around the world, some local authorities require the name and address of the user to
   * be on file with Twilio to purchase and own a phone number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAddress(
    request: Api20100401Address.FetchAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * An Address instance resource represents your or your customer's physical location within a
   * country. Around the world, some local authorities require the name and address of the user to
   * be on file with Twilio to purchase and own a phone number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAddress(
    request: Api20100401Address.ListAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAddressResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "CustomerName", value: request.customerName, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "EmergencyEnabled", value: request.emergencyEnabled, schema: s.optional(s.boolean()) },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAddressResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * An Address instance resource represents your or your customer's physical location within a
   * country. Around the world, some local authorities require the name and address of the user to
   * be on file with Twilio to purchase and own a phone number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAddress(
    request: Api20100401Address.UpdateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CustomerName", value: request.customerName, schema: s.optional(s.string()) },
            { name: "Street", value: request.street, schema: s.optional(s.string()) },
            { name: "City", value: request.city, schema: s.optional(s.string()) },
            { name: "Region", value: request.region, schema: s.optional(s.string()) },
            { name: "PostalCode", value: request.postalCode, schema: s.optional(s.string()) },
            { name: "EmergencyEnabled", value: request.emergencyEnabled, schema: s.optional(s.boolean()) },
            {
              name: "AutoCorrectAddress",
              value: request.autoCorrectAddress,
              schema: s.optional(s.boolean()),
            },
            { name: "StreetSecondary", value: request.streetSecondary, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Address {
  export type CreateAddressRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be
     * responsible for the new Address resource.
     */
    accountSid: string;
    /** The name to associate with the new address. */
    customerName: string;
    /** The number and street address of the new address. */
    street: string;
    /** The city of the new address. */
    city: string;
    /** The state or region of the new address. */
    region: string;
    /** The postal code of the new address. */
    postalCode: string;
    /** The ISO country code of the new address. */
    isoCountry: string;
    /**
     * A descriptive string that you create to describe the new address. It can be up to 64
     * characters long for Regulatory Compliance addresses and 32 characters long for Emergency
     * addresses.
     */
    friendlyName?: string;
    /** Whether to enable emergency calling on the new address. Can be: `true` or `false`. */
    emergencyEnabled?: boolean;
    /**
     * Whether we should automatically correct the address. Can be: `true` or `false` and the
     * default is `true`. If empty or `true`, we will correct the address you provide if necessary.
     * If `false`, we won't alter the address you provide.
     */
    autoCorrectAddress?: boolean;
    /** The additional number and street address of the address. */
    streetSecondary?: string;
  };

  export type DeleteAddressRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for
     * the Address resource to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Address resource to delete. */
    sid: string;
  };

  export type FetchAddressRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for
     * the Address resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Address resource to fetch. */
    sid: string;
  };

  export type ListAddressRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for
     * the Address resource to read.
     */
    accountSid: string;
    /** The `customer_name` of the Address resources to read. */
    customerName?: string;
    /** The string that identifies the Address resources to read. */
    friendlyName?: string;
    /** Whether the address can be associated to a number for emergency calling. */
    emergencyEnabled?: boolean;
    /** The ISO country code of the Address resources to read. */
    isoCountry?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateAddressRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for
     * the Address resource to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Address resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the new address. It can be up to 64
     * characters long for Regulatory Compliance addresses and 32 characters long for Emergency
     * addresses.
     */
    friendlyName?: string;
    /** The name to associate with the address. */
    customerName?: string;
    /** The number and street address of the address. */
    street?: string;
    /** The city of the address. */
    city?: string;
    /** The state or region of the address. */
    region?: string;
    /** The postal code of the address. */
    postalCode?: string;
    /** Whether to enable emergency calling on the address. Can be: `true` or `false`. */
    emergencyEnabled?: boolean;
    /**
     * Whether we should automatically correct the address. Can be: `true` or `false` and the
     * default is `true`. If empty or `true`, we will correct the address you provide if necessary.
     * If `false`, we won't alter the address you provide.
     */
    autoCorrectAddress?: boolean;
    /** The additional number and street address of the address. */
    streetSecondary?: string;
  };
}
