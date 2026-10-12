import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipDomainSipIpAccessControlListMapping = {
  /** The unique id of the Account that is responsible for this resource. */
  accountSid?: string | null;
  /**
   * The date that this resource was created, given as GMT in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateCreated?: string | null;
  /**
   * The date that this resource was last updated, given as GMT in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateUpdated?: string | null;
  /** The unique string that is created to identify the SipDomain resource. */
  domainSid?: string | null;
  /** A human readable descriptive text for this resource, up to 64 characters long. */
  friendlyName?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The URI for this resource, relative to `https://api.twilio.com` */
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
