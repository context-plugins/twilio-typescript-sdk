import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal,
} from "../models/api-v2010-account-incoming-phone-number-incoming-phone-number-local.js";
import {
  incomingPhoneNumberLocalEnumEmergencyStatusSchema,
  type IncomingPhoneNumberLocalEnumEmergencyStatus,
} from "../models/incoming-phone-number-local-enum-emergency-status.js";
import {
  incomingPhoneNumberLocalEnumVoiceReceiveModeSchema,
  type IncomingPhoneNumberLocalEnumVoiceReceiveMode,
} from "../models/incoming-phone-number-local-enum-voice-receive-mode.js";
import {
  listIncomingPhoneNumberLocalResponseSchema,
  type ListIncomingPhoneNumberLocalResponse,
} from "../models/list-incoming-phone-number-local-response.js";
import { smsFallbackMethod9Schema, type SmsFallbackMethod9 } from "../models/sms-fallback-method9.js";
import { smsMethod9Schema, type SmsMethod9 } from "../models/sms-method9.js";
import {
  statusCallbackMethod10Schema,
  type StatusCallbackMethod10,
} from "../models/status-callback-method10.js";
import { voiceFallbackMethod9Schema, type VoiceFallbackMethod9 } from "../models/voice-fallback-method9.js";
import { voiceMethod9Schema, type VoiceMethod9 } from "../models/voice-method9.js";
import type { Servers } from "../servers.js";

export class Api20100401IncomingPhoneNumberLocal {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Incoming local phone numbers on a Twilio account/project
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIncomingPhoneNumberLocal(
    request: Api20100401IncomingPhoneNumberLocal.CreateIncomingPhoneNumberLocalRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
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
            { name: "IdentitySid", value: request.identitySid, schema: s.optional(s.string()) },
            { name: "AddressSid", value: request.addressSid, schema: s.optional(s.string()) },
            {
              name: "EmergencyStatus",
              value: request.emergencyStatus,
              schema: s.optional(s.lazy(() => incomingPhoneNumberLocalEnumEmergencyStatusSchema)),
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
              schema: s.optional(s.lazy(() => incomingPhoneNumberLocalEnumVoiceReceiveModeSchema)),
            },
            { name: "BundleSid", value: request.bundleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Incoming local phone numbers on a Twilio account/project
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIncomingPhoneNumberLocal(
    request: Api20100401IncomingPhoneNumberLocal.ListIncomingPhoneNumberLocalRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberLocalResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json",
        ),
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
        success: { kind: "json", schema: listIncomingPhoneNumberLocalResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401IncomingPhoneNumberLocal {
  export type CreateIncomingPhoneNumberLocalRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The phone number to purchase specified in
     * [E.164](https://www.twilio.com/docs/glossary/what-e164) format. E.164 phone numbers consist
     * of a + followed by the country code and subscriber number without punctuation characters. For
     * example, +14155551234.
     */
    phoneNumber: string;
    /**
     * The API version to use for incoming calls made to the new phone number. The default is
     * `2010-04-01`.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you created to describe the new phone number. It can be up to 64
     * characters long. By default, this is a formatted version of the phone number.
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
     * The SID of the Identity resource that we should associate with the new phone number. Some
     * regions require an identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The SID of the Address resource we should associate with the new phone number. Some regions
     * require addresses to meet local regulations.
     */
    addressSid?: string;
    /**
     * The parameter displays if emergency calling is enabled for this number. Active numbers may
     * place emergency calls by dialing valid emergency numbers for the country.
     */
    emergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatus;
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
    voiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require
     * a Bundle to meet local Regulations.
     */
    bundleSid?: string;
  };

  export type ListIncomingPhoneNumberLocalRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resources to read.
     */
    accountSid: string;
    /**
     * Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and
     * the default is `true`.
     */
    beta?: boolean;
    /** A string that identifies the resources to read. */
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
}
