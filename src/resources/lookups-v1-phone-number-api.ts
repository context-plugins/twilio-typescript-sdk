import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchPhoneNumber2(
    request: LookupsV1PhoneNumberApi.FetchPhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<LookupsV1PhoneNumber, ResponseError> {
    return this.#rawClient.execute<LookupsV1PhoneNumber, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default4("/v1/PhoneNumbers/{PhoneNumber}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lookupsV1PhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace LookupsV1PhoneNumberApi {
  export type FetchPhoneNumber2Request = {
    phoneNumber: string;
    countryCode?: string;
    type?: string[];
    addOns?: string[];
    addOnsData?: Record<string, unknown>;
  };
}
