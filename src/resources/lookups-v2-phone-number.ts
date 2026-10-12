import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { lookupResponseSchema, type LookupResponse } from "../models/lookup-response.js";
import type { Servers } from "../servers.js";

export class LookupsV2PhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Full API documentation: https://www.twilio.com/docs/lookup/v2-api
   *
   * @remarks
   * The Lookup API allows you to query information on a phone number so that you can make a trusted
   * interaction with your user
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPhoneNumber3(
    request: LookupsV2PhoneNumber.FetchPhoneNumber3Request,
    options?: RequestOptions,
  ): ApiPromise<LookupResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        query: [
          { name: "Fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "CountryCode", value: request.countryCode, schema: s.optional(s.string()) },
          { name: "FirstName", value: request.firstName, schema: s.optional(s.string()) },
          { name: "LastName", value: request.lastName, schema: s.optional(s.string()) },
          { name: "AddressLine1", value: request.addressLine1, schema: s.optional(s.string()) },
          { name: "AddressLine2", value: request.addressLine2, schema: s.optional(s.string()) },
          { name: "City", value: request.city, schema: s.optional(s.string()) },
          { name: "State", value: request.state, schema: s.optional(s.string()) },
          { name: "PostalCode", value: request.postalCode, schema: s.optional(s.string()) },
          { name: "AddressCountryCode", value: request.addressCountryCode, schema: s.optional(s.string()) },
          { name: "NationalId", value: request.nationalId, schema: s.optional(s.string()) },
          { name: "DateOfBirth", value: request.dateOfBirth, schema: s.optional(s.string()) },
          { name: "LastVerifiedDate", value: request.lastVerifiedDate, schema: s.optional(s.string()) },
          { name: "VerificationSid", value: request.verificationSid, schema: s.optional(s.string()) },
          { name: "PartnerSubId", value: request.partnerSubId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lookupResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LookupsV2PhoneNumber {
  export type FetchPhoneNumber3Request = {
    /**
     * The phone number to lookup in E.164 or national format. Default country code is +1 (North
     * America).
     */
    phoneNumber: string;
    /**
     * A comma-separated list of fields to return. Possible values are validation, caller_name,
     * sim_swap, call_forwarding, line_status, line_type_intelligence, identity_match,
     * reassigned_number, sms_pumping_risk, phone_number_quality_score, pre_fill.
     */
    fields?: string;
    /**
     * The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number
     * provided is in national format.
     */
    countryCode?: string;
    /**
     * User’s first name. This query parameter is only used (optionally) for identity_match package
     * requests.
     */
    firstName?: string;
    /**
     * User’s last name. This query parameter is only used (optionally) for identity_match package
     * requests.
     */
    lastName?: string;
    /**
     * User’s first address line. This query parameter is only used (optionally) for identity_match
     * package requests.
     */
    addressLine1?: string;
    /**
     * User’s second address line. This query parameter is only used (optionally) for identity_match
     * package requests.
     */
    addressLine2?: string;
    /**
     * User’s city. This query parameter is only used (optionally) for identity_match package
     * requests.
     */
    city?: string;
    /**
     * User’s country subdivision, such as state, province, or locality. This query parameter is
     * only used (optionally) for identity_match package requests.
     */
    state?: string;
    /**
     * User’s postal zip code. This query parameter is only used (optionally) for identity_match
     * package requests.
     */
    postalCode?: string;
    /**
     * User’s country, up to two characters. This query parameter is only used (optionally) for
     * identity_match package requests.
     */
    addressCountryCode?: string;
    /**
     * User’s national ID, such as SSN or Passport ID. This query parameter is only used
     * (optionally) for identity_match package requests.
     */
    nationalId?: string;
    /**
     * User’s date of birth, in YYYYMMDD format. This query parameter is only used (optionally) for
     * identity_match package requests.
     */
    dateOfBirth?: string;
    /**
     * The date you obtained consent to call or text the end-user of the phone number or a date on
     * which you are reasonably certain that the end-user could still be reached at that number.
     * This query parameter is only used (optionally) for reassigned_number package requests.
     */
    lastVerifiedDate?: string;
    /**
     * The unique identifier associated with a verification process through verify API. This query
     * parameter is only used (optionally) for pre_fill package requests.
     */
    verificationSid?: string;
    /**
     * The optional partnerSubId parameter to provide context for your sub-accounts, tenantIDs,
     * sender IDs or other segmentation, enhancing the accuracy of the risk analysis.
     */
    partnerSubId?: string;
  };
}
