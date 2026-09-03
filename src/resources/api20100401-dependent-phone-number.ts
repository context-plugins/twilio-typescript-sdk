import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listDependentPhoneNumberResponseSchema,
  type ListDependentPhoneNumberResponse,
} from "../models/list-dependent-phone-number-response.js";
import type { Servers } from "../servers.js";

export class Api20100401DependentPhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listDependentPhoneNumber(
    request: Api20100401DependentPhoneNumber.ListDependentPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDependentPhoneNumberResponse, ResponseError> {
    return this.#rawClient.execute<ListDependentPhoneNumberResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "AddressSid", value: request.addressSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDependentPhoneNumberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401DependentPhoneNumber {
  export type ListDependentPhoneNumberRequest = {
    accountSid: string;
    addressSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
