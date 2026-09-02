import { s, type Schema } from "../core/index.js";

export type Geography = {
  isoCountry?: string;
  region?: string;
  locality?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  lata?: string;
  rateCenter?: string;
};

export const geographySchema: Schema<Geography> = s.object<Geography>({
  isoCountry: s.optional(s.string()),
  region: s.optional(s.string()),
  locality: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  latitude: s.optional(s.number()),
  longitude: s.optional(s.number()),
  lata: s.optional(s.string()),
  rateCenter: s.optional(s.string()),
  _keysMap: {
    isoCountry: "IsoCountry",
    region: "Region",
    locality: "Locality",
    postalCode: "PostalCode",
    latitude: "Latitude",
    longitude: "Longitude",
    lata: "Lata",
    rateCenter: "RateCenter",
  },
});
