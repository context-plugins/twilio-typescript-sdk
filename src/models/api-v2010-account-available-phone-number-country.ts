import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountAvailablePhoneNumberCountry = {
  /**
   * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country.
   */
  countryCode?: string | null;
  /** The name of the country. */
  country?: string | null;
  /** The URI of the Country resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * Whether all phone numbers available in the country are new to the Twilio platform. `true` if
   * they are and `false` if all numbers are not in the Twilio Phone Number Beta program.
   */
  beta?: boolean | null;
  /**
   * A list of related AvailablePhoneNumber resources identified by their URIs relative to
   * `https://api.twilio.com`.
   */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountAvailablePhoneNumberCountrySchema: Schema<ApiV2010AccountAvailablePhoneNumberCountry> =
  s.object<ApiV2010AccountAvailablePhoneNumberCountry>({
    countryCode: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    beta: s.optionalNullable(s.boolean()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      countryCode: "country_code",
      subresourceUris: "subresource_uris",
    },
  });
