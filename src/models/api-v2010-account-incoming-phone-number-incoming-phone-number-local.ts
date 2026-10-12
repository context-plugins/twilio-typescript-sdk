import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the Address resource associated with the phone number. */
  addressSid?: string | null;
  /**
   * Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address)
   * registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
   */
  addressRequirements?: IncomingPhoneNumberLocalEnumAddressRequirement;
  /** The API version used to start a new TwiML session. */
  apiVersion?: string | null;
  /** Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
  beta?: boolean | null;
  /**
   * The set of Boolean properties that indicate whether a phone number can receive calls or
   * messages. Capabilities are `Voice`, `SMS`, and `MMS` and each capability can be: `true` or
   * `false`.
   */
  capabilities?: Capabilities7 | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The SID of the Identity resource that we associate with the phone number. Some regions require
   * an Identity to meet local regulations.
   */
  identitySid?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted`
   * identifies hosted phone numbers.
   */
  origin?: string | null;
  /** The unique string that that we created to identify the resource. */
  sid?: string | null;
  /**
   * The SID of the application that handles SMS messages sent to the phone number. If an
   * `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the
   * application.
   */
  smsApplicationSid?: string | null;
  /** The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  smsFallbackMethod?: SmsFallbackMethod | null;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML from
   * `sms_url`.
   */
  smsFallbackUrl?: string | null;
  /** The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`. */
  smsMethod?: SmsMethod | null;
  /** The URL we call when the phone number receives an incoming SMS message. */
  smsUrl?: string | null;
  /**
   * The URL we call using the `status_callback_method` to send status information to your
   * application.
   */
  statusCallback?: string | null;
  /** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
  statusCallbackMethod?: StatusCallbackMethod | null;
  /**
   * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we
   * ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a
   * `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
   */
  trunkSid?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  voiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveMode;
  /**
   * The SID of the application that handles calls to the phone number. If a `voice_application_sid`
   * is present, we ignore all of the voice urls and use those set on the application. Setting a
   * `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
   */
  voiceApplicationSid?: string | null;
  /**
   * Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can
   * be: `true` or `false`.
   */
  voiceCallerIdLookup?: boolean | null;
  /** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  /**
   * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
   */
  voiceFallbackUrl?: string | null;
  /** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: VoiceMethod | null;
  /**
   * The URL we call when this phone number receives a call. The `voice_url` will not be used if a
   * `voice_application_sid` or a `trunk_sid` is set.
   */
  voiceUrl?: string | null;
  /**
   * The parameter displays if emergency calling is enabled for this number. Active numbers may
   * place emergency calls by dialing valid emergency numbers for the country.
   */
  emergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatus;
  /**
   * The SID of the emergency address configuration that we use for emergency calling from this
   * phone number.
   */
  emergencyAddressSid?: string | null;
  /**
   * The status of address registration with emergency services. A registered emergency address will
   * be used during handling of emergency calls from this number.
   */
  emergencyAddressStatus?: IncomingPhoneNumberLocalEnumEmergencyAddressStatus;
  /**
   * The SID of the Bundle resource that you associate with the phone number. Some regions require a
   * Bundle to meet local Regulations.
   */
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
