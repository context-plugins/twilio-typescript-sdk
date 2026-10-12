import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipIpAccessControlList = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) that owns this
   * resource.
   */
  accountSid?: string | null;
  /** A human readable descriptive text, up to 255 characters long. */
  friendlyName?: string | null;
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
  /** A list of the IpAddress resources associated with this IP access control list resource. */
  subresourceUris?: Record<string, unknown> | null;
  /** The URI for this resource, relative to `https://api.twilio.com` */
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
