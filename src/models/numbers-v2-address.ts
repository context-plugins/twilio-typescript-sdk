import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2Address = {
  /** A 34 character string that uniquely identifies this Address resource. */
  sid?: string;
  /** The unique SID identifier of the Account. */
  accountSid?: string;
  /** The name of the customer associated with this address. */
  customerName?: string | null;
  /** The date that this resource was created, given in RFC 2822 format. */
  dateCreated?: Date;
  /** The date that this resource was last updated, given in RFC 2822 format. */
  dateUpdated?: Date;
  /** Whether this address is enabled for emergency services. */
  emergencyEnabled?: boolean;
  /** A human-readable description of this resource, up to 64 characters. */
  friendlyName?: string | null;
  /** The ISO country code of this address. */
  isoCountry?: string;
  /** The locality or city of this address. */
  locality?: string | null;
  /** The postal code of this address. */
  postalCode?: string | null;
  /** The state or region of this address. */
  region?: string | null;
  /** The source system that created this address. */
  source?: string;
  /** The status of this address. */
  status?: string;
  /** The street address. */
  street?: string | null;
  /** The additional street address information. */
  streetSecondary?: string | null;
  /** A list of related resources identified by their URIs. */
  subresourceUris?: Record<string, unknown>;
  /** Whether this address has been validated. */
  validated?: boolean;
  /** Whether this address has been verified. */
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
