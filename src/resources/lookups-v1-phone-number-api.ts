import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { lookupsV1PhoneNumberSchema, type LookupsV1PhoneNumber } from "../models/lookups-v1-phone-number.js";
import type { Servers } from "../servers.js";

export class LookupsV1PhoneNumberApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detailed information on phone numbers
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPhoneNumber2(
    request: LookupsV1PhoneNumberApi.FetchPhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<LookupsV1PhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default4("/v1/PhoneNumbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        query: [
          { name: "CountryCode", value: request.countryCode, schema: s.optional(s.string()) },
          { name: "Type", value: request.type, schema: s.optional(s.array(s.string())) },
          { name: "AddOns", value: request.addOns, schema: s.optional(s.array(s.string())) },
          {
            name: "AddOnsData",
            value: request.addOnsData,
            schema: s.optional(s.record(s.string(), s.unknown())),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lookupsV1PhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LookupsV1PhoneNumberApi {
  export type FetchPhoneNumber2Request = {
    /**
     * The phone number to lookup in [E.164](https://www.twilio.com/docs/glossary/what-e164) format,
     * which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number
     * to fetch. This is used to specify the country when the phone number is provided in a national
     * format.
     */
    countryCode?: string;
    /**
     * The type of information to return. Can be: `carrier` or `caller-name`. The default is null.
     * To retrieve both types of information, specify this parameter twice; once with `carrier` and
     * once with `caller-name` as the value.
     */
    type?: string[];
    /**
     * The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an
     * Add-on that is installed on your account. You can specify multiple instances of this
     * parameter to invoke multiple Add-ons. For more information about Add-ons, see the [Add-ons
     * documentation](https://www.twilio.com/docs/add-ons).
     */
    addOns?: string[];
    /**
     * Data specific to the add-on you would like to invoke. The content and format of this value
     * depends on the add-on.
     */
    addOnsData?: Record<string, unknown>;
  };
}
