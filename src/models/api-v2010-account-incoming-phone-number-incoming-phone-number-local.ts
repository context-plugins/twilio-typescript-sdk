import { s, type Schema } from "../core/index.js";
import { capabilities7Schema, type Capabilities7 } from "./capabilities7.js";
import {
  incomingPhoneNumberLocalEnumAddressRequirementSchema,
  type IncomingPhoneNumberLocalEnumAddressRequirement,
} from "./incoming-phone-number-local-enum-address-requirement.js";
import {
  incomingPhoneNumberLocalEnumEmergencyAddressStatusSchema,
  type IncomingPhoneNumberLocalEnumEmergencyAddressStatus,
} from "./incoming-phone-number-local-enum-emergency-address-status.js";
import {
  incomingPhoneNumberLocalEnumEmergencyStatusSchema,
  type IncomingPhoneNumberLocalEnumEmergencyStatus,
} from "./incoming-phone-number-local-enum-emergency-status.js";
import {
  incomingPhoneNumberLocalEnumVoiceReceiveModeSchema,
  type IncomingPhoneNumberLocalEnumVoiceReceiveMode,
} from "./incoming-phone-number-local-enum-voice-receive-mode.js";
import { smsFallbackMethodSchema, type SmsFallbackMethod } from "./sms-fallback-method.js";
import { smsMethodSchema, type SmsMethod } from "./sms-method.js";
import { statusCallbackMethodSchema, type StatusCallbackMethod } from "./status-callback-method.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";

export type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = {
  accountSid?: string | null;
  addressSid?: string | null;
  addressRequirements?: IncomingPhoneNumberLocalEnumAddressRequirement;
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
  voiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode;
  voiceApplicationSid?: string | null;
  voiceCallerIdLookup?: boolean | null;
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  voiceFallbackUrl?: string | null;
  voiceMethod?: VoiceMethod | null;
  voiceUrl?: string | null;
  emergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatus;
  emergencyAddressSid?: string | null;
  emergencyAddressStatus?: IncomingPhoneNumberLocalEnumEmergencyAddressStatus;
  bundleSid?: string | null;
  status?: string | null;
};

export const apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSchema: Schema<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal> =
  s.object<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal>({
    accountSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    addressRequirements: s.optional(s.lazy(() => incomingPhoneNumberLocalEnumAddressRequirementSchema)),
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
    voiceReceiveMode: s.optional(s.lazy(() => incomingPhoneNumberLocalEnumVoiceReceiveModeSchema)),
    voiceApplicationSid: s.optionalNullable(s.string()),
    voiceCallerIdLookup: s.optionalNullable(s.boolean()),
    voiceFallbackMethod: s.optionalNullable(s.lazy(() => voiceFallbackMethodSchema)),
    voiceFallbackUrl: s.optionalNullable(s.string()),
    voiceMethod: s.optionalNullable(s.lazy(() => voiceMethodSchema)),
    voiceUrl: s.optionalNullable(s.string()),
    emergencyStatus: s.optional(s.lazy(() => incomingPhoneNumberLocalEnumEmergencyStatusSchema)),
    emergencyAddressSid: s.optionalNullable(s.string()),
    emergencyAddressStatus: s.optional(
      s.lazy(() => incomingPhoneNumberLocalEnumEmergencyAddressStatusSchema),
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
