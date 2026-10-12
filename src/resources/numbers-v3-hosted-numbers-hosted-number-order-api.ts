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
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "../models/dependent-order-enum-verification-type.js";
import {
  numbersV3HostedNumbersHostedNumberOrderSchema,
  type NumbersV3HostedNumbersHostedNumberOrder,
} from "../models/numbers-v3-hosted-numbers-hosted-number-order.js";
import type { Servers } from "../servers.js";

export class NumbersV3HostedNumbersHostedNumberOrderApi {
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
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createHostedNumbersHostedNumberOrder(
    request: NumbersV3HostedNumbersHostedNumberOrderApi.CreateHostedNumbersHostedNumberOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<NumbersV3HostedNumbersHostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v3/HostedNumbers/HostedNumberOrders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "phoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "smsCapability", value: request.smsCapability, schema: s.boolean() },
            { name: "accountSid", value: request.accountSid, schema: s.optional(s.string()) },
            { name: "friendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "uniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "ccEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
            { name: "smsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "smsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "smsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "smsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "statusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            {
              name: "statusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "smsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            { name: "addressSid", value: request.addressSid, schema: s.optional(s.string()) },
            { name: "email", value: request.email, schema: s.optional(s.string()) },
            {
              name: "verificationType",
              value: request.verificationType,
              schema: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
            },
            {
              name: "verificationDocumentSid",
              value: request.verificationDocumentSid,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV3HostedNumbersHostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV3HostedNumbersHostedNumberOrderApi {
  export type CreateHostedNumbersHostedNumberOrderRequestParams = {
    /** The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format */
    phoneNumber: string;
    /** Used to specify that the SMS capability will be hosted on Twilio's platform. */
    smsCapability: boolean;
    /**
     * This defaults to the AccountSid of the authorization the user is using. This can be provided
     * to specify a subaccount to add the HostedNumberOrder to.
     */
    accountSid?: string;
    /** A 64 character string that is a human readable text that describes this resource. */
    friendlyName?: string;
    /**
     * Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder,
     * assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
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
     * Optional. A 34 character string that uniquely identifies the Address resource that represents
     * the address of the owner of this phone number.
     */
    addressSid?: string;
    /** Optional. Email of the owner of this phone number that is being hosted. */
    email?: string;
    verificationType?: DependentOrderEnumVerificationType;
    /**
     * Optional. The unique sid identifier of the Identity Document that represents the document for
     * verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
     */
    verificationDocumentSid?: string;
  };
}
