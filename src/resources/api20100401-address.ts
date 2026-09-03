import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createAddress(
    request: Api20100401Address.CreateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteAddress(
    request: Api20100401Address.DeleteAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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

  fetchAddress(
    request: Api20100401Address.FetchAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountAddress, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAddress(
    request: Api20100401Address.ListAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAddressResponse, ResponseError> {
    return this.#rawClient.execute<ListAddressResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "CustomerName", value: request.customerName, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "EmergencyEnabled", value: request.emergencyEnabled, schema: s.optional(s.boolean()) },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAddressResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateAddress(
    request: Api20100401Address.UpdateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Address {
  export type CreateAddressRequest = {
    accountSid: string;
    customerName: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    isoCountry: string;
    friendlyName?: string;
    emergencyEnabled?: boolean;
    autoCorrectAddress?: boolean;
    streetSecondary?: string;
  };

  export type DeleteAddressRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchAddressRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListAddressRequest = {
    accountSid: string;
    customerName?: string;
    friendlyName?: string;
    emergencyEnabled?: boolean;
    isoCountry?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateAddressRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
    customerName?: string;
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    emergencyEnabled?: boolean;
    autoCorrectAddress?: boolean;
    streetSecondary?: string;
  };
}
