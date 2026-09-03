import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceShortCode = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  shortCode?: string | null;
  countryCode?: string | null;
  capabilities?: string[] | null;
  url?: string | null;
};

export const messagingV1ServiceShortCodeSchema: Schema<MessagingV1ServiceShortCode> =
  s.object<MessagingV1ServiceShortCode>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    shortCode: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      shortCode: "short_code",
      countryCode: "country_code",
    },
  });
