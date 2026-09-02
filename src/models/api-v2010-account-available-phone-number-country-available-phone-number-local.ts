import { s, type Schema } from "../core/index.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";

export type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal = {
  friendlyName?: string | null;
  phoneNumber?: string | null;
  lata?: string | null;
  locality?: string | null;
  rateCenter?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  region?: string | null;
  postalCode?: string | null;
  isoCountry?: string | null;
  addressRequirements?: string | null;
  beta?: boolean | null;
  capabilities?: Capabilities | null;
};

export const apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalSchema: Schema<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal> =
  s.object<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal>({
    friendlyName: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    lata: s.optionalNullable(s.string()),
    locality: s.optionalNullable(s.string()),
    rateCenter: s.optionalNullable(s.string()),
    latitude: s.optionalNullable(s.number()),
    longitude: s.optionalNullable(s.number()),
    region: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    isoCountry: s.optionalNullable(s.string()),
    addressRequirements: s.optionalNullable(s.string()),
    beta: s.optionalNullable(s.boolean()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    _keysMap: {
      friendlyName: "friendly_name",
      phoneNumber: "phone_number",
      rateCenter: "rate_center",
      postalCode: "postal_code",
      isoCountry: "iso_country",
      addressRequirements: "address_requirements",
    },
  });
