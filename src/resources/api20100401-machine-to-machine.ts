import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listAvailablePhoneNumberMachineToMachineResponseSchema,
  type ListAvailablePhoneNumberMachineToMachineResponse,
} from "../models/list-available-phone-number-machine-to-machine-response.js";
import type { Servers } from "../servers.js";

export class Api20100401MachineToMachine {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listAvailablePhoneNumberMachineToMachine(
    request: Api20100401MachineToMachine.ListAvailablePhoneNumberMachineToMachineRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAvailablePhoneNumberMachineToMachineResponse, ResponseError> {
    return this.#rawClient.execute<ListAvailablePhoneNumberMachineToMachineResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CountryCode", value: request.countryCode, schema: s.string() },
        ],
        query: [
          { name: "AreaCode", value: request.areaCode, schema: s.optional(s.number()) },
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
          { name: "Distance", value: request.distance, schema: s.optional(s.number()) },
          { name: "InPostalCode", value: request.inPostalCode, schema: s.optional(s.string()) },
          { name: "InRegion", value: request.inRegion, schema: s.optional(s.string()) },
          { name: "InRateCenter", value: request.inRateCenter, schema: s.optional(s.string()) },
          { name: "InLata", value: request.inLata, schema: s.optional(s.string()) },
          { name: "InLocality", value: request.inLocality, schema: s.optional(s.string()) },
          { name: "FaxEnabled", value: request.faxEnabled, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAvailablePhoneNumberMachineToMachineResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401MachineToMachine {
  export type ListAvailablePhoneNumberMachineToMachineRequest = {
    accountSid: string;
    countryCode: string;
    areaCode?: number;
    contains?: string;
    smsEnabled?: boolean;
    mmsEnabled?: boolean;
    voiceEnabled?: boolean;
    excludeAllAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    beta?: boolean;
    nearNumber?: string;
    nearLatLong?: string;
    distance?: number;
    inPostalCode?: string;
    inRegion?: string;
    inRateCenter?: string;
    inLata?: string;
    inLocality?: string;
    faxEnabled?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
