import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountIncomingPhoneNumberSchema,
  type ApiV2010AccountIncomingPhoneNumber,
} from "../models/api-v2010-account-incoming-phone-number.js";
import {
  incomingPhoneNumberEnumEmergencyStatusSchema,
  type IncomingPhoneNumberEnumEmergencyStatus,
} from "../models/incoming-phone-number-enum-emergency-status.js";
import {
  incomingPhoneNumberEnumVoiceReceiveModeSchema,
  type IncomingPhoneNumberEnumVoiceReceiveMode,
} from "../models/incoming-phone-number-enum-voice-receive-mode.js";
import {
  listIncomingPhoneNumberResponseSchema,
  type ListIncomingPhoneNumberResponse,
} from "../models/list-incoming-phone-number-response.js";
import { smsFallbackMethod9Schema, type SmsFallbackMethod9 } from "../models/sms-fallback-method9.js";
import { smsMethod9Schema, type SmsMethod9 } from "../models/sms-method9.js";
import {
  statusCallbackMethod10Schema,
  type StatusCallbackMethod10,
} from "../models/status-callback-method10.js";
import { voiceFallbackMethod9Schema, type VoiceFallbackMethod9 } from "../models/voice-fallback-method9.js";
import { voiceMethod9Schema, type VoiceMethod9 } from "../models/voice-method9.js";
import type { Servers } from "../servers.js";

