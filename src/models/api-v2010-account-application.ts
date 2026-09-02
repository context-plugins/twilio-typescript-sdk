import { s, type Schema } from "../core/index.js";
import { smsFallbackMethodSchema, type SmsFallbackMethod } from "./sms-fallback-method.js";
import { smsMethodSchema, type SmsMethod } from "./sms-method.js";
import { statusCallbackMethodSchema, type StatusCallbackMethod } from "./status-callback-method.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";

export type ApiV2010AccountApplication = {
  accountSid?: string | null;
  apiVersion?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  messageStatusCallback?: string | null;
  sid?: string | null;
  smsFallbackMethod?: SmsFallbackMethod | null;
  smsFallbackUrl?: string | null;
  smsMethod?: SmsMethod | null;
  smsStatusCallback?: string | null;
  smsUrl?: string | null;
  statusCallback?: string | null;
  statusCallbackMethod?: StatusCallbackMethod | null;
  uri?: string | null;
  voiceCallerIdLookup?: boolean | null;
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  voiceFallbackUrl?: string | null;
  voiceMethod?: VoiceMethod | null;
  voiceUrl?: string | null;
  publicApplicationConnectEnabled?: boolean | null;
};

export const apiV2010AccountApplicationSchema: Schema<ApiV2010AccountApplication> =
  s.object<ApiV2010AccountApplication>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    messageStatusCallback: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    smsFallbackMethod: s.optionalNullable(s.lazy(() => smsFallbackMethodSchema)),
    smsFallbackUrl: s.optionalNullable(s.string()),
    smsMethod: s.optionalNullable(s.lazy(() => smsMethodSchema)),
    smsStatusCallback: s.optionalNullable(s.string()),
    smsUrl: s.optionalNullable(s.string()),
    statusCallback: s.optionalNullable(s.string()),
    statusCallbackMethod: s.optionalNullable(s.lazy(() => statusCallbackMethodSchema)),
    uri: s.optionalNullable(s.string()),
    voiceCallerIdLookup: s.optionalNullable(s.boolean()),
    voiceFallbackMethod: s.optionalNullable(s.lazy(() => voiceFallbackMethodSchema)),
    voiceFallbackUrl: s.optionalNullable(s.string()),
    voiceMethod: s.optionalNullable(s.lazy(() => voiceMethodSchema)),
    voiceUrl: s.optionalNullable(s.string()),
    publicApplicationConnectEnabled: s.optionalNullable(s.boolean()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      messageStatusCallback: "message_status_callback",
      smsFallbackMethod: "sms_fallback_method",
      smsFallbackUrl: "sms_fallback_url",
      smsMethod: "sms_method",
      smsStatusCallback: "sms_status_callback",
      smsUrl: "sms_url",
      statusCallback: "status_callback",
      statusCallbackMethod: "status_callback_method",
      voiceCallerIdLookup: "voice_caller_id_lookup",
      voiceFallbackMethod: "voice_fallback_method",
      voiceFallbackUrl: "voice_fallback_url",
      voiceMethod: "voice_method",
      voiceUrl: "voice_url",
      publicApplicationConnectEnabled: "public_application_connect_enabled",
    },
  });
