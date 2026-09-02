import { s, type Schema } from "../core/index.js";

export type NumbersV2AddressCreate = {
  friendlyName?: string | null;
  customerName?: string | null;
  street: string;
  streetSecondary?: string | null;
  locality?: string | null;
  region?: string | null;
  postalCode?: string | null;
  isoCountry: string;
  source?: string | null;
  forceValidation?: boolean | null;
  bypassValidation?: boolean | null;
  autoCorrectAddress?: boolean | null;
  emergencyEnabled?: boolean | null;
};

export const numbersV2AddressCreateSchema: Schema<NumbersV2AddressCreate> = s.object<NumbersV2AddressCreate>({
  friendlyName: s.optionalNullable(s.string()),
  customerName: s.optionalNullable(s.string()),
  street: s.string(),
  streetSecondary: s.optionalNullable(s.string()),
  locality: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  isoCountry: s.string(),
  source: s.optionalNullable(s.string()),
  forceValidation: s.optionalNullable(s.boolean()),
  bypassValidation: s.optionalNullable(s.boolean()),
  autoCorrectAddress: s.optionalNullable(s.boolean()),
  emergencyEnabled: s.optionalNullable(s.boolean()),
  _keysMap: {
    friendlyName: "friendly_name",
    customerName: "customer_name",
    streetSecondary: "street_secondary",
    postalCode: "postal_code",
    isoCountry: "iso_country",
    forceValidation: "force_validation",
    bypassValidation: "bypass_validation",
    autoCorrectAddress: "auto_correct_address",
    emergencyEnabled: "emergency_enabled",
  },
});
