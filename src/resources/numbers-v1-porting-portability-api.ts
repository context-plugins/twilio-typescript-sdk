import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  numbersV1PortingPortabilitySchema,
  type NumbersV1PortingPortability,
} from "../models/numbers-v1-porting-portability.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingPortabilityApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchPortingPortability(
    request: NumbersV1PortingPortabilityApi.FetchPortingPortabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortability, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingPortability, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/Porting/Portability/PhoneNumber/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        query: [
          { name: "TargetAccountSid", value: request.targetAccountSid, schema: s.optional(s.string()) },
          { name: "AddressSid", value: request.addressSid, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortabilitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingPortabilityApi {
  export type FetchPortingPortabilityRequest = {
    phoneNumber: string;
    targetAccountSid?: string;
    addressSid?: string;
  };
}
