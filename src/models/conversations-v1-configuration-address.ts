import { s, type Schema } from "../core/index.js";

export type ConversationsV1ConfigurationAddress = {
  sid?: string | null;
  accountSid?: string | null;
  type?: string | null;
  address?: string | null;
  friendlyName?: string | null;
  autoCreation?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
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
