import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { voiceFallbackMethodSchema, type VoiceFallbackMethod } from "./voice-fallback-method.js";
import { voiceMethodSchema, type VoiceMethod } from "./voice-method.js";
import {
  voiceStatusCallbackMethodSchema,
  type VoiceStatusCallbackMethod,
} from "./voice-status-callback-method.js";

export type ApiV2010AccountSipSipDomain = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * SipDomain resource.
   */
  accountSid?: string | null;
  /** The API version used to process the call. */
  apiVersion?: string | null;
  /**
   * The types of authentication you have mapped to your domain. Can be: `IP_ACL` and
   * `CREDENTIAL_LIST`. If you have both defined for your domain, both will be returned in a comma
   * delimited string. If `auth_type` is not defined, the domain will not be able to receive any
   * traffic.
   */
  authType?: string | null;
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
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can
   * contain letters, digits, and "-" and must end with `sip.twilio.com`.
   */
  domainName?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The unique string that that we created to identify the SipDomain resource. */
  sid?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: VoiceFallbackMethod | null;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML requested
   * from `voice_url`.
   */
  voiceFallbackUrl?: string | null;
  /** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: VoiceMethod | null;
  /** The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`. */
  voiceStatusCallbackMethod?: VoiceStatusCallbackMethod | null;
  /** The URL that we call to pass status parameters (such as call ended) to your application. */
  voiceStatusCallbackUrl?: string | null;
  /** The URL we call using the `voice_method` when the domain receives a call. */
  voiceUrl?: string | null;
  /**
   * A list of mapping resources associated with the SIP Domain resource identified by their
   * relative URIs.
   */
  subresourceUris?: Record<string, unknown> | null;
  /** Whether to allow SIP Endpoints to register with the domain to receive calls. */
  sipRegistration?: boolean | null;
  /**
   * Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the
   * domain from phone numbers with validated addresses.
   */
  emergencyCallingEnabled?: boolean | null;
  /**
   * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be
   * negotiated on all incoming calls to this sip domain.
   */
  secure?: boolean | null;
  /**
   * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be
   * associated with.
   */
  byocTrunkSid?: string | null;
  /**
   * Whether an emergency caller sid is configured for the domain. If present, this phone number
   * will be used as the callback for the emergency call.
   */
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
