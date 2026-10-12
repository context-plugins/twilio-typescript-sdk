import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listAvailablePhoneNumberLocalResponseSchema,
  type ListAvailablePhoneNumberLocalResponse,
} from "../models/list-available-phone-number-local-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Local {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Available local phone numbers
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailablePhoneNumberLocal(
    request: Api20100401Local.ListAvailablePhoneNumberLocalRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAvailablePhoneNumberLocalResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CountryCode", value: request.countryCode, schema: s.string() },
        ],
        query: [
          { name: "AreaCode", value: request.areaCode, schema: s.optional(s.int()) },
          { name: "Contains", value: request.contains, schema: s.optional(s.string()) },
          { name: "SmsEnabled", value: request.smsEnabled, schema: s.optional(s.boolean()) },
          { name: "MmsEnabled", value: request.mmsEnabled, schema: s.optional(s.boolean()) },
          { name: "VoiceEnabled", value: request.voiceEnabled, schema: s.optional(s.boolean()) },
          {
            name: "ExcludeAllAddressRequired",
            value: request.excludeAllAddressRequired,
            schema: s.optional(s.boolean()),
          },
          {
            name: "ExcludeLocalAddressRequired",
            value: request.excludeLocalAddressRequired,
            schema: s.optional(s.boolean()),
          },
          {
            name: "ExcludeForeignAddressRequired",
            value: request.excludeForeignAddressRequired,
            schema: s.optional(s.boolean()),
          },
          { name: "Beta", value: request.beta, schema: s.optional(s.boolean()) },
          { name: "NearNumber", value: request.nearNumber, schema: s.optional(s.string()) },
          { name: "NearLatLong", value: request.nearLatLong, schema: s.optional(s.string()) },
          { name: "Distance", value: request.distance, schema: s.optional(s.int()) },
          { name: "InPostalCode", value: request.inPostalCode, schema: s.optional(s.string()) },
          { name: "InRegion", value: request.inRegion, schema: s.optional(s.string()) },
          { name: "InRateCenter", value: request.inRateCenter, schema: s.optional(s.string()) },
          { name: "InLata", value: request.inLata, schema: s.optional(s.string()) },
          { name: "InLocality", value: request.inLocality, schema: s.optional(s.string()) },
          { name: "FaxEnabled", value: request.faxEnabled, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAvailablePhoneNumberLocalResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Local {
  export type ListAvailablePhoneNumberLocalRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the
     * AvailablePhoneNumber resources.
     */
    accountSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country from which to read phone numbers.
     */
    countryCode: string;
    /**
     * The area code of the phone numbers to read. Applies to only phone numbers in the US and
     * Canada.
     */
    areaCode?: number;
    /**
     * Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters
     * long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It
     * accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear
     * multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use
     * `*` to match any single character or `%` to match a sequence of characters. If you use the
     * wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be
     * used between non-meta-characters. To match the beginning of a pattern, start the pattern with
     * `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters
     * can't be adjacent to each other.
     */
    contains?: string;
    /** Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
    smsEnabled?: boolean;
    /** Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
    mmsEnabled?: boolean;
    /** Whether the phone numbers can receive calls. Can be: `true` or `false`. */
    voiceEnabled?: boolean;
    /**
     * Whether to exclude phone numbers that require an
     * [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the
     * default is `false`.
     */
    excludeAllAddressRequired?: boolean;
    /**
     * Whether to exclude phone numbers that require a local
     * [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the
     * default is `false`.
     */
    excludeLocalAddressRequired?: boolean;
    /**
     * Whether to exclude phone numbers that require a foreign
     * [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the
     * default is `false`.
     */
    excludeForeignAddressRequired?: boolean;
    /**
     * Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false`
     * and the default is `true`.
     */
    beta?: boolean;
    /**
     * Given a phone number, find a geographically close number within `distance` miles. Distance
     * defaults to 25 miles. Applies to only phone numbers in the US and Canada.
     */
    nearNumber?: string;
    /**
     * Given a latitude/longitude pair `lat,long` find geographically close numbers within
     * `distance` miles. Applies to only phone numbers in the US and Canada.
     */
    nearLatLong?: string;
    /**
     * The search radius, in miles, for a `near_` query. Can be up to `500` and the default is `25`.
     * Applies to only phone numbers in the US and Canada.
     */
    distance?: number;
    /**
     * Limit results to a particular postal code. Given a phone number, search within the same
     * postal code as that number. Applies to only phone numbers in the US and Canada.
     */
    inPostalCode?: string;
    /**
     * Limit results to a particular region, state, or province. Given a phone number, search within
     * the same region as that number. Applies to only phone numbers in the US and Canada.
     */
    inRegion?: string;
    /**
     * Limit results to a specific rate center, or given a phone number search within the same rate
     * center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in
     * the US and Canada.
     */
    inRateCenter?: string;
    /**
     * Limit results to a specific local access and transport area
     * ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone
     * number, search within the same
     * [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies
     * to only phone numbers in the US and Canada.
     */
    inLata?: string;
    /**
     * Limit results to a particular locality or city. Given a phone number, search within the same
     * Locality as that number.
     */
    inLocality?: string;
    /** Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
    faxEnabled?: boolean;
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
