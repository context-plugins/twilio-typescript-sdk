import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipIpAccessControlListSipIpAddress = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  ipAddress?: string | null;
  cidrPrefixLength?: number;
  ipAccessControlListSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema: Schema<ApiV2010AccountSipSipIpAccessControlListSipIpAddress> =
  s.object<ApiV2010AccountSipSipIpAccessControlListSipIpAddress>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    ipAddress: s.optionalNullable(s.string()),
    cidrPrefixLength: s.optional(s.number()),
    ipAccessControlListSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      ipAddress: "ip_address",
      cidrPrefixLength: "cidr_prefix_length",
      ipAccessControlListSid: "ip_access_control_list_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
