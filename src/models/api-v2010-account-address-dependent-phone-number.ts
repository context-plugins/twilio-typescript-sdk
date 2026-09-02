import { s, type Schema } from "../core/index.js";
import {
  dependentPhoneNumberEnumAddressRequirementSchema,
  type DependentPhoneNumberEnumAddressRequirement,
} from "./dependent-phone-number-enum-address-requirement.js";
import {
  dependentPhoneNumberEnumEmergencyStatusSchema,
  type DependentPhoneNumberEnumEmergencyStatus,
} from "./dependent-phone-number-enum-emergency-status.js";
import { smsFallbackMethodSchema, type SmsFallbackMethod } from "./sms-fallback-method.js";
import { smsMethodSchema, type SmsMethod } from "./sms-method.js";
import { statusCallbackMethodSchema, type StatusCallbackMethod } from "./status-callback-method.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";

export type ApiV2010AccountAddressDependentPhoneNumber = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  phoneNumber?: string | null;
  voiceUrl?: string | null;
  voiceMethod?: VoiceMethod | null;
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  voiceFallbackUrl?: string | null;
  voiceCallerIdLookup?: boolean | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  smsFallbackMethod?: SmsFallbackMethod | null;
  smsFallbackUrl?: string | null;
  smsMethod?: SmsMethod | null;
  smsUrl?: string | null;
  addressRequirements?: DependentPhoneNumberEnumAddressRequirement;
  capabilities?: Record<string, unknown> | null;
  statusCallback?: string | null;
  statusCallbackMethod?: StatusCallbackMethod | null;
  apiVersion?: string | null;
  smsApplicationSid?: string | null;
  voiceApplicationSid?: string | null;
  trunkSid?: string | null;
  emergencyStatus?: DependentPhoneNumberEnumEmergencyStatus;
  emergencyAddressSid?: string | null;
  uri?: string | null;
};

export const apiV2010AccountAddressDependentPhoneNumberSchema: Schema<ApiV2010AccountAddressDependentPhoneNumber> =
  s.object<ApiV2010AccountAddressDependentPhoneNumber>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    voiceUrl: s.optionalNullable(s.string()),
    voiceMethod: s.optionalNullable(s.lazy(() => voiceMethodSchema)),
    voiceFallbackMethod: s.optionalNullable(s.lazy(() => voiceFallbackMethodSchema)),
    voiceFallbackUrl: s.optionalNullable(s.string()),
    voiceCallerIdLookup: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    smsFallbackMethod: s.optionalNullable(s.lazy(() => smsFallbackMethodSchema)),
    smsFallbackUrl: s.optionalNullable(s.string()),
    smsMethod: s.optionalNullable(s.lazy(() => smsMethodSchema)),
    smsUrl: s.optionalNullable(s.string()),
    addressRequirements: s.optional(s.lazy(() => dependentPhoneNumberEnumAddressRequirementSchema)),
    capabilities: s.optionalNullable(s.record(s.string(), s.unknown())),
    statusCallback: s.optionalNullable(s.string()),
    statusCallbackMethod: s.optionalNullable(s.lazy(() => statusCallbackMethodSchema)),
    apiVersion: s.optionalNullable(s.string()),
    smsApplicationSid: s.optionalNullable(s.string()),
    voiceApplicationSid: s.optionalNullable(s.string()),
    trunkSid: s.optionalNullable(s.string()),
    emergencyStatus: s.optional(s.lazy(() => dependentPhoneNumberEnumEmergencyStatusSchema)),
    emergencyAddressSid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      phoneNumber: "phone_number",
      voiceUrl: "voice_url",
      voiceMethod: "voice_method",
      voiceFallbackMethod: "voice_fallback_method",
      voiceFallbackUrl: "voice_fallback_url",
      voiceCallerIdLookup: "voice_caller_id_lookup",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      smsFallbackMethod: "sms_fallback_method",
      smsFallbackUrl: "sms_fallback_url",
      smsMethod: "sms_method",
      smsUrl: "sms_url",
      addressRequirements: "address_requirements",
      statusCallback: "status_callback",
      statusCallbackMethod: "status_callback_method",
      apiVersion: "api_version",
      smsApplicationSid: "sms_application_sid",
      voiceApplicationSid: "voice_application_sid",
      trunkSid: "trunk_sid",
      emergencyStatus: "emergency_status",
      emergencyAddressSid: "emergency_address_sid",
    },
  });
