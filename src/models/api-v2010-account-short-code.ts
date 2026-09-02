import { s, type Schema } from "../core/index.js";
import { smsFallbackMethod6Schema, type SmsFallbackMethod6 } from "./sms-fallback-method6.js";
import { smsMethod6Schema, type SmsMethod6 } from "./sms-method6.js";

export type ApiV2010AccountShortCode = {
  accountSid?: string | null;
  apiVersion?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  shortCode?: string | null;
  sid?: string | null;
  smsFallbackMethod?: SmsFallbackMethod6 | null;
  smsFallbackUrl?: string | null;
  smsMethod?: SmsMethod6 | null;
  smsUrl?: string | null;
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
