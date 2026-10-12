import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountApplicationSchema,
  type ApiV2010AccountApplication,
} from "../models/api-v2010-account-application.js";
import {
  listApplicationResponseSchema,
  type ListApplicationResponse,
} from "../models/list-application-response.js";
import { smsFallbackMethod7Schema, type SmsFallbackMethod7 } from "../models/sms-fallback-method7.js";
import { smsMethod7Schema, type SmsMethod7 } from "../models/sms-method7.js";
import {
  statusCallbackMethod6Schema,
  type StatusCallbackMethod6,
} from "../models/status-callback-method6.js";
import { voiceFallbackMethod7Schema, type VoiceFallbackMethod7 } from "../models/voice-fallback-method7.js";
import { voiceMethod7Schema, type VoiceMethod7 } from "../models/voice-method7.js";
import type { Servers } from "../servers.js";

export class Api20100401Application {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new application within your account
   *
   * @remarks
   * Create a new application within your account
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApplication(
    request: Api20100401Application.CreateApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "VoiceUrl", value: request.voiceUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceMethod",
              value: request.voiceMethod,
              schema: s.optional(s.lazy(() => voiceMethod7Schema)),
            },
            { name: "VoiceFallbackUrl", value: request.voiceFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceFallbackMethod",
              value: request.voiceFallbackMethod,
              schema: s.optional(s.lazy(() => voiceFallbackMethod7Schema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod6Schema)),
            },
            {
              name: "VoiceCallerIdLookup",
              value: request.voiceCallerIdLookup,
              schema: s.optional(s.boolean()),
            },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod7Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod7Schema)),
            },
            { name: "SmsStatusCallback", value: request.smsStatusCallback, schema: s.optional(s.string()) },
            {
              name: "MessageStatusCallback",
              value: request.messageStatusCallback,
              schema: s.optional(s.string()),
            },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "PublicApplicationConnectEnabled",
              value: request.publicApplicationConnectEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountApplicationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete the application by the specified application sid
   *
   * @remarks
   * Delete the application by the specified application sid
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApplication(
    request: Api20100401Application.DeleteApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
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
   * Fetch the application specified by the provided sid
   *
   * @remarks
   * Fetch the application specified by the provided sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchApplication(
    request: Api20100401Application.FetchApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountApplicationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of applications representing an application within the requesting account
   *
   * @remarks
   * Retrieve a list of applications representing an application within the requesting account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApplication(
    request: Api20100401Application.ListApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListApplicationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listApplicationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates the application's properties
   *
   * @remarks
   * Updates the application's properties
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateApplication(
    request: Api20100401Application.UpdateApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "VoiceUrl", value: request.voiceUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceMethod",
              value: request.voiceMethod,
              schema: s.optional(s.lazy(() => voiceMethod7Schema)),
            },
            { name: "VoiceFallbackUrl", value: request.voiceFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceFallbackMethod",
              value: request.voiceFallbackMethod,
              schema: s.optional(s.lazy(() => voiceFallbackMethod7Schema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod6Schema)),
            },
            {
              name: "VoiceCallerIdLookup",
              value: request.voiceCallerIdLookup,
              schema: s.optional(s.boolean()),
            },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod7Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod7Schema)),
            },
            { name: "SmsStatusCallback", value: request.smsStatusCallback, schema: s.optional(s.string()) },
            {
              name: "MessageStatusCallback",
              value: request.messageStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "PublicApplicationConnectEnabled",
              value: request.publicApplicationConnectEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountApplicationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Application {
  export type CreateApplicationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
     * The default value is the account's default API version.
     */
    apiVersion?: string;
    /**
     * The URL we should call when the phone number assigned to this application receives a call.
     */
    voiceUrl?: string;
    /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
    voiceMethod?: VoiceMethod7;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested
     * by `url`.
     */
    voiceFallbackUrl?: string;
    /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
    voiceFallbackMethod?: VoiceFallbackMethod7;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
    statusCallbackMethod?: StatusCallbackMethod6;
    /**
     * Whether we should look up the caller's caller-ID name from the CNAM database (additional
     * charges apply). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /** The URL we should call when the phone number receives an incoming SMS message. */
    smsUrl?: string;
    /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
    smsMethod?: SmsMethod7;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML from
     * `sms_url`.
     */
    smsFallbackUrl?: string;
    /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
    smsFallbackMethod?: SmsFallbackMethod7;
    /**
     * The URL we should call using a POST method to send status information about SMS messages sent
     * by the application.
     */
    smsStatusCallback?: string;
    /**
     * The URL we should call using a POST method to send message status information to your
     * application.
     */
    messageStatusCallback?: string;
    /**
     * A descriptive string that you create to describe the new application. It can be up to 64
     * characters long.
     */
    friendlyName?: string;
    /**
     * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be:
     * `true` or `false`.
     */
    publicApplicationConnectEnabled?: boolean;
  };

  export type DeleteApplicationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Application resources to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Application resource to delete. */
    sid: string;
  };

  export type FetchApplicationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Application resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Application resource to fetch. */
    sid: string;
  };

  export type ListApplicationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Application resources to read.
     */
    accountSid: string;
    /** The string that identifies the Application resources to read. */
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

  export type UpdateApplicationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Application resources to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Application resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
     * The default value is your account's default API version.
     */
    apiVersion?: string;
    /**
     * The URL we should call when the phone number assigned to this application receives a call.
     */
    voiceUrl?: string;
    /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
    voiceMethod?: VoiceMethod7;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested
     * by `url`.
     */
    voiceFallbackUrl?: string;
    /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
    voiceFallbackMethod?: VoiceFallbackMethod7;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
    statusCallbackMethod?: StatusCallbackMethod6;
    /**
     * Whether we should look up the caller's caller-ID name from the CNAM database (additional
     * charges apply). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /** The URL we should call when the phone number receives an incoming SMS message. */
    smsUrl?: string;
    /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
    smsMethod?: SmsMethod7;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML from
     * `sms_url`.
     */
    smsFallbackUrl?: string;
    /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
    smsFallbackMethod?: SmsFallbackMethod7;
    /**
     * Same as message_status_callback: The URL we should call using a POST method to send status
     * information about SMS messages sent by the application. Deprecated, included for backwards
     * compatibility.
     */
    smsStatusCallback?: string;
    /**
     * The URL we should call using a POST method to send message status information to your
     * application.
     */
    messageStatusCallback?: string;
    /**
     * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be:
     * `true` or `false`.
     */
    publicApplicationConnectEnabled?: boolean;
  };
}
