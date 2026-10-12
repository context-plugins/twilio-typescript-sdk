import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ConfigurationAddress = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) the address belongs
   * to
   */
  accountSid?: string | null;
  /** Type of Address, value can be `whatsapp` or `sms`. */
  type?: string | null;
  /** The unique address to be configured. The address can be a whatsapp address or phone number */
  address?: string | null;
  /** The human-readable name of this configuration, limited to 256 characters. Optional. */
  friendlyName?: string | null;
  /** Auto Creation configuration for the address. */
  autoCreation?: Record<string, unknown> | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this address configuration. */
  url?: string | null;
  /**
   * An ISO 3166-1 alpha-2n country code which the address belongs to. This is currently only
   * applicable to short code addresses.
   */
  addressCountry?: string | null;
};

export const conversationsV1ConfigurationAddressSchema: Schema<ConversationsV1ConfigurationAddress> =
  s.object<ConversationsV1ConfigurationAddress>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    autoCreation: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    addressCountry: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      autoCreation: "auto_creation",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      addressCountry: "address_country",
    },
  });
