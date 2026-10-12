import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LookupsV1PhoneNumber = {
  /** The name of the phone number's owner. If `null`, that information was not available. */
  callerName?: Record<string, unknown> | null;
  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the phone number.
   */
  countryCode?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /** The phone number, in national format. */
  nationalFormat?: string | null;
  /** The telecom company that provides the phone number. */
  carrier?: Record<string, unknown> | null;
  /**
   * A JSON string with the results of the Add-ons you specified in the `add_ons` parameters. For
   * the format of the object, see [Using Add-ons](https://www.twilio.com/docs/add-ons).
   */
  addOns?: Record<string, unknown> | null;
  /** The absolute URL of the resource. */
  url?: string | null;
};

export const lookupsV1PhoneNumberSchema: Schema<LookupsV1PhoneNumber> = s.object<LookupsV1PhoneNumber>({
  callerName: s.optionalNullable(s.record(s.string(), s.unknown())),
  countryCode: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  nationalFormat: s.optionalNullable(s.string()),
  carrier: s.optionalNullable(s.record(s.string(), s.unknown())),
  addOns: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    callerName: "caller_name",
    countryCode: "country_code",
    phoneNumber: "phone_number",
    nationalFormat: "national_format",
    addOns: "add_ons",
  },
});
