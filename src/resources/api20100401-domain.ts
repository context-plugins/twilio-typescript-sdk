import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipDomainSchema,
  type ApiV2010AccountSipSipDomain,
} from "../models/api-v2010-account-sip-sip-domain.js";
import {
  listSipDomainResponseSchema,
  type ListSipDomainResponse,
} from "../models/list-sip-domain-response.js";
import { voiceFallbackMethod7Schema, type VoiceFallbackMethod7 } from "../models/voice-fallback-method7.js";
import { voiceMethod15Schema, type VoiceMethod15 } from "../models/voice-method15.js";
import { voiceMethod7Schema, type VoiceMethod7 } from "../models/voice-method7.js";
import {
  voiceStatusCallbackMethod1Schema,
  type VoiceStatusCallbackMethod1,
} from "../models/voice-status-callback-method1.js";
import type { Servers } from "../servers.js";

export class Api20100401Domain {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Domain
   *
   * @remarks
   * Create a new Domain
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipDomain(
    request: Api20100401Domain.CreateSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "DomainName", value: request.domainName, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
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
            {
              name: "VoiceStatusCallbackUrl",
              value: request.voiceStatusCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "VoiceStatusCallbackMethod",
              value: request.voiceStatusCallbackMethod,
              schema: s.optional(s.lazy(() => voiceStatusCallbackMethod1Schema)),
            },
            { name: "SipRegistration", value: request.sipRegistration, schema: s.optional(s.boolean()) },
            {
              name: "EmergencyCallingEnabled",
              value: request.emergencyCallingEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "Secure", value: request.secure, schema: s.optional(s.boolean()) },
            { name: "ByocTrunkSid", value: request.byocTrunkSid, schema: s.optional(s.string()) },
            { name: "EmergencyCallerSid", value: request.emergencyCallerSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an instance of a Domain
   *
   * @remarks
   * Delete an instance of a Domain
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipDomain(
    request: Api20100401Domain.DeleteSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
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
   * Fetch an instance of a Domain
   *
   * @remarks
   * Fetch an instance of a Domain
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSipDomain(
    request: Api20100401Domain.FetchSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of domains belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of domains belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipDomain(
    request: Api20100401Domain.ListSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipDomainResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipDomainResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the attributes of a domain
   *
   * @remarks
   * Update the attributes of a domain
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipDomain(
    request: Api20100401Domain.UpdateSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
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
            {
              name: "VoiceFallbackMethod",
              value: request.voiceFallbackMethod,
              schema: s.optional(s.lazy(() => voiceFallbackMethod7Schema)),
            },
            { name: "VoiceFallbackUrl", value: request.voiceFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "VoiceMethod",
              value: request.voiceMethod,
              schema: s.optional(s.lazy(() => voiceMethod15Schema)),
            },
            {
              name: "VoiceStatusCallbackMethod",
              value: request.voiceStatusCallbackMethod,
              schema: s.optional(s.lazy(() => voiceStatusCallbackMethod1Schema)),
            },
            {
              name: "VoiceStatusCallbackUrl",
              value: request.voiceStatusCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "VoiceUrl", value: request.voiceUrl, schema: s.optional(s.string()) },
            { name: "SipRegistration", value: request.sipRegistration, schema: s.optional(s.boolean()) },
            { name: "DomainName", value: request.domainName, schema: s.optional(s.string()) },
            {
              name: "EmergencyCallingEnabled",
              value: request.emergencyCallingEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "Secure", value: request.secure, schema: s.optional(s.boolean()) },
            { name: "ByocTrunkSid", value: request.byocTrunkSid, schema: s.optional(s.string()) },
            { name: "EmergencyCallerSid", value: request.emergencyCallerSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Domain {
  export type CreateSipDomainRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names
     * can contain letters, digits, and "-" and must end with `sip.twilio.com`.
     */
    domainName: string;
    /**
     * A descriptive string that you created to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /** The URL we should when the domain receives a call. */
    voiceUrl?: string;
    /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
    voiceMethod?: VoiceMethod7;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML from
     * `voice_url`.
     */
    voiceFallbackUrl?: string;
    /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
    voiceFallbackMethod?: VoiceFallbackMethod7;
    /**
     * The URL that we should call to pass status parameters (such as call ended) to your
     * application.
     */
    voiceStatusCallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
     */
    voiceStatusCallbackMethod?: VoiceStatusCallbackMethod1;
    /**
     * Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or
     * `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false`
     * does not.
     */
    sipRegistration?: boolean;
    /**
     * Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on
     * the domain from phone numbers with validated addresses.
     */
    emergencyCallingEnabled?: boolean;
    /**
     * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will
     * be negotiated on all incoming calls to this sip domain.
     */
    secure?: boolean;
    /**
     * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be
     * associated with.
     */
    byocTrunkSid?: string;
    /**
     * Whether an emergency caller sid is configured for the domain. If present, this phone number
     * will be used as the callback for the emergency call.
     */
    emergencyCallerSid?: string;
  };

  export type DeleteSipDomainRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * SipDomain resources to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the SipDomain resource to delete. */
    sid: string;
  };

  export type FetchSipDomainRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * SipDomain resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the SipDomain resource to fetch. */
    sid: string;
  };

  export type ListSipDomainRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * SipDomain resources to read.
     */
    accountSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSipDomainRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * SipDomain resource to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the SipDomain resource to update. */
    sid: string;
    /**
     * A descriptive string that you created to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
    voiceFallbackMethod?: VoiceFallbackMethod7;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML
     * requested by `voice_url`.
     */
    voiceFallbackUrl?: string;
    /** The HTTP method we should use to call `voice_url` */
    voiceMethod?: VoiceMethod15;
    /**
     * The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
     */
    voiceStatusCallbackMethod?: VoiceStatusCallbackMethod1;
    /**
     * The URL that we should call to pass status parameters (such as call ended) to your
     * application.
     */
    voiceStatusCallbackUrl?: string;
    /** The URL we should call when the domain receives a call. */
    voiceUrl?: string;
    /**
     * Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or
     * `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false`
     * does not.
     */
    sipRegistration?: boolean;
    /**
     * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names
     * can contain letters, digits, and "-" and must end with `sip.twilio.com`.
     */
    domainName?: string;
    /**
     * Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on
     * the domain from phone numbers with validated addresses.
     */
    emergencyCallingEnabled?: boolean;
    /**
     * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will
     * be negotiated on all incoming calls to this sip domain.
     */
    secure?: boolean;
    /**
     * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be
     * associated with.
     */
    byocTrunkSid?: string;
    /**
     * Whether an emergency caller sid is configured for the domain. If present, this phone number
     * will be used as the callback for the emergency call.
     */
    emergencyCallerSid?: string;
  };
}
