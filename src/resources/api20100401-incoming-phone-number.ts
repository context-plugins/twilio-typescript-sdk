import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.CreateIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumber, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.DeleteIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json"),
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

  fetchIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.FetchIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumber, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountIncomingPhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.ListIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberResponse, ResponseError> {
    return this.#rawClient.execute<ListIncomingPhoneNumberResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "Beta", value: request.beta, schema: s.optional(s.boolean()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIncomingPhoneNumberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateIncomingPhoneNumber(
    request: Api20100401IncomingPhoneNumber.UpdateIncomingPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumber, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSidTemplate, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401IncomingPhoneNumber {
  export type CreateIncomingPhoneNumberRequest = {
    accountSid: string;
    apiVersion?: string;
    friendlyName?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: SmsFallbackMethod9;
    smsFallbackUrl?: string;
    smsMethod?: SmsMethod9;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod10;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: VoiceFallbackMethod9;
    voiceFallbackUrl?: string;
    voiceMethod?: VoiceMethod9;
    voiceUrl?: string;
    emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    identitySid?: string;
    addressSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
    bundleSid?: string;
    phoneNumber?: string;
    areaCode?: string;
  };

  export type DeleteIncomingPhoneNumberRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchIncomingPhoneNumberRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListIncomingPhoneNumberRequest = {
    accountSid: string;
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateIncomingPhoneNumberRequest = {
    accountSidTemplate: string;
    sid: string;
    accountSid?: string;
    apiVersion?: string;
    friendlyName?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: SmsFallbackMethod9;
    smsFallbackUrl?: string;
    smsMethod?: SmsMethod9;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod10;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: VoiceFallbackMethod9;
    voiceFallbackUrl?: string;
    voiceMethod?: VoiceMethod9;
    voiceUrl?: string;
    emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveMode;
    identitySid?: string;
    addressSid?: string;
    bundleSid?: string;
  };
}
