import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceChannelSender = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * ChannelSender resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/messaging/services) the resource is
   * associated with.
   */
  messagingServiceSid?: string | null;
  /** The unique string that we created to identify the ChannelSender resource. */
  sid?: string | null;
  /** The unique string that identifies the sender e.g whatsapp:+123456XXXX. */
  sender?: string | null;
  /** A string value that identifies the sender type e.g WhatsApp, Messenger. */
  senderType?: string | null;
  /**
   * The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the
   * number.
   */
  countryCode?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the ChannelSender resource. */
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
