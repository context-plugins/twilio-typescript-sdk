import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";

export type ProxyV1ServicePhoneNumber = {
  /** The unique string that we created to identify the PhoneNumber resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * PhoneNumber resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the PhoneNumber resource's parent
   * [Service](https://www.twilio.com/docs/proxy/api/service) resource.
   */
  serviceSid?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The ISO Country Code for the phone number. */
  isoCountry?: string | null;
  /** The capabilities of the phone number. */
  capabilities?: Capabilities | null;
  /** The absolute URL of the PhoneNumber resource. */
  url?: string | null;
  /**
   * Whether the phone number should be reserved and not be assigned to a participant using proxy
   * pool logic. See [Reserved Phone
   * Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
   */
  isReserved?: boolean | null;
  /**
   * The number of open session assigned to the number. See the [How many Phone Numbers do I
   * need?](https://www.twilio.com/docs/proxy/phone-numbers-needed) guide for more information.
   *
   * @default 0
   */
  inUse?: number;
};

export const proxyV1ServicePhoneNumberSchema: Schema<ProxyV1ServicePhoneNumber> =
  s.object<ProxyV1ServicePhoneNumber>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    phoneNumber: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    isoCountry: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    url: s.optionalNullable(s.string()),
    isReserved: s.optionalNullable(s.boolean()),
    inUse: s.defaulted(s.int(), 0),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      phoneNumber: "phone_number",
      friendlyName: "friendly_name",
      isoCountry: "iso_country",
      isReserved: "is_reserved",
      inUse: "in_use",
    },
  });
