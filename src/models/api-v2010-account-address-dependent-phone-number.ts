import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /** The unique string that that we created to identify the DependentPhoneNumber resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * DependentPhoneNumber resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The URL we call when the phone number receives a call. The `voice_url` will not be used if a
   * `voice_application_sid` or a `trunk_sid` is set.
   */
  voiceUrl?: string | null;
  /** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: VoiceMethod | null;
  /** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  /**
   * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
   */
  voiceFallbackUrl?: string | null;
  /**
   * Whether we look up the caller's caller-ID name from the CNAM database. Can be: `true` or
   * `false`. Caller ID lookups can cost $0.01 each.
   */
  voiceCallerIdLookup?: boolean | null;
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
   * Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address)
   * registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
   */
  addressRequirements?: DependentPhoneNumberEnumAddressRequirement;
  /**
   * The set of Boolean properties that indicates whether a phone number can receive calls or
   * messages. Capabilities are `Voice`, `SMS`, and `MMS` and each capability can be: `true` or
   * `false`.
   */
  capabilities?: Record<string, unknown> | null;
  /**
   * The URL we call using the `status_callback_method` to send status information to your
   * application.
   */
  statusCallback?: string | null;
  /** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
  statusCallbackMethod?: StatusCallbackMethod | null;
  /** The API version used to start a new TwiML session. */
  apiVersion?: string | null;
  /**
   * The SID of the application that handles SMS messages sent to the phone number. If an
   * `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the
   * application.
   */
  smsApplicationSid?: string | null;
  /**
   * The SID of the application that handles calls to the phone number. If a `voice_application_sid`
   * is present, we ignore all of the voice urls and use those set on the application. Setting a
   * `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
   */
  voiceApplicationSid?: string | null;
  /**
   * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we
   * ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a
   * `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
   */
  trunkSid?: string | null;
  /** Whether the phone number is enabled for emergency calling. */
  emergencyStatus?: DependentPhoneNumberEnumEmergencyStatus;
  /**
   * The SID of the emergency address configuration that we use for emergency calling from the phone
   * number.
   */
  emergencyAddressSid?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
