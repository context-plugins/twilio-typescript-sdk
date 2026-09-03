import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceGenericSender = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sender?: string | null;
  senderType?: string | null;
  countryCode?: string | null;
};

export const messagingV1ServiceGenericSenderSchema: Schema<MessagingV1ServiceGenericSender> =
  s.object<MessagingV1ServiceGenericSender>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    sender: s.optionalNullable(s.string()),
    senderType: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      senderType: "sender_type",
      countryCode: "country_code",
    },
  });
