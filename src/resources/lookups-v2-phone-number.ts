import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchPhoneNumber3(
    request: LookupsV2PhoneNumber.FetchPhoneNumber3Request,
    options?: RequestOptions,
  ): ApiPromise<LookupResponse, ResponseError> {
    return this.#rawClient.execute<LookupResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default4("/v2/PhoneNumbers/{PhoneNumber}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lookupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace LookupsV2PhoneNumber {
  export type FetchPhoneNumber3Request = {
    phoneNumber: string;
    fields?: string;
    countryCode?: string;
    firstName?: string;
    lastName?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    addressCountryCode?: string;
    nationalId?: string;
    dateOfBirth?: string;
    lastVerifiedDate?: string;
    verificationSid?: string;
    partnerSubId?: string;
  };
}
