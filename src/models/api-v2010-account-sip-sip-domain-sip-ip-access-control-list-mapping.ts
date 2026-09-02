import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountSipSipDomainSipIpAccessControlListMapping = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  domainSid?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export const apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema: Schema<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping> =
  s.object<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    domainSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      domainSid: "domain_sid",
      friendlyName: "friendly_name",
    },
  });
