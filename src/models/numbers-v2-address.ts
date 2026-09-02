import { s, type Schema } from "../core/index.js";

export type NumbersV2Address = {
  sid?: string;
  accountSid?: string;
  customerName?: string | null;
  dateCreated?: Date;
  dateUpdated?: Date;
  emergencyEnabled?: boolean;
  friendlyName?: string | null;
  isoCountry?: string;
  locality?: string | null;
  postalCode?: string | null;
  region?: string | null;
  source?: string;
  status?: string;
  street?: string | null;
  streetSecondary?: string | null;
  subresourceUris?: Record<string, unknown>;
  validated?: boolean;
  verified?: boolean;
};

export const numbersV2AddressSchema: Schema<NumbersV2Address> = s.object<NumbersV2Address>({
  sid: s.optional(s.string()),
  accountSid: s.optional(s.string()),
  customerName: s.optionalNullable(s.string()),
  dateCreated: s.optional(s.dateTime()),
  dateUpdated: s.optional(s.dateTime()),
  emergencyEnabled: s.optional(s.boolean()),
  friendlyName: s.optionalNullable(s.string()),
  isoCountry: s.optional(s.string()),
  locality: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  source: s.optional(s.string()),
  status: s.optional(s.string()),
  street: s.optionalNullable(s.string()),
  streetSecondary: s.optionalNullable(s.string()),
  subresourceUris: s.optional(s.record(s.string(), s.unknown())),
  validated: s.optional(s.boolean()),
  verified: s.optional(s.boolean()),
  _keysMap: {
    accountSid: "account_sid",
    customerName: "customer_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    emergencyEnabled: "emergency_enabled",
    friendlyName: "friendly_name",
    isoCountry: "iso_country",
    postalCode: "postal_code",
    streetSecondary: "street_secondary",
    subresourceUris: "subresource_uris",
  },
});
