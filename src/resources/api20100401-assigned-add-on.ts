import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn,
} from "../models/api-v2010-account-incoming-phone-number-incoming-phone-number-assigned-add-on.js";
import {
  listIncomingPhoneNumberAssignedAddOnResponseSchema,
  type ListIncomingPhoneNumberAssignedAddOnResponse,
} from "../models/list-incoming-phone-number-assigned-add-on-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AssignedAddOn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.CreateIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "InstalledAddOnSid", value: request.installedAddOnSid, schema: s.string() }],
        },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.DeleteIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
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

  fetchIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.FetchIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.ListIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberAssignedAddOnResponse, ResponseError> {
    return this.#rawClient.execute<ListIncomingPhoneNumberAssignedAddOnResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIncomingPhoneNumberAssignedAddOnResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AssignedAddOn {
  export type CreateIncomingPhoneNumberAssignedAddOnRequest = {
    accountSid: string;
    resourceSid: string;
    installedAddOnSid: string;
  };

  export type DeleteIncomingPhoneNumberAssignedAddOnRequest = {
    accountSid: string;
    resourceSid: string;
    sid: string;
  };

  export type FetchIncomingPhoneNumberAssignedAddOnRequest = {
    accountSid: string;
    resourceSid: string;
    sid: string;
  };

  export type ListIncomingPhoneNumberAssignedAddOnRequest = {
    accountSid: string;
    resourceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
