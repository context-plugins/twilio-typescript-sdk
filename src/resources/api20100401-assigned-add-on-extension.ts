import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  incomingPhoneNumberAssignedAddOnExtensionSchema,
  type IncomingPhoneNumberAssignedAddOnExtension,
} from "../models/incoming-phone-number-assigned-add-on-extension.js";
import {
  listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema,
  type ListIncomingPhoneNumberAssignedAddOnExtensionResponse,
} from "../models/list-incoming-phone-number-assigned-add-on-extension-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AssignedAddOnExtension {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchIncomingPhoneNumberAssignedAddOnExtension(
    request: Api20100401AssignedAddOnExtension.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomingPhoneNumberAssignedAddOnExtension, ResponseError> {
    return this.#rawClient.execute<IncomingPhoneNumberAssignedAddOnExtension, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "AssignedAddOnSid", value: request.assignedAddOnSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: incomingPhoneNumberAssignedAddOnExtensionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listIncomingPhoneNumberAssignedAddOnExtension(
    request: Api20100401AssignedAddOnExtension.ListIncomingPhoneNumberAssignedAddOnExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberAssignedAddOnExtensionResponse, ResponseError> {
    return this.#rawClient.execute<ListIncomingPhoneNumberAssignedAddOnExtensionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "AssignedAddOnSid", value: request.assignedAddOnSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AssignedAddOnExtension {
  export type FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = {
    accountSid: string;
    resourceSid: string;
    assignedAddOnSid: string;
    sid: string;
  };

  export type ListIncomingPhoneNumberAssignedAddOnExtensionRequest = {
    accountSid: string;
    resourceSid: string;
    assignedAddOnSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
