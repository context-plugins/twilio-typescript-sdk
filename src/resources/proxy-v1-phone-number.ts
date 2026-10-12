import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listPhoneNumberResponse1Schema,
  type ListPhoneNumberResponse1,
} from "../models/list-phone-number-response1.js";
import {
  proxyV1ServicePhoneNumberSchema,
  type ProxyV1ServicePhoneNumber,
} from "../models/proxy-v1-service-phone-number.js";
import type { Servers } from "../servers.js";

export class ProxyV1PhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a Phone Number to a Service's Proxy Number Pool.
   *
   * @remarks
   * Add a Phone Number to a Service's Proxy Number Pool.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPhoneNumber2(
    request: ProxyV1PhoneNumber.CreatePhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
            { name: "IsReserved", value: request.isReserved, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Phone Number from a Service.
   *
   * @remarks
   * Delete a specific Phone Number from a Service.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePhoneNumber2(
    request: ProxyV1PhoneNumber.DeletePhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
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
   * Fetch a specific Phone Number.
   *
   * @remarks
   * Fetch a specific Phone Number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPhoneNumber4(
    request: ProxyV1PhoneNumber.FetchPhoneNumber4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100
   * records will be returned per page.
   *
   * @remarks
   * Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100
   * records will be returned per page.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPhoneNumber2(
    request: ProxyV1PhoneNumber.ListPhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<ListPhoneNumberResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPhoneNumberResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Proxy Number.
   *
   * @remarks
   * Update a specific Proxy Number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePhoneNumber(
    request: ProxyV1PhoneNumber.UpdatePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "IsReserved", value: request.isReserved, schema: s.optional(s.boolean()) }],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1PhoneNumber {
  export type CreatePhoneNumber2Request = {
    /**
     * The SID parent [Service](https://www.twilio.com/docs/proxy/api/service) resource of the new
     * PhoneNumber resource.
     */
    serviceSid: string;
    /**
     * The SID of a Twilio
     * [IncomingPhoneNumber](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource)
     * resource that represents the Twilio Number you would like to assign to your Proxy Service.
     */
    sid?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format. E.164
     * phone numbers consist of a + followed by the country code and subscriber number without
     * punctuation characters. For example, +14155551234.
     */
    phoneNumber?: string;
    /**
     * Whether the new phone number should be reserved and not be assigned to a participant using
     * proxy pool logic. See [Reserved Phone
     * Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
  };

  export type DeletePhoneNumber2Request = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * PhoneNumber resource to delete.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the PhoneNumber resource to delete. */
    sid: string;
  };

  export type FetchPhoneNumber4Request = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * PhoneNumber resource to fetch.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the PhoneNumber resource to fetch. */
    sid: string;
  };

  export type ListPhoneNumber2Request = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * PhoneNumber resources to read.
     */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdatePhoneNumberRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * PhoneNumber resource to update.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the PhoneNumber resource to update. */
    sid: string;
    /**
     * Whether the phone number should be reserved and not be assigned to a participant using proxy
     * pool logic. See [Reserved Phone
     * Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
  };
}
