import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createSipDomain(
    request: Api20100401Domain.CreateSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomain, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipDomain(
    request: Api20100401Domain.DeleteSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchSipDomain(
    request: Api20100401Domain.FetchSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomain, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipDomainSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipDomain(
    request: Api20100401Domain.ListSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipDomainResponse, ResponseError> {
    return this.#rawClient.execute<ListSipDomainResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipDomainResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSipDomain(
    request: Api20100401Domain.UpdateSipDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipDomain, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Domain {
  export type CreateSipDomainRequest = {
    accountSid: string;
    domainName: string;
    friendlyName?: string;
    voiceUrl?: string;
    voiceMethod?: VoiceMethod7;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: VoiceFallbackMethod7;
    voiceStatusCallbackUrl?: string;
    voiceStatusCallbackMethod?: VoiceStatusCallbackMethod1;
    sipRegistration?: boolean;
    emergencyCallingEnabled?: boolean;
    secure?: boolean;
    byocTrunkSid?: string;
    emergencyCallerSid?: string;
  };

  export type DeleteSipDomainRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchSipDomainRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListSipDomainRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSipDomainRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
    voiceFallbackMethod?: VoiceFallbackMethod7;
    voiceFallbackUrl?: string;
    voiceMethod?: VoiceMethod15;
    voiceStatusCallbackMethod?: VoiceStatusCallbackMethod1;
    voiceStatusCallbackUrl?: string;
    voiceUrl?: string;
    sipRegistration?: boolean;
    domainName?: string;
    emergencyCallingEnabled?: boolean;
    secure?: boolean;
    byocTrunkSid?: string;
    emergencyCallerSid?: string;
  };
}
