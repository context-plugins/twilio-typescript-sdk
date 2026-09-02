import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountAvailablePhoneNumberCountry = {
  countryCode?: string | null;
  country?: string | null;
  uri?: string | null;
  beta?: boolean | null;
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
