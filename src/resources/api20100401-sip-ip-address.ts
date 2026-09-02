import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createSipIpAddress(
    request: Api20100401SipIpAddress.CreateSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "IpAddress", value: request.ipAddress, schema: s.string() },
            { name: "CidrPrefixLength", value: request.cidrPrefixLength, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipIpAddress(
    request: Api20100401SipIpAddress.DeleteSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
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

  fetchSipIpAddress(
    request: Api20100401SipIpAddress.FetchSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipIpAddress(
    request: Api20100401SipIpAddress.ListSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipIpAddressResponse, ResponseError> {
    return this.#rawClient.execute<ListSipIpAddressResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipIpAddressResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSipIpAddress(
    request: Api20100401SipIpAddress.UpdateSipIpAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "IpAccessControlListSid", value: request.ipAccessControlListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IpAddress", value: request.ipAddress, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CidrPrefixLength", value: request.cidrPrefixLength, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401SipIpAddress {
  export type CreateSipIpAddressRequest = {
    accountSid: string;
    ipAccessControlListSid: string;
    friendlyName: string;
    ipAddress: string;
    cidrPrefixLength?: number;
  };

  export type DeleteSipIpAddressRequest = {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
  };

  export type FetchSipIpAddressRequest = {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
  };

  export type ListSipIpAddressRequest = {
    accountSid: string;
    ipAccessControlListSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSipIpAddressRequest = {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
    ipAddress?: string;
    friendlyName?: string;
    cidrPrefixLength?: number;
  };
}
