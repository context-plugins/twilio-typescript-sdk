import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { verifyV2SafelistSchema, type VerifyV2Safelist } from "../models/verify-v2-safelist.js";
import type { Servers } from "../servers.js";

export class VerifyV2SafelistApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a new phone number to SafeList.
   *
   * @remarks
   * Add a new phone number to SafeList.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSafelist(
    request: VerifyV2SafelistApi.CreateSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Safelist, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/SafeList/Numbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2SafelistSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a phone number from SafeList.
   *
   * @remarks
   * Remove a phone number from SafeList.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSafelist(
    request: VerifyV2SafelistApi.DeleteSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/SafeList/Numbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
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
   * Check if a phone number exists in SafeList.
   *
   * @remarks
   * Check if a phone number exists in SafeList.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSafelist(
    request: VerifyV2SafelistApi.FetchSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Safelist, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/SafeList/Numbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2SafelistSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2SafelistApi {
  export type CreateSafelistRequest = {
    /**
     * The phone number to be added in SafeList. Phone numbers must be in [E.164
     * format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
  };

  export type DeleteSafelistRequest = {
    /**
     * The phone number to be removed from SafeList. Phone numbers must be in [E.164
     * format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
  };

  export type FetchSafelistRequest = {
    /**
     * The phone number to be fetched from SafeList. Phone numbers must be in [E.164
     * format](https://www.twilio.com/docs/glossary/what-e164).
     */
    phoneNumber: string;
  };
}
