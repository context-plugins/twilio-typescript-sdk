import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsFallbackMethodSchema, type SmsFallbackMethod } from "./sms-fallback-method.js";
import { smsMethodSchema, type SmsMethod } from "./sms-method.js";
import { statusCallbackMethodSchema, type StatusCallbackMethod } from "./status-callback-method.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";

export type ApiV2010AccountApplication = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Application resource.
   */
  accountSid?: string | null;
  /** The API version used to start a new TwiML session. */
  apiVersion?: string | null;
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
  /** The URL we call using a POST method to send message status information to your application. */
  messageStatusCallback?: string | null;
  /** The unique string that that we created to identify the Application resource. */
  sid?: string | null;
  /** The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  smsFallbackMethod?: SmsFallbackMethod | null;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML from
   * `sms_url`.
   */
  smsFallbackUrl?: string | null;
  /** The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`. */
  smsMethod?: SmsMethod | null;
  /**
   * The URL we call using a POST method to send status information to your application about SMS
   * messages that refer to the application.
   */
  smsStatusCallback?: string | null;
  /** The URL we call when the phone number receives an incoming SMS message. */
  smsUrl?: string | null;
  /**
   * The URL we call using the `status_callback_method` to send status information to your
   * application.
   */
  statusCallback?: string | null;
  /** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
  statusCallbackMethod?: StatusCallbackMethod | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * Whether we look up the caller's caller-ID name from the CNAM database (additional charges
   * apply). Can be: `true` or `false`.
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
  /** The URL we call when the phone number assigned to this application receives a call. */
  voiceUrl?: string | null;
  /**
   * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true`
   * or `false`.
   */
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
