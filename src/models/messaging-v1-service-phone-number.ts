import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServicePhoneNumber = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  phoneNumber?: string | null;
  countryCode?: string | null;
  capabilities?: string[] | null;
  url?: string | null;
};

export const messagingV1ServicePhoneNumberSchema: Schema<MessagingV1ServicePhoneNumber> =
  s.object<MessagingV1ServicePhoneNumber>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    phoneNumber: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      phoneNumber: "phone_number",
      countryCode: "country_code",
    },
  });