export class Api20100401IncomingPhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Purchase a phone-number for the account.
   *
   * @remarks
   * Purchase a phone-number for the account.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.CreateIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "SmsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod9Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod9Schema)),
            },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod10Schema)),
            },
            {
              name: "VoiceApplicationSid",
              value: request.voiceApplicationSid,
              schema: s.optional(s.string()),
            },
            {
              name: "VoiceCallerIdLookup",
              value: request.voiceCallerIdLookup,
              schema: s.optional(s.boolean()),
            },
            {
              name: "VoiceFallbackMethod",
              value: request.voiceFallbackMethod,
              schema: s.optional(s.lazy(() => voiceFallbackMethod9Schema)),
            },
            { name: "VoiceFallbackUrl", value: request.voiceFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceMethod",
              value: request.voiceMethod,
              schema: s.optional(s.lazy(() => voiceMethod9Schema)),
            },
            { name: "VoiceUrl", value: request.voiceUrl, schema: s.optional(s.string()) },
            {
              name: "EmergencyStatus",
              value: request.emergencyStatus,
              schema: s.optional(s.lazy(() => incomingPhoneNumberEnumEmergencyStatusSchema)),
            },
            {
              name: "EmergencyAddressSid",
              value: request.emergencyAddressSid,
              schema: s.optional(s.string()),
            },
            { name: "TrunkSid", value: request.trunkSid, schema: s.optional(s.string()) },
            { name: "IdentitySid", value: request.identitySid, schema: s.optional(s.string()) },
            { name: "AddressSid", value: request.addressSid, schema: s.optional(s.string()) },
            {
              name: "VoiceReceiveMode",
              value: request.voiceReceiveMode,
              schema: s.optional(s.lazy(() => incomingPhoneNumberEnumVoiceReceiveModeSchema)),
            },
            { name: "BundleSid", value: request.bundleSid, schema: s.optional(s.string()) },
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
            { name: "AreaCode", value: request.areaCode, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountIncomingPhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a phone-numbers belonging to the account used to make the request.
   *
   * @remarks
   * Delete a phone-numbers belonging to the account used to make the request.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.DeleteIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch an incoming-phone-number belonging to the account used to make the request.
   *
   * @remarks
   * Fetch an incoming-phone-number belonging to the account used to make the request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.FetchIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountIncomingPhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
   *
   * @remarks
   * Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.ListIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "Beta", value: request.beta, schema: s.optional(s.boolean()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIncomingPhoneNumberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an incoming-phone-number instance.
   *
   * @remarks
   * Update an incoming-phone-number instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.UpdateIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSidTemplate, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AccountSid", value: request.accountSid, schema: s.optional(s.string()) },
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "SmsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod9Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod9Schema)),
            },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod10Schema)),
            },
            {
              name: "VoiceApplicationSid",
              value: request.voiceApplicationSid,
              schema: s.optional(s.string()),
            },
            {
              name: "VoiceCallerIdLookup",
              value: request.voiceCallerIdLookup,
              schema: s.optional(s.boolean()),
            },
            {
              name: "VoiceFallbackMethod",
              value: request.voiceFallbackMethod,
              schema: s.optional(s.lazy(() => voiceFallbackMethod9Schema)),
            },
            { name: "VoiceFallbackUrl", value: request.voiceFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceMethod",
              value: request.voiceMethod,
              schema: s.optional(s.lazy(() => voiceMethod9Schema)),
            },
            { name: "VoiceUrl", value: request.voiceUrl, schema: s.optional(s.string()) },
            {
              name: "EmergencyStatus",
              value: request.emergencyStatus,
              schema: s.optional(s.lazy(() => incomingPhoneNumberEnumEmergencyStatusSchema)),
            },
            {
              name: "EmergencyAddressSid",
              value: request.emergencyAddressSid,
              schema: s.optional(s.string()),
            },
            { name: "TrunkSid", value: request.trunkSid, schema: s.optional(s.string()) },
            {
              name: "VoiceReceiveMode",
              value: request.voiceReceiveMode,
              schema: s.optional(s.lazy(() => incomingPhoneNumberEnumVoiceReceiveModeSchema)),
            },
            { name: "IdentitySid", value: request.identitySid, schema: s.optional(s.string()) },
            { name: "AddressSid", value: request.addressSid, schema: s.optional(s.string()) },
            { name: "BundleSid", value: request.bundleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountIncomingPhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401IncomingPhoneNumber {
  export type CreateIncomingPhoneNumberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The API version to use for incoming calls made to the new phone number. The default is
     * `2010-04-01`.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you created to describe the new phone number. It can be up to 64
     * characters long. By default, this is a formatted version of the new phone number.
     */
    friendlyName?: string;
    /**
     * The SID of the application that should handle SMS messages sent to the new phone number. If
     * an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set
     * on the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and
     * defaults to `POST`.
     */
    smsFallbackMethod?: SmsFallbackMethod9;
    /**
     * The URL that we should call when an error occurs while requesting or executing the TwiML
     * defined by `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to
     * `POST`.
     */
    smsMethod?: SmsMethod9;
    /** The URL we should call when the new phone number receives an incoming SMS message. */
    smsUrl?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults
     * to `POST`.
     */
    statusCallbackMethod?: StatusCallbackMethod10;
    /**
     * The SID of the application we should use to handle calls to the new phone number. If a
     * `voice_application_sid` is present, we ignore all of the voice urls and use only those set on
     * the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid`
     * and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether to lookup the caller's name from the CNAM database and post it to your app. Can be:
     * `true` or `false` and defaults to `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and
     * defaults to `POST`.
     */
    voiceFallbackMethod?: VoiceFallbackMethod9;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested
     * by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults
     * to `POST`.
     */
    voiceMethod?: VoiceMethod9;
    /**
     * The URL that we should call to answer a call to the new phone number. The `voice_url` will
     * not be called if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
    /**
     * The parameter displays if emergency calling is enabled for this number. Active numbers may
     * place emergency calls by dialing valid emergency numbers for the country.
     */
    emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
    /**
     * The SID of the emergency address configuration to use for emergency calling from the new
     * phone number.
     */
    emergencyAddressSid?: string;
    /**
     * The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid`
     * is present, we ignore all of the voice urls and voice applications and use only those set on
     * the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and
     * vice versa.
     */
    trunkSid?: string;
    /**
     * The SID of the Identity resource that we should associate with the new phone number. Some
     * regions require an identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The SID of the Address resource we should associate with the new phone number. Some regions
     * require addresses to meet local regulations.
     */
    addressSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require
     * a Bundle to meet local Regulations.
     */
    bundleSid?: string;
    /**
     * The phone number to purchase specified in
     * [E.164](https://www.twilio.com/docs/glossary/what-e164) format. E.164 phone numbers consist
     * of a + followed by the country code and subscriber number without punctuation characters. For
     * example, +14155551234.
     */
    phoneNumber?: string;
    /**
     * The desired area code for your new incoming phone number. Can be any three-digit, US or
     * Canada area code. We will provision an available phone number within this area code for you.
     * **You must provide an `area_code` or a `phone_number`.** (US and Canada only).
     */
    areaCode?: string;
  };

  export type DeleteIncomingPhoneNumberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IncomingPhoneNumber resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to
     * delete.
     */
    sid: string;
  };

  export type FetchIncomingPhoneNumberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IncomingPhoneNumber resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to
     * fetch.
     */
    sid: string;
  };

  export type ListIncomingPhoneNumberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IncomingPhoneNumber resources to read.
     */
    accountSid: string;
    /**
     * Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and
     * the default is `true`.
     */
    beta?: boolean;
    /** A string that identifies the IncomingPhoneNumber resources to read. */
    friendlyName?: string;
    /**
     * The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial
     * numbers and use '*' as a wildcard for any digit.
     */
    phoneNumber?: string;
    /**
     * Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By
     * default, phone numbers of all origin are included.
     */
    origin?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateIncomingPhoneNumberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IncomingPhoneNumber resource to update. For more information, see [Exchanging Numbers Between
     * Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers).
     */
    accountSidTemplate: string;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to
     * update.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * IncomingPhoneNumber resource to update. For more information, see [Exchanging Numbers Between
     * Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers).
     */
    accountSid?: string;
    /**
     * The API version to use for incoming calls made to the phone number. The default is
     * `2010-04-01`.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you created to describe this phone number. It can be up to 64
     * characters long. By default, this is a formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The SID of the application that should handle SMS messages sent to the number. If an
     * `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on
     * the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and
     * defaults to `POST`.
     */
    smsFallbackMethod?: SmsFallbackMethod9;
    /**
     * The URL that we should call when an error occurs while requesting or executing the TwiML
     * defined by `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to
     * `POST`.
     */
    smsMethod?: SmsMethod9;
    /** The URL we should call when the phone number receives an incoming SMS message. */
    smsUrl?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults
     * to `POST`.
     */
    statusCallbackMethod?: StatusCallbackMethod10;
    /**
     * The SID of the application we should use to handle phone calls to the phone number. If a
     * `voice_application_sid` is present, we ignore all of the voice urls and use only those set on
     * the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid`
     * and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether to lookup the caller's name from the CNAM database and post it to your app. Can be:
     * `true` or `false` and defaults to `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and
     * defaults to `POST`.
     */
    voiceFallbackMethod?: VoiceFallbackMethod9;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested
     * by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults
     * to `POST`.
     */
    voiceMethod?: VoiceMethod9;
    /**
     * The URL that we should call to answer a call to the phone number. The `voice_url` will not be
     * called if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
    /**
     * The parameter displays if emergency calling is enabled for this number. Active numbers may
     * place emergency calls by dialing valid emergency numbers for the country.
     */
    emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
    /**
     * The SID of the emergency address configuration to use for emergency calling from this phone
     * number.
     */
    emergencyAddressSid?: string;
    /**
     * The SID of the Trunk we should use to handle phone calls to the phone number. If a
     * `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only
     * those set on the Trunk. Setting a `trunk_sid` will automatically delete your
     * `voice_application_sid` and vice versa.
     */
    trunkSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
    /**
     * The SID of the Identity resource that we should associate with the phone number. Some regions
     * require an identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The SID of the Address resource we should associate with the phone number. Some regions
     * require addresses to meet local regulations.
     */
    addressSid?: string;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require
     * a Bundle to meet local Regulations.
     */
    bundleSid?: string;
  };
}
