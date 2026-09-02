import { s, type Schema } from "../core/index.js";

export type MessagingV1ServiceChannelSender = {
  accountSid?: string | null;
  messagingServiceSid?: string | null;
  sid?: string | null;
  sender?: string | null;
  senderType?: string | null;
  countryCode?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const messagingV1ServiceChannelSenderSchema: Schema<MessagingV1ServiceChannelSender> =
  s.object<MessagingV1ServiceChannelSender>({
    accountSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    sender: s.optionalNullable(s.string()),
    senderType: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      messagingServiceSid: "messaging_service_sid",
      senderType: "sender_type",
      countryCode: "country_code",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
