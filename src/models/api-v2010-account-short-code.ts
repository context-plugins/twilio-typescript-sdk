import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsFallbackMethod6Schema, type SmsFallbackMethod6 } from "./sms-fallback-method6.js";
import { smsMethod6Schema, type SmsMethod6 } from "./sms-method6.js";

export type ApiV2010AccountShortCode = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
   * ShortCode resource.
   */
  accountSid?: string | null;
  /**
   * The API version used to start a new TwiML session when an SMS message is sent to this short
   * code.
   */
  apiVersion?: string | null;
  /**
   * The date and time in GMT that this resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /**
   * A string that you assigned to describe this resource. By default, the `FriendlyName` is the
   * short code.
   */
  friendlyName?: string | null;
  /** The short code. e.g., 894546. */
  shortCode?: string | null;
  /** The unique string that that we created to identify this ShortCode resource. */
  sid?: string | null;
  /** The HTTP method we use to call the `sms_fallback_url`. Can be: `GET` or `POST`. */
  smsFallbackMethod?: SmsFallbackMethod6 | null;
  /**
   * The URL that we call if an error occurs while retrieving or executing the TwiML from `sms_url`.
   */
  smsFallbackUrl?: string | null;
  /** The HTTP method we use to call the `sms_url`. Can be: `GET` or `POST`. */
  smsMethod?: SmsMethod6 | null;
  /** The URL we call when receiving an incoming SMS message to this short code. */
  smsUrl?: string | null;
  /** The URI of this resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountShortCodeSchema: Schema<ApiV2010AccountShortCode> =
  s.object<ApiV2010AccountShortCode>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    shortCode: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    smsFallbackMethod: s.optionalNullable(s.lazy(() => smsFallbackMethod6Schema)),
    smsFallbackUrl: s.optionalNullable(s.string()),
    smsMethod: s.optionalNullable(s.lazy(() => smsMethod6Schema)),
    smsUrl: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      shortCode: "short_code",
      smsFallbackMethod: "sms_fallback_method",
      smsFallbackUrl: "sms_fallback_url",
      smsMethod: "sms_method",
      smsUrl: "sms_url",
    },
  });
