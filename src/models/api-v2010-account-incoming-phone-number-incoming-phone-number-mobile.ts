import { s, type Schema } from "../core/index.js";
import { capabilities7Schema, type Capabilities7 } from "./capabilities7.js";
import {
  incomingPhoneNumberMobileEnumAddressRequirementSchema,
  type IncomingPhoneNumberMobileEnumAddressRequirement,
} from "./incoming-phone-number-mobile-enum-address-requirement.js";
import {
  incomingPhoneNumberMobileEnumEmergencyAddressStatusSchema,
  type IncomingPhoneNumberMobileEnumEmergencyAddressStatus,
} from "./incoming-phone-number-mobile-enum-emergency-address-status.js";
import {
  incomingPhoneNumberMobileEnumEmergencyStatusSchema,
  type IncomingPhoneNumberMobileEnumEmergencyStatus,
} from "./incoming-phone-number-mobile-enum-emergency-status.js";
import {
  incomingPhoneNumberMobileEnumVoiceReceiveModeSchema,
  type IncomingPhoneNumberMobileEnumVoiceReceiveMode,
} from "./incoming-phone-number-mobile-enum-voice-receive-mode.js";
import { smsFallbackMethodSchema, type SmsFallbackMethod } from "./sms-fallback-method.js";
import { smsMethodSchema, type SmsMethod } from "./sms-method.js";
import { statusCallbackMethodSchema, type StatusCallbackMethod } from "./status-callback-method.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";

export type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = {
  accountSid?: string | null;
  addressSid?: string | null;
  addressRequirements?: IncomingPhoneNumberMobileEnumAddressRequirement;
  apiVersion?: string | null;
  beta?: boolean | null;
  capabilities?: Capabilities7 | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  identitySid?: string | null;
  phoneNumber?: string | null;
  origin?: string | null;
  sid?: string | null;
  smsApplicationSid?: string | null;
  smsFallbackMethod?: SmsFallbackMethod | null;
  smsFallbackUrl?: string | null;
  smsMethod?: SmsMethod | null;
  smsUrl?: string | null;
  statusCallback?: string | null;
  statusCallbackMethod?: StatusCallbackMethod | null;
  trunkSid?: string | null;
  uri?: string | null;
  voiceReceiveMode?: IncomingPhoneNumberMobileEnumVoiceReceiveMode;
  voiceApplicationSid?: string | null;
  voiceCallerIdLookup?: boolean | null;
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  voiceFallbackUrl?: string | null;
  voiceMethod?: VoiceMethod | null;
  voiceUrl?: string | null;
  emergencyStatus?: IncomingPhoneNumberMobileEnumEmergencyStatus;
  emergencyAddressSid?: string | null;
  emergencyAddressStatus?: IncomingPhoneNumberMobileEnumEmergencyAddressStatus;
  bundleSid?: string | null;
  status?: string | null;
};

export const apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSchema: Schema<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile> =
  s.object<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile>({
    accountSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    addressRequirements: s.optional(s.lazy(() => incomingPhoneNumberMobileEnumAddressRequirementSchema)),
    apiVersion: s.optionalNullable(s.string()),
    beta: s.optionalNullable(s.boolean()),
    capabilities: s.optionalNullable(s.lazy(() => capabilities7Schema)),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    identitySid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    origin: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    smsApplicationSid: s.optionalNullable(s.string()),
    smsFallbackMethod: s.optionalNullable(s.lazy(() => smsFallbackMethodSchema)),
    smsFallbackUrl: s.optionalNullable(s.string()),
    smsMethod: s.optionalNullable(s.lazy(() => smsMethodSchema)),
    smsUrl: s.optionalNullable(s.string()),
    statusCallback: s.optionalNullable(s.string()),
    statusCallbackMethod: s.optionalNullable(s.lazy(() => statusCallbackMethodSchema)),
    trunkSid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    voiceReceiveMode: s.optional(s.lazy(() => incomingPhoneNumberMobileEnumVoiceReceiveModeSchema)),
    voiceApplicationSid: s.optionalNullable(s.string()),
    voiceCallerIdLookup: s.optionalNullable(s.boolean()),
    voiceFallbackMethod: s.optionalNullable(s.lazy(() => voiceFallbackMethodSchema)),
    voiceFallbackUrl: s.optionalNullable(s.string()),
    voiceMethod: s.optionalNullable(s.lazy(() => voiceMethodSchema)),
    voiceUrl: s.optionalNullable(s.string()),
    emergencyStatus: s.optional(s.lazy(() => incomingPhoneNumberMobileEnumEmergencyStatusSchema)),
    emergencyAddressSid: s.optionalNullable(s.string()),
    emergencyAddressStatus: s.optional(
      s.lazy(() => incomingPhoneNumberMobileEnumEmergencyAddressStatusSchema),
    ),
    bundleSid: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      addressSid: "address_sid",
      addressRequirements: "address_requirements",
      apiVersion: "api_version",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      identitySid: "identity_sid",
      phoneNumber: "phone_number",
      smsApplicationSid: "sms_application_sid",
      smsFallbackMethod: "sms_fallback_method",
      smsFallbackUrl: "sms_fallback_url",
      smsMethod: "sms_method",
      smsUrl: "sms_url",
      statusCallback: "status_callback",
      statusCallbackMethod: "status_callback_method",
      trunkSid: "trunk_sid",
      voiceReceiveMode: "voice_receive_mode",
      voiceApplicationSid: "voice_application_sid",
      voiceCallerIdLookup: "voice_caller_id_lookup",
      voiceFallbackMethod: "voice_fallback_method",
      voiceFallbackUrl: "voice_fallback_url",
      voiceMethod: "voice_method",
      voiceUrl: "voice_url",
      emergencyStatus: "emergency_status",
      emergencyAddressSid: "emergency_address_sid",
      emergencyAddressStatus: "emergency_address_status",
      bundleSid: "bundle_sid",
    },
  });
