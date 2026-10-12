import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceGenericSender = {
  /** The SID to identify the number or channel sender resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the number
   * or channel sender resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource
   * is associated with.
   */
  serviceSid?: string | null;
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
  /**
   * The unique string that identifies the number in
   * [E.164](https://www.twilio.com/docs/glossary/what-e164) format or the channel sender e.g
   * whatsapp:+123456XXXX.
   */
  sender?: string | null;
  /**
   * A string value that identifies the number or channel sender type e.g AlphaSenderId, LongCode,
   * ShortCode, Whatsapp, RCS.
   */
  senderType?: string | null;
  /**
   * The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the
   * number or channel sender.
   */
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
