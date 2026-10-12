import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2AddressCreate = {
  /** A human-readable description of this resource, up to 64 characters. */
  friendlyName?: string | null;
  /** The name of the customer associated with this address. */
  customerName?: string | null;
  /** The street address. */
  street: string;
  /** The additional street address information. */
  streetSecondary?: string | null;
  /** The locality or city of this address. */
  locality?: string | null;
  /** The state or region of this address. */
  region?: string | null;
  /** The postal code of this address. */
  postalCode?: string | null;
  /** The ISO country code of this address. */
  isoCountry: string;
  /** The source system that created this address. */
  source?: string | null;
  /** Whether to force validation of the address. */
  forceValidation?: boolean | null;
  /** Whether to bypass validation of the address. */
  bypassValidation?: boolean | null;
  /** Whether to automatically correct the address. */
  autoCorrectAddress?: boolean | null;
  /** Whether this address is enabled for emergency services. */
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
