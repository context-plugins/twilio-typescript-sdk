import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listServiceResponse1Schema, type ListServiceResponse1 } from "../models/list-service-response1.js";
import { verifyV2ServiceSchema, type VerifyV2Service } from "../models/verify-v2-service.js";
import type { Servers } from "../servers.js";

export class VerifyV2ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Verification Service.
   *
   * @remarks
   * Create a new Verification Service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createService2(
    request: VerifyV2ServiceApi.CreateService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "CodeLength", value: request.codeLength, schema: s.optional(s.int()) },
            { name: "LookupEnabled", value: request.lookupEnabled, schema: s.optional(s.boolean()) },
            {
              name: "SkipSmsToLandlines",
              value: request.skipSmsToLandlines,
              schema: s.optional(s.boolean()),
            },
            { name: "DtmfInputRequired", value: request.dtmfInputRequired, schema: s.optional(s.boolean()) },
            { name: "TtsName", value: request.ttsName, schema: s.optional(s.string()) },
            { name: "Psd2Enabled", value: request.psd2Enabled, schema: s.optional(s.boolean()) },
            {
              name: "DoNotShareWarningEnabled",
              value: request.doNotShareWarningEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "CustomCodeEnabled", value: request.customCodeEnabled, schema: s.optional(s.boolean()) },
            { name: "Push.IncludeDate", value: request.pushIncludeDate, schema: s.optional(s.boolean()) },
            {
              name: "Push.ApnCredentialSid",
              value: request.pushApnCredentialSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Push.FcmCredentialSid",
              value: request.pushFcmCredentialSid,
              schema: s.optional(s.string()),
            },
            { name: "Totp.Issuer", value: request.totpIssuer, schema: s.optional(s.string()) },
            { name: "Totp.TimeStep", value: request.totpTimeStep, schema: s.optional(s.int()) },
            { name: "Totp.CodeLength", value: request.totpCodeLength, schema: s.optional(s.int()) },
            { name: "Totp.Skew", value: request.totpSkew, schema: s.optional(s.int()) },
            { name: "DefaultTemplateSid", value: request.defaultTemplateSid, schema: s.optional(s.string()) },
            {
              name: "Whatsapp.MsgServiceSid",
              value: request.whatsappMsgServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "Whatsapp.From", value: request.whatsappFrom, schema: s.optional(s.string()) },
            {
              name: "Passkeys.RelyingParty.Id",
              value: request.passkeysRelyingPartyId,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.RelyingParty.Name",
              value: request.passkeysRelyingPartyName,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.RelyingParty.Origins",
              value: request.passkeysRelyingPartyOrigins,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.AuthenticatorAttachment",
              value: request.passkeysAuthenticatorAttachment,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.DiscoverableCredentials",
              value: request.passkeysDiscoverableCredentials,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.UserVerification",
              value: request.passkeysUserVerification,
              schema: s.optional(s.string()),
            },
            {
              name: "VerifyEventSubscriptionEnabled",
              value: request.verifyEventSubscriptionEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Verification Service Instance.
   *
   * @remarks
   * Delete a specific Verification Service Instance.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteService2(
    request: VerifyV2ServiceApi.DeleteService2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{Sid}"),
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
   * Fetch specific Verification Service Instance.
   *
   * @remarks
   * Fetch specific Verification Service Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchService2(
    request: VerifyV2ServiceApi.FetchService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Verification Services for an account.
   *
   * @remarks
   * Retrieve a list of all Verification Services for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listService2(
    request: VerifyV2ServiceApi.ListService2Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Verification Service.
   *
   * @remarks
   * Update a specific Verification Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateService2(
    request: VerifyV2ServiceApi.UpdateService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CodeLength", value: request.codeLength, schema: s.optional(s.int()) },
            { name: "LookupEnabled", value: request.lookupEnabled, schema: s.optional(s.boolean()) },
            {
              name: "SkipSmsToLandlines",
              value: request.skipSmsToLandlines,
              schema: s.optional(s.boolean()),
            },
            { name: "DtmfInputRequired", value: request.dtmfInputRequired, schema: s.optional(s.boolean()) },
            { name: "TtsName", value: request.ttsName, schema: s.optional(s.string()) },
            { name: "Psd2Enabled", value: request.psd2Enabled, schema: s.optional(s.boolean()) },
            {
              name: "DoNotShareWarningEnabled",
              value: request.doNotShareWarningEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "CustomCodeEnabled", value: request.customCodeEnabled, schema: s.optional(s.boolean()) },
            { name: "Push.IncludeDate", value: request.pushIncludeDate, schema: s.optional(s.boolean()) },
            {
              name: "Push.ApnCredentialSid",
              value: request.pushApnCredentialSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Push.FcmCredentialSid",
              value: request.pushFcmCredentialSid,
              schema: s.optional(s.string()),
            },
            { name: "Totp.Issuer", value: request.totpIssuer, schema: s.optional(s.string()) },
            { name: "Totp.TimeStep", value: request.totpTimeStep, schema: s.optional(s.int()) },
            { name: "Totp.CodeLength", value: request.totpCodeLength, schema: s.optional(s.int()) },
            { name: "Totp.Skew", value: request.totpSkew, schema: s.optional(s.int()) },
            { name: "DefaultTemplateSid", value: request.defaultTemplateSid, schema: s.optional(s.string()) },
            {
              name: "Whatsapp.MsgServiceSid",
              value: request.whatsappMsgServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "Whatsapp.From", value: request.whatsappFrom, schema: s.optional(s.string()) },
            {
              name: "Passkeys.RelyingParty.Id",
              value: request.passkeysRelyingPartyId,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.RelyingParty.Name",
              value: request.passkeysRelyingPartyName,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.RelyingParty.Origins",
              value: request.passkeysRelyingPartyOrigins,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.AuthenticatorAttachment",
              value: request.passkeysAuthenticatorAttachment,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.DiscoverableCredentials",
              value: request.passkeysDiscoverableCredentials,
              schema: s.optional(s.string()),
            },
            {
              name: "Passkeys.UserVerification",
              value: request.passkeysUserVerification,
              schema: s.optional(s.string()),
            },
            {
              name: "VerifyEventSubscriptionEnabled",
              value: request.verifyEventSubscriptionEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2ServiceApi {
  export type CreateService2Request = {
    /**
     * A descriptive string that you create to describe the verification service. It can be up to 32
     * characters long. **This value should not contain PII.**
     */
    friendlyName: string;
    /**
     * The length of the verification code to generate. Must be an integer value between 4 and 10,
     * inclusive.
     */
    codeLength?: number;
    /**
     * Whether to perform a lookup with each verification started and return info about the phone
     * number.
     */
    lookupEnabled?: boolean;
    /** Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
    skipSmsToLandlines?: boolean;
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call.
     */
    dtmfInputRequired?: boolean;
    /**
     * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS
     * languages.
     */
    ttsName?: string;
    /** Whether to pass PSD2 transaction parameters when starting a verification. */
    psd2Enabled?: boolean;
    /**
     * Whether to add a security warning at the end of an SMS verification body. Disabled by default
     * and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t
     * share this code with anyone; our employees will never ask for the code`
     */
    doNotShareWarningEnabled?: boolean;
    /**
     * Whether to allow sending verifications with a custom code instead of a randomly generated
     * one.
     */
    customCodeEnabled?: boolean;
    /**
     * Optional configuration for the Push factors. If true, include the date in the Challenge's
     * response. Otherwise, the date is omitted from the response. See
     * [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter
     * for more info. Default: false. **Deprecated** do not use this parameter. This timestamp value
     * is the same one as the one found in `date_created`, please use that one instead.
     */
    pushIncludeDate?: boolean;
    /**
     * Optional configuration for the Push factors. Set the APN Credential for this service. This
     * will allow to send push notifications to iOS devices. See [Credential
     * Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushApnCredentialSid?: string;
    /**
     * Optional configuration for the Push factors. Set the FCM Credential for this service. This
     * will allow to send push notifications to Android devices. See [Credential
     * Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushFcmCredentialSid?: string;
    /**
     * Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will
     * allow to configure the issuer of the TOTP URI. Defaults to the service friendly name if not
     * provided.
     */
    totpIssuer?: string;
    /**
     * Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes
     * generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and
     * 60 seconds, inclusive. Defaults to 30 seconds
     */
    totpTimeStep?: number;
    /**
     * Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must
     * be between 3 and 8, inclusive. Defaults to 6
     */
    totpCodeLength?: number;
    /**
     * Optional configuration for the TOTP factors. The number of time-steps, past and future, that
     * are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
     */
    totpSkew?: number;
    /**
     * The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be
     * used for all SMS verifications unless explicitly overriden. SMS channel only.
     */
    defaultTemplateSid?: string;
    /**
     * The SID of the Messaging Service containing WhatsApp Sender(s) that Verify will use to send
     * WhatsApp messages to your users.
     */
    whatsappMsgServiceSid?: string;
    /**
     * The number to use as the WhatsApp Sender that Verify will use to send WhatsApp messages to
     * your users.This WhatsApp Sender must be associated with a Messaging Service SID.
     */
    whatsappFrom?: string;
    /**
     * The Relying Party ID for Passkeys. This is the domain of your application, e.g.
     * `example.com`. It is used to identify your application when creating Passkeys.
     */
    passkeysRelyingPartyId?: string;
    /**
     * The Relying Party Name for Passkeys. This is the name of your application, e.g. `Example
     * App`. It is used to identify your application when creating Passkeys.
     */
    passkeysRelyingPartyName?: string;
    /**
     * The Relying Party Origins for Passkeys. This is the origin of your application, e.g.
     * `login.example.com,www.example.com`. It is used to identify your application when creating
     * Passkeys, it can have multiple origins split by `,`.
     */
    passkeysRelyingPartyOrigins?: string;
    /**
     * The Authenticator Attachment for Passkeys. This is the type of authenticator that will be
     * used to create Passkeys. It can be empty or it can have the values `platform`,
     * `cross-platform` or `any`.
     */
    passkeysAuthenticatorAttachment?: string;
    /**
     * Indicates whether credentials must be discoverable by the authenticator. It can be empty or
     * it can have the values `required`, `preferred` or `discouraged`.
     */
    passkeysDiscoverableCredentials?: string;
    /**
     * The User Verification for Passkeys. This is the type of user verification that will be used
     * to create Passkeys. It can be empty or it can have the values `required`, `preferred` or
     * `discouraged`.
     */
    passkeysUserVerification?: string;
    /**
     * Whether to allow verifications from the service to reach the stream-events sinks if
     * configured
     */
    verifyEventSubscriptionEnabled?: boolean;
  };

  export type DeleteService2Request = {
    /**
     * The Twilio-provided string that uniquely identifies the Verification Service resource to
     * delete.
     */
    sid: string;
  };

  export type FetchService2Request = {
    /**
     * The Twilio-provided string that uniquely identifies the Verification Service resource to
     * fetch.
     */
    sid: string;
  };

  export type ListService2Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateService2Request = {
    /** The Twilio-provided string that uniquely identifies the Service resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the verification service. It can be up to 32
     * characters long. **This value should not contain PII.**
     */
    friendlyName?: string;
    /**
     * The length of the verification code to generate. Must be an integer value between 4 and 10,
     * inclusive.
     */
    codeLength?: number;
    /**
     * Whether to perform a lookup with each verification started and return info about the phone
     * number.
     */
    lookupEnabled?: boolean;
    /** Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
    skipSmsToLandlines?: boolean;
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call.
     */
    dtmfInputRequired?: boolean;
    /**
     * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS
     * languages.
     */
    ttsName?: string;
    /** Whether to pass PSD2 transaction parameters when starting a verification. */
    psd2Enabled?: boolean;
    /**
     * Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only
     * for SMS.**
     */
    doNotShareWarningEnabled?: boolean;
    /**
     * Whether to allow sending verifications with a custom code instead of a randomly generated
     * one.
     */
    customCodeEnabled?: boolean;
    /**
     * Optional configuration for the Push factors. If true, include the date in the Challenge's
     * response. Otherwise, the date is omitted from the response. See
     * [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter
     * for more info. Default: false. **Deprecated** do not use this parameter.
     */
    pushIncludeDate?: boolean;
    /**
     * Optional configuration for the Push factors. Set the APN Credential for this service. This
     * will allow to send push notifications to iOS devices. See [Credential
     * Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushApnCredentialSid?: string;
    /**
     * Optional configuration for the Push factors. Set the FCM Credential for this service. This
     * will allow to send push notifications to Android devices. See [Credential
     * Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushFcmCredentialSid?: string;
    /**
     * Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will
     * allow to configure the issuer of the TOTP URI.
     */
    totpIssuer?: string;
    /**
     * Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes
     * generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and
     * 60 seconds, inclusive. Defaults to 30 seconds
     */
    totpTimeStep?: number;
    /**
     * Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must
     * be between 3 and 8, inclusive. Defaults to 6
     */
    totpCodeLength?: number;
    /**
     * Optional configuration for the TOTP factors. The number of time-steps, past and future, that
     * are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
     */
    totpSkew?: number;
    /**
     * The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be
     * used for all SMS verifications unless explicitly overriden. SMS channel only.
     */
    defaultTemplateSid?: string;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) to
     * associate with the Verification Service.
     */
    whatsappMsgServiceSid?: string;
    /**
     * The WhatsApp number to use as the sender of the verification messages. This number must be
     * associated with the WhatsApp Message Service.
     */
    whatsappFrom?: string;
    /**
     * The Relying Party ID for Passkeys. This is the domain of your application, e.g.
     * `example.com`. It is used to identify your application when creating Passkeys.
     */
    passkeysRelyingPartyId?: string;
    /**
     * The Relying Party Name for Passkeys. This is the name of your application, e.g. `Example
     * App`. It is used to identify your application when creating Passkeys.
     */
    passkeysRelyingPartyName?: string;
    /**
     * The Relying Party Origins for Passkeys. This is the origin of your application, e.g.
     * `login.example.com,www.example.com`. It is used to identify your application when creating
     * Passkeys, it can have multiple origins split by `,`.
     */
    passkeysRelyingPartyOrigins?: string;
    /**
     * The Authenticator Attachment for Passkeys. This is the type of authenticator that will be
     * used to create Passkeys. It can be empty or it can have the values `platform`,
     * `cross-platform` or `any`.
     */
    passkeysAuthenticatorAttachment?: string;
    /**
     * Indicates whether credentials must be discoverable by the authenticator. It can be empty or
     * it can have the values `required`, `preferred` or `discouraged`.
     */
    passkeysDiscoverableCredentials?: string;
    /**
     * The User Verification for Passkeys. This is the type of user verification that will be used
     * to create Passkeys. It can be empty or it can have the values `required`, `preferred` or
     * `discouraged`.
     */
    passkeysUserVerification?: string;
    /**
     * Whether to allow verifications from the service to reach the stream-events sinks if
     * configured
     */
    verifyEventSubscriptionEnabled?: boolean;
  };
}
