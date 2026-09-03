import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipIpAccessControlList = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  subresourceUris?: Record<string, unknown> | null;
  uri?: string | null;
};

export const apiV2010AccountSipSipIpAccessControlListSchema: Schema<ApiV2010AccountSipSipIpAccessControlList> =
  s.object<ApiV2010AccountSipSipIpAccessControlList>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      subresourceUris: "subresource_uris",
    },
  });
