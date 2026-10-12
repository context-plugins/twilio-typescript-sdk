import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServicePhoneNumber = {
  /** The unique string that we created to identify the PhoneNumber resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * PhoneNumber resource.
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
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the
   * number.
   */
  countryCode?: string | null;
  /**
   * An array of values that describe whether the number can receive calls or messages. Can be:
   * `Voice`, `SMS`, and `MMS`.
   */
  capabilities?: string[] | null;
  /** The absolute URL of the PhoneNumber resource. */
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
