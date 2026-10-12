import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Check if a single phone number can be ported to Twilio
   *
   * @remarks
   * Check if a single phone number can be ported to Twilio
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPortingPortability(
    request: NumbersV1PortingPortabilityApi.FetchPortingPortabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortability, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/Porting/Portability/PhoneNumber/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        query: [
          { name: "TargetAccountSid", value: request.targetAccountSid, schema: s.optional(s.string()) },
          { name: "AddressSid", value: request.addressSid, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortabilitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingPortabilityApi {
  export type FetchPortingPortabilityRequest = {
    /** Phone number to check portability in e164 format. */
    phoneNumber: string;
    /**
     * Account Sid to which the number will be ported. This can be used to determine if a sub
     * account already has the number in its inventory or a different sub account. If this is not
     * provided, the authenticated account will be assumed to be the target account.
     */
    targetAccountSid?: string;
    /** Address Sid of customer to which the number will be ported. */
    addressSid?: string;
  };
}
