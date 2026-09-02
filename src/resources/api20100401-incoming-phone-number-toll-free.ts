import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree,
} from "../models/api-v2010-account-incoming-phone-number-incoming-phone-number-toll-free.js";
import {
  incomingPhoneNumberTollFreeEnumEmergencyStatusSchema,
  type IncomingPhoneNumberTollFreeEnumEmergencyStatus,
} from "../models/incoming-phone-number-toll-free-enum-emergency-status.js";
import {
  incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema,
  type IncomingPhoneNumberTollFreeEnumVoiceReceiveMode,
} from "../models/incoming-phone-number-toll-free-enum-voice-receive-mode.js";
import {
  listIncomingPhoneNumberTollFreeResponseSchema,
  type ListIncomingPhoneNumberTollFreeResponse,
} from "../models/list-incoming-phone-number-toll-free-response.js";
import { smsFallbackMethod9Schema, type SmsFallbackMethod9 } from "../models/sms-fallback-method9.js";
import { smsMethod9Schema, type SmsMethod9 } from "../models/sms-method9.js";
import {
  statusCallbackMethod10Schema,
  type StatusCallbackMethod10,
} from "../models/status-callback-method10.js";
import { voiceFallbackMethod9Schema, type VoiceFallbackMethod9 } from "../models/voice-fallback-method9.js";
import { voiceMethod9Schema, type VoiceMethod9 } from "../models/voice-method9.js";
import type { Servers } from "../servers.js";

export class Api20100401IncomingPhoneNumberTollFree {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createIncomingPhoneNumberTollFree(
    request: Api20100401IncomingPhoneNumberTollFree.CreateIncomingPhoneNumberTollFreeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
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
              schema: s.optional(s.lazy(() => incomingPhoneNumberTollFreeEnumEmergencyStatusSchema)),
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
              schema: s.optional(s.lazy(() => incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema)),
            },
            { name: "BundleSid", value: request.bundleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listIncomingPhoneNumberTollFree(
    request: Api20100401IncomingPhoneNumberTollFree.ListIncomingPhoneNumberTollFreeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberTollFreeResponse, ResponseError> {
    return this.#rawClient.execute<ListIncomingPhoneNumberTollFreeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json"),
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
        success: { kind: "json", schema: listIncomingPhoneNumberTollFreeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401IncomingPhoneNumberTollFree {
  export type CreateIncomingPhoneNumberTollFreeRequest = {
    accountSid: string;
    phoneNumber: string;
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
    identitySid?: string;
    addressSid?: string;
    emergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveMode;
    bundleSid?: string;
  };

  export type ListIncomingPhoneNumberTollFreeRequest = {
    accountSid: string;
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
