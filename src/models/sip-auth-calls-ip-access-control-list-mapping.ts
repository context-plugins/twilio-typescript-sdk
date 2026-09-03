import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SipAuthCallsIpAccessControlListMapping = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
};

export const sipAuthCallsIpAccessControlListMappingSchema: Schema<SipAuthCallsIpAccessControlListMapping> =
  s.object<SipAuthCallsIpAccessControlListMapping>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
    },
  });
