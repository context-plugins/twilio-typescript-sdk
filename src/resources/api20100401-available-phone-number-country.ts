import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Country codes with available phone numbers
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAvailablePhoneNumberCountry(
    request: Api20100401AvailablePhoneNumberCountry.FetchAvailablePhoneNumberCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountAvailablePhoneNumberCountry, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CountryCode", value: request.countryCode, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountAvailablePhoneNumberCountrySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Country codes with available phone numbers
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailablePhoneNumberCountry(
    request: Api20100401AvailablePhoneNumberCountry.ListAvailablePhoneNumberCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAvailablePhoneNumberCountryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json"),
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
        success: { kind: "json", schema: listAvailablePhoneNumberCountryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AvailablePhoneNumberCountry {
  export type FetchAvailablePhoneNumberCountryRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the
     * available phone number Country resource.
     */
    accountSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country to fetch available phone number information about.
     */
    countryCode: string;
  };

  export type ListAvailablePhoneNumberCountryRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the
     * available phone number Country resources.
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
}
