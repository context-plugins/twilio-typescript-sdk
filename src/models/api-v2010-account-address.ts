import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountAddress = {
  accountSid?: string | null;
  city?: string | null;
  customerName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  isoCountry?: string | null;
  postalCode?: string | null;
  region?: string | null;
  sid?: string | null;
  street?: string | null;
  uri?: string | null;
  emergencyEnabled?: boolean | null;
  validated?: boolean | null;
  verified?: boolean | null;
  streetSecondary?: string | null;
};

export const apiV2010AccountAddressSchema: Schema<ApiV2010AccountAddress> = s.object<ApiV2010AccountAddress>({
  accountSid: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  customerName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  isoCountry: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  street: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  emergencyEnabled: s.optionalNullable(s.boolean()),
  validated: s.optionalNullable(s.boolean()),
  verified: s.optionalNullable(s.boolean()),
  streetSecondary: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    customerName: "customer_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    friendlyName: "friendly_name",
    isoCountry: "iso_country",
    postalCode: "postal_code",
    emergencyEnabled: "emergency_enabled",
    streetSecondary: "street_secondary",
  },
});
