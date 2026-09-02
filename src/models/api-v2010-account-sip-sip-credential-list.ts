import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountSipSipCredentialList = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
  subresourceUris?: Record<string, unknown> | null;
  uri?: string | null;
};

export const apiV2010AccountSipSipCredentialListSchema: Schema<ApiV2010AccountSipSipCredentialList> =
  s.object<ApiV2010AccountSipSipCredentialList>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      subresourceUris: "subresource_uris",
    },
  });
