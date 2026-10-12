import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountAddress = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for
   * the Address resource.
   */
  accountSid?: string | null;
  /** The city in which the address is located. */
  city?: string | null;
  /**
   * The name associated with the address.This property has a maximum length of 16 4-byte
   * characters, or 21 3-byte characters.
   */
  customerName?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The ISO country code of the address. */
  isoCountry?: string | null;
  /** The postal code of the address. */
  postalCode?: string | null;
  /** The state or region of the address. */
  region?: string | null;
  /** The unique string that that we created to identify the Address resource. */
  sid?: string | null;
  /** The number and street address of the address. */
  street?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** Whether emergency calling has been enabled on this number. */
  emergencyEnabled?: boolean | null;
  /**
   * Whether the address has been validated to comply with local regulation. In countries that
   * require valid addresses, an invalid address will not be accepted. `true` indicates the Address
   * has been validated. `false` indicate the country doesn't require validation or the Address is
   * not valid.
   */
  validated?: boolean | null;
  /**
   * Whether the address has been verified to comply with regulation. In countries that require
   * valid addresses, an invalid address will not be accepted. `true` indicates the Address has been
   * verified. `false` indicate the country doesn't require verified or the Address is not valid.
   */
  verified?: boolean | null;
  /** The additional number and street address of the address. */
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
