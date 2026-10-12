import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import { messageEnumRiskCheckSchema, type MessageEnumRiskCheck } from "../models/message-enum-risk-check.js";
import {
  verificationEnumStatusSchema,
  type VerificationEnumStatus,
} from "../models/verification-enum-status.js";
import {
  verifyV2ServiceVerificationSchema,
  type VerifyV2ServiceVerification,
} from "../models/verify-v2-service-verification.js";
import type { Servers } from "../servers.js";

export class VerifyV2Verification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Verification using a Service
   *
   * @remarks
   * Create a new Verification using a Service
   *
   * @returns Created
   *
   * @throws {@link VerifyV2Verification.CreateVerificationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVerification(
    request: VerifyV2Verification.CreateVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, VerifyV2Verification.CreateVerificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "Channel", value: request.channel, schema: s.string() },
            { name: "CustomFriendlyName", value: request.customFriendlyName, schema: s.optional(s.string()) },
            { name: "CustomMessage", value: request.customMessage, schema: s.optional(s.string()) },
            { name: "SendDigits", value: request.sendDigits, schema: s.optional(s.string()) },
            { name: "Locale", value: request.locale, schema: s.optional(s.string()) },
            { name: "CustomCode", value: request.customCode, schema: s.optional(s.string()) },
            { name: "Amount", value: request.amount, schema: s.optional(s.string()) },
            { name: "Payee", value: request.payee, schema: s.optional(s.string()) },
            {
              name: "RateLimits",
              value: request.rateLimits,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            {
              name: "ChannelConfiguration",
              value: request.channelConfiguration,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AppHash", value: request.appHash, schema: s.optional(s.string()) },
            { name: "TemplateSid", value: request.templateSid, schema: s.optional(s.string()) },
            {
              name: "TemplateCustomSubstitutions",
              value: request.templateCustomSubstitutions,
              schema: s.optional(s.string()),
            },
            { name: "DeviceIp", value: request.deviceIp, schema: s.optional(s.string()) },
            {
              name: "EnableSnaClientToken",
              value: request.enableSnaClientToken,
              schema: s.optional(s.boolean()),
            },
            {
              name: "RiskCheck",
              value: request.riskCheck,
              schema: s.optional(s.lazy(() => messageEnumRiskCheckSchema)),
            },
            { name: "Tags", value: request.tags, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationSchema },
        errorFactory: VerifyV2Verification.CreateVerificationError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Verification
   *
   * @remarks
   * Fetch a specific Verification
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVerification(
    request: VerifyV2Verification.FetchVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications/{Sid}"),
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
        success: { kind: "json", schema: verifyV2ServiceVerificationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Verification status
   *
   * @remarks
   * Update a Verification status
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVerification(
    request: VerifyV2Verification.UpdateVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: verificationEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Verification {
  export type CreateVerificationRequest = {
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to
     * create the resource under.
     */
    serviceSid: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone
     * numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to: string;
    /**
     * The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email),
     * `sms`, `whatsapp`, `call`, `sna` or `auto`.
     */
    channel: string;
    /**
     * A custom user defined friendly name that overwrites the existing one in the verification
     * message
     */
    customFriendlyName?: string;
    /** The text of a custom message to use for the verification [DEPRECATED]. */
    customMessage?: string;
    /**
     * The digits to send after a phone call is answered, for example, to dial an extension. For
     * more information, see the Programmable Voice documentation of
     * [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits).
     */
    sendDigits?: string;
    /**
     * Locale will automatically resolve based on phone number country code for SMS, WhatsApp, and
     * call channel verifications. It will fallback to English or the template’s default translation
     * if the selected translation is not available. This parameter will override the automatic
     * locale resolution. [See supported languages and more information
     * here](https://www.twilio.com/docs/verify/supported-languages).
     */
    locale?: string;
    /**
     * A pre-generated code to use for verification. The code can be between 4 and 10 characters,
     * inclusive.
     */
    customCode?: string;
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag
     * enabled.
     */
    amount?: string;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag
     * enabled.
     */
    payee?: string;
    /**
     * The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name`
     * fields defined when [creating your Rate
     * Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs
     * represent values in the request that you are rate limiting on. You may include multiple Rate
     * Limit values in each request.
     */
    rateLimits?: Record<string, unknown>;
    /**
     * [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The
     * fields 'from' and 'from_name' are optional but if included the 'from' field must have a valid
     * email address.
     */
    channelConfiguration?: Record<string, unknown>;
    /**
     * Your [App
     * Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string)
     * to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS
     * body: `<#> Your AppName verification code is: 1234 He42w354ol9`.
     */
    appHash?: string;
    /**
     * The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will
     * override the default template for the Service. SMS and Voice channels only.
     */
    templateSid?: string;
    /**
     * A stringified JSON object in which the keys are the template's special variables and the
     * values are the variables substitutions.
     */
    templateCustomSubstitutions?: string;
    /**
     * Strongly encouraged if using the auto channel. The IP address of the client's device. If
     * provided, it has to be a valid IPv4 or IPv6 address.
     */
    deviceIp?: string;
    /**
     * An optional Boolean value to indicate the requirement of sna client token in the SNA URL
     * invocation response for added security. This token must match in the Verification Check
     * request to confirm phone number verification.
     */
    enableSnaClientToken?: boolean;
    /**
     * Risk_check overrides Fraud Prevention measures like Fraud Guard, Geo Permissions etc per
     * verification attempt basis, allowing Verify to block traffic considered fraudulent if enabled
     * or bypass active protections if disabled. Can be: `enable`(default) or `disable`. For SMS
     * channel only.
     */
    riskCheck?: MessageEnumRiskCheck;
    /**
     * A string containing a JSON map of key value pairs of tags to be recorded as metadata for the
     * message. The tags will also be included as part of the verification and message status event
     * type payloads. The object may contain up to 10 tags. Keys and values can each be up to 128
     * characters in length. **This value should not contain PII.**
     */
    tags?: string;
  };

  export class CreateVerificationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    >;

    static readonly errors: ErrorDecoders<CreateVerificationError> = [
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchVerificationRequest = {
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to
     * fetch the resource from.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Verification resource to fetch. */
    sid: string;
  };

  export type UpdateVerificationRequest = {
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to
     * update the resource from.
     */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Verification resource to update. */
    sid: string;
    /**
     * The status of the verification. Can be: `pending`, `approved`, `canceled`,
     * `max_attempts_reached`, `deleted`, `failed` or `expired`.
     */
    status: VerificationEnumStatus;
  };
}
