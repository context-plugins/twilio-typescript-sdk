import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  numbersV1PortingPortInPhoneNumberSchema,
  type NumbersV1PortingPortInPhoneNumber,
} from "../models/numbers-v1-porting-port-in-phone-number.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingPortInPhoneNumberApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deletePortingPortInPhoneNumber(
    request: NumbersV1PortingPortInPhoneNumberApi.DeletePortingPortInPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() },
          { name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPortingPortInPhoneNumber(
    request: NumbersV1PortingPortInPhoneNumberApi.FetchPortingPortInPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortInPhoneNumber, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingPortInPhoneNumber, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() },
          { name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInPhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingPortInPhoneNumberApi {
  export type DeletePortingPortInPhoneNumberRequest = {
    portInRequestSid: string;
    phoneNumberSid: string;
  };

  export type FetchPortingPortInPhoneNumberRequest = {
    portInRequestSid: string;
    phoneNumberSid: string;
  };
}
