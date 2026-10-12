import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Allows to cancel a port in request phone number by SID
   *
   * @remarks
   * Allows to cancel a port in request phone number by SID
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePortingPortInPhoneNumber(
    request: NumbersV1PortingPortInPhoneNumberApi.DeletePortingPortInPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5(
          "/v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() },
          { name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a phone number by port in request SID and phone number SID
   *
   * @remarks
   * Fetch a phone number by port in request SID and phone number SID
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPortingPortInPhoneNumber(
    request: NumbersV1PortingPortInPhoneNumberApi.FetchPortingPortInPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortInPhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5(
          "/v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() },
          { name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInPhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingPortInPhoneNumberApi {
  export type DeletePortingPortInPhoneNumberRequest = {
    /** The SID of the Port In request. This is a unique identifier of the port in request. */
    portInRequestSid: string;
    /**
     * The SID of the Port In request phone number. This is a unique identifier of the phone number.
     */
    phoneNumberSid: string;
  };

  export type FetchPortingPortInPhoneNumberRequest = {
    /** The SID of the Port In request. This is a unique identifier of the port in request. */
    portInRequestSid: string;
    /** The SID of the Phone number. This is a unique identifier of the phone number. */
    phoneNumberSid: string;
  };
}
