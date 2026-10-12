import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  dependentOrderEnumStatusSchema,
  type DependentOrderEnumStatus,
} from "../models/dependent-order-enum-status.js";
import {
  listHostedNumberOrderResponseSchema,
  type ListHostedNumberOrderResponse,
} from "../models/list-hosted-number-order-response.js";
import {
  numbersV2HostedNumberOrderSchema,
  type NumbersV2HostedNumberOrder,
} from "../models/numbers-v2-hosted-number-order.js";
import type { Servers } from "../servers.js";

export class NumbersV2HostedNumberOrderApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Host a phone number's capability on Twilio's platform.
   *
   * @remarks
   * Host a phone number's capability on Twilio's platform.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.CreateHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "ContactPhoneNumber", value: request.contactPhoneNumber, schema: s.string() },
            { name: "AddressSid", value: request.addressSid, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "AccountSid", value: request.accountSid, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CcEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            { name: "SmsCapability", value: request.smsCapability, schema: s.optional(s.boolean()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "SmsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            { name: "ContactTitle", value: request.contactTitle, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cancel the HostedNumberOrder (only available when the status is in `received`).
   *
   * @remarks
   * Cancel the HostedNumberOrder (only available when the status is in `received`).
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.DeleteHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Fetch a specific HostedNumberOrder.
   *
   * @remarks
   * Fetch a specific HostedNumberOrder.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.FetchHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
   *
   * @remarks
   * Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.ListHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListHostedNumberOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => dependentOrderEnumStatusSchema)),
          },
          { name: "SmsCapability", value: request.smsCapability, schema: s.optional(s.boolean()) },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          {
            name: "IncomingPhoneNumberSid",
            value: request.incomingPhoneNumberSid,
            schema: s.optional(s.string()),
          },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listHostedNumberOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates a specific HostedNumberOrder.
   *
   * @remarks
   * Updates a specific HostedNumberOrder.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.UpdateHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: dependentOrderEnumStatusSchema },
            {
              name: "VerificationCallDelay",
              value: request.verificationCallDelay,
              schema: s.optional(s.int()),
            },
            {
              name: "VerificationCallExtension",
              value: request.verificationCallExtension,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2HostedNumberOrderApi {
  export type CreateHostedNumberOrderRequest = {
    /** The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format */
    phoneNumber: string;
    /** The contact phone number of the person authorized to sign the Authorization Document. */
    contactPhoneNumber: string;
    /**
     * Optional. A 34 character string that uniquely identifies the Address resource that represents
     * the address of the owner of this phone number.
     */
    addressSid: string;
    /** Optional. Email of the owner of this phone number that is being hosted. */
    email: string;
    /**
     * This defaults to the AccountSid of the authorization the user is using. This can be provided
     * to specify a subaccount to add the HostedNumberOrder to.
     */
    accountSid?: string;
    /** A 128 character string that is a human readable text that describes this resource. */
    friendlyName?: string;
    /**
     * Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon
     * copied to.
     */
    ccEmails?: string[];
    /**
     * The URL that Twilio should request when somebody sends an SMS to the phone number. This will
     * be copied onto the IncomingPhoneNumber resource.
     */
    smsUrl?: string;
    /**
     * The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.
     * This will be copied onto the IncomingPhoneNumber resource.
     */
    smsMethod?: AmdStatusCallbackMethod;
    /**
     * A URL that Twilio will request if an error occurs requesting or executing the TwiML defined
     * by SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
     */
    smsFallbackUrl?: string;
    /** Used to specify that the SMS capability will be hosted on Twilio's platform. */
    smsCapability?: boolean;
    /**
     * The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or
     * `POST`. This will be copied onto the IncomingPhoneNumber resource.
     */
    smsFallbackMethod?: AmdStatusCallbackMethod;
    /** Optional. The Status Callback URL attached to the IncomingPhoneNumber resource. */
    statusCallbackUrl?: string;
    /** Optional. The Status Callback Method attached to the IncomingPhoneNumber resource. */
    statusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * Optional. The 34 character sid of the application Twilio should use to handle SMS messages
     * sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS
     * urls above and use those set on the application.
     */
    smsApplicationSid?: string;
    /**
     * The title of the person authorized to sign the Authorization Document for this phone number.
     */
    contactTitle?: string;
  };

  export type DeleteHostedNumberOrderRequest = {
    /** A 34 character string that uniquely identifies this HostedNumberOrder. */
    sid: string;
  };

  export type FetchHostedNumberOrderRequest = {
    /** A 34 character string that uniquely identifies this HostedNumberOrder. */
    sid: string;
  };

  export type ListHostedNumberOrderRequest = {
    /**
     * The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`,
     * `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
     */
    status?: DependentOrderEnumStatus;
    /** Whether the SMS capability will be hosted on our platform. Can be `true` of `false`. */
    smsCapability?: boolean;
    /** An E164 formatted phone number hosted by this HostedNumberOrder. */
    phoneNumber?: string;
    /**
     * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by
     * this HostedNumberOrder.
     */
    incomingPhoneNumberSid?: string;
    /** A human readable description of this resource, up to 128 characters. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateHostedNumberOrderRequest = {
    /** The SID of the HostedNumberOrder resource to update. */
    sid: string;
    /**
     * Status of this resource. It can hold one of the values: 1. Twilio Processing 2. Received, 3.
     * Pending LOA, 4. Carrier Processing, 5. Completed, 6. Action Required, 7. Failed. See the
     * [HostedNumberOrders Status
     * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values)
     * section for more information on each of these statuses.
     */
    status: DependentOrderEnumStatus;
    /**
     * The number of seconds to wait before initiating the ownership verification call. Can be a
     * value between 0 and 60, inclusive.
     */
    verificationCallDelay?: number;
    /** The numerical extension to dial when making the ownership verification call. */
    verificationCallExtension?: string;
  };
}
