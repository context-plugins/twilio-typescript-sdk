import { s, type Schema } from "../core/index.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";
import {
  voiceStatusCallbackMethodSchema,
  type VoiceStatusCallbackMethod,
} from "./voice-status-callback-method.js";

export type ApiV2010AccountSipSipDomain = {
  accountSid?: string | null;
  apiVersion?: string | null;
  authType?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  domainName?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
  uri?: string | null;
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  voiceFallbackUrl?: string | null;
  voiceMethod?: VoiceMethod | null;
  voiceStatusCallbackMethod?: VoiceStatusCallbackMethod | null;
  voiceStatusCallbackUrl?: string | null;
  voiceUrl?: string | null;
  subresourceUris?: Record<string, unknown> | null;
  sipRegistration?: boolean | null;
  emergencyCallingEnabled?: boolean | null;
  secure?: boolean | null;
  byocTrunkSid?: string | null;
  emergencyCallerSid?: string | null;
};

export const apiV2010AccountSipSipDomainSchema: Schema<ApiV2010AccountSipSipDomain> =
  s.object<ApiV2010AccountSipSipDomain>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    authType: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    domainName: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    voiceFallbackMethod: s.optionalNullable(s.lazy(() => voiceFallbackMethodSchema)),
    voiceFallbackUrl: s.optionalNullable(s.string()),
    voiceMethod: s.optionalNullable(s.lazy(() => voiceMethodSchema)),
    voiceStatusCallbackMethod: s.optionalNullable(s.lazy(() => voiceStatusCallbackMethodSchema)),
    voiceStatusCallbackUrl: s.optionalNullable(s.string()),
    voiceUrl: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    sipRegistration: s.optionalNullable(s.boolean()),
    emergencyCallingEnabled: s.optionalNullable(s.boolean()),
    secure: s.optionalNullable(s.boolean()),
    byocTrunkSid: s.optionalNullable(s.string()),
    emergencyCallerSid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      authType: "auth_type",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      domainName: "domain_name",
      friendlyName: "friendly_name",
      voiceFallbackMethod: "voice_fallback_method",
      voiceFallbackUrl: "voice_fallback_url",
      voiceMethod: "voice_method",
      voiceStatusCallbackMethod: "voice_status_callback_method",
      voiceStatusCallbackUrl: "voice_status_callback_url",
      voiceUrl: "voice_url",
      subresourceUris: "subresource_uris",
      sipRegistration: "sip_registration",
      emergencyCallingEnabled: "emergency_calling_enabled",
      byocTrunkSid: "byoc_trunk_sid",
      emergencyCallerSid: "emergency_caller_sid",
    },
  });
