import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createApplication(
    request: Api20100401Application.CreateApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountApplication, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteApplication(
    request: Api20100401Application.DeleteApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
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

  fetchApplication(
    request: Api20100401Application.FetchApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountApplication, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountApplicationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listApplication(
    request: Api20100401Application.ListApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListApplicationResponse, ResponseError> {
    return this.#rawClient.execute<ListApplicationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listApplicationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateApplication(
    request: Api20100401Application.UpdateApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountApplication, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountApplication, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Application {
  export type CreateApplicationRequest = {
    accountSid: string;
    apiVersion?: string;
    voiceUrl?: string;
    voiceMethod?: VoiceMethod7;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: VoiceFallbackMethod7;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod6;
    voiceCallerIdLookup?: boolean;
    smsUrl?: string;
    smsMethod?: SmsMethod7;
    smsFallbackUrl?: string;
    smsFallbackMethod?: SmsFallbackMethod7;
    smsStatusCallback?: string;
    messageStatusCallback?: string;
    friendlyName?: string;
    publicApplicationConnectEnabled?: boolean;
  };

  export type DeleteApplicationRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchApplicationRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListApplicationRequest = {
    accountSid: string;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateApplicationRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
    apiVersion?: string;
    voiceUrl?: string;
    voiceMethod?: VoiceMethod7;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: VoiceFallbackMethod7;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod6;
    voiceCallerIdLookup?: boolean;
    smsUrl?: string;
    smsMethod?: SmsMethod7;
    smsFallbackUrl?: string;
    smsFallbackMethod?: SmsFallbackMethod7;
    smsStatusCallback?: string;
    messageStatusCallback?: string;
    publicApplicationConnectEnabled?: boolean;
  };
}
