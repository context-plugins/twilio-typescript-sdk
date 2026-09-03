import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  createVerification(
    request: VerifyV2Verification.CreateVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, VerifyV2Verification.CreateVerificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
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

  fetchVerification(
    request: VerifyV2Verification.FetchVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceVerification, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateVerification(
    request: VerifyV2Verification.UpdateVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerification, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceVerification, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: verificationEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Verification {
  export type CreateVerificationRequest = {
    serviceSid: string;
    to: string;
    channel: string;
    customFriendlyName?: string;
    customMessage?: string;
    sendDigits?: string;
    locale?: string;
    customCode?: string;
    amount?: string;
    payee?: string;
    rateLimits?: Record<string, unknown>;
    channelConfiguration?: Record<string, unknown>;
    appHash?: string;
    templateSid?: string;
    templateCustomSubstitutions?: string;
    deviceIp?: string;
    enableSnaClientToken?: boolean;
    riskCheck?: MessageEnumRiskCheck;
    tags?: string;
  };

  export class CreateVerificationError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<CreateVerificationError> = [
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchVerificationRequest = {
    serviceSid: string;
    sid: string;
  };

  export type UpdateVerificationRequest = {
    serviceSid: string;
    sid: string;
    status: VerificationEnumStatus;
  };
}
