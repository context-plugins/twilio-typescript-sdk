import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
};

export const apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema: Schema<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping> =
  s.object<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping>({
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
