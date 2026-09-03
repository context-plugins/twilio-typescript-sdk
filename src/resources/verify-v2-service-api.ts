import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createService2(
    request: VerifyV2ServiceApi.CreateService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ResponseError> {
    return this.#rawClient.execute<VerifyV2Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "CodeLength", value: request.codeLength, schema: s.optional(s.number()) },
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
            { name: "Totp.TimeStep", value: request.totpTimeStep, schema: s.optional(s.number()) },
            { name: "Totp.CodeLength", value: request.totpCodeLength, schema: s.optional(s.number()) },
            { name: "Totp.Skew", value: request.totpSkew, schema: s.optional(s.number()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteService2(
    request: VerifyV2ServiceApi.DeleteService2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchService2(
    request: VerifyV2ServiceApi.FetchService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ResponseError> {
    return this.#rawClient.execute<VerifyV2Service, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listService2(
    request: VerifyV2ServiceApi.ListService2Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse1, ResponseError> {
    return this.#rawClient.execute<ListServiceResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateService2(
    request: VerifyV2ServiceApi.UpdateService2Request,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Service, ResponseError> {
    return this.#rawClient.execute<VerifyV2Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CodeLength", value: request.codeLength, schema: s.optional(s.number()) },
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
            { name: "Totp.TimeStep", value: request.totpTimeStep, schema: s.optional(s.number()) },
            { name: "Totp.CodeLength", value: request.totpCodeLength, schema: s.optional(s.number()) },
            { name: "Totp.Skew", value: request.totpSkew, schema: s.optional(s.number()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2ServiceApi {
  export type CreateService2Request = {
    friendlyName: string;
    codeLength?: number;
    lookupEnabled?: boolean;
    skipSmsToLandlines?: boolean;
    dtmfInputRequired?: boolean;
    ttsName?: string;
    psd2Enabled?: boolean;
    doNotShareWarningEnabled?: boolean;
    customCodeEnabled?: boolean;
    pushIncludeDate?: boolean;
    pushApnCredentialSid?: string;
    pushFcmCredentialSid?: string;
    totpIssuer?: string;
    totpTimeStep?: number;
    totpCodeLength?: number;
    totpSkew?: number;
    defaultTemplateSid?: string;
    whatsappMsgServiceSid?: string;
    whatsappFrom?: string;
    passkeysRelyingPartyId?: string;
    passkeysRelyingPartyName?: string;
    passkeysRelyingPartyOrigins?: string;
    passkeysAuthenticatorAttachment?: string;
    passkeysDiscoverableCredentials?: string;
    passkeysUserVerification?: string;
    verifyEventSubscriptionEnabled?: boolean;
  };

  export type DeleteService2Request = {
    sid: string;
  };

  export type FetchService2Request = {
    sid: string;
  };

  export type ListService2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateService2Request = {
    sid: string;
    friendlyName?: string;
    codeLength?: number;
    lookupEnabled?: boolean;
    skipSmsToLandlines?: boolean;
    dtmfInputRequired?: boolean;
    ttsName?: string;
    psd2Enabled?: boolean;
    doNotShareWarningEnabled?: boolean;
    customCodeEnabled?: boolean;
    pushIncludeDate?: boolean;
    pushApnCredentialSid?: string;
    pushFcmCredentialSid?: string;
    totpIssuer?: string;
    totpTimeStep?: number;
    totpCodeLength?: number;
    totpSkew?: number;
    defaultTemplateSid?: string;
    whatsappMsgServiceSid?: string;
    whatsappFrom?: string;
    passkeysRelyingPartyId?: string;
    passkeysRelyingPartyName?: string;
    passkeysRelyingPartyOrigins?: string;
    passkeysAuthenticatorAttachment?: string;
    passkeysDiscoverableCredentials?: string;
    passkeysUserVerification?: string;
    verifyEventSubscriptionEnabled?: boolean;
  };
}
