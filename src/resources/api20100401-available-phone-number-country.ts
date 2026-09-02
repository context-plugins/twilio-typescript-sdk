import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountAvailablePhoneNumberCountrySchema,
  type ApiV2010AccountAvailablePhoneNumberCountry,
} from "../models/api-v2010-account-available-phone-number-country.js";
import {
  listAvailablePhoneNumberCountryResponseSchema,
  type ListAvailablePhoneNumberCountryResponse,
} from "../models/list-available-phone-number-country-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AvailablePhoneNumberCountry {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchAvailablePhoneNumberCountry(
    request: Api20100401AvailablePhoneNumberCountry.FetchAvailablePhoneNumberCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAvailablePhoneNumberCountry, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountAvailablePhoneNumberCountry, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CountryCode", value: request.countryCode, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAvailablePhoneNumberCountrySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAvailablePhoneNumberCountry(
    request: Api20100401AvailablePhoneNumberCountry.ListAvailablePhoneNumberCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAvailablePhoneNumberCountryResponse, ResponseError> {
    return this.#rawClient.execute<ListAvailablePhoneNumberCountryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAvailablePhoneNumberCountryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AvailablePhoneNumberCountry {
  export type FetchAvailablePhoneNumberCountryRequest = {
    accountSid: string;
    countryCode: string;
  };

  export type ListAvailablePhoneNumberCountryRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
