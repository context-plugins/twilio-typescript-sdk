import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipIpAccessControlListSipIpAddress = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The unique id of the Account that is responsible for this resource. */
  accountSid?: string | null;
  /** A human readable descriptive text for this resource, up to 255 characters long. */
  friendlyName?: string | null;
  /**
   * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP
   * requests from this IP address will be allowed by Twilio. IPv4 only supported today.
   */
  ipAddress?: string | null;
  /**
   * An integer representing the length of the CIDR prefix to use with this IP address when
   * accepting traffic. By default the entire IP address is used.
   *
   * @default 0
   */
  cidrPrefixLength?: number;
  /** The unique id of the IpAccessControlList resource that includes this resource. */
  ipAccessControlListSid?: string | null;
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
  /** The URI for this resource, relative to `https://api.twilio.com` */
  uri?: string | null;
};

export const apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema: Schema<ApiV2010AccountSipSipIpAccessControlListSipIpAddress> =
  s.object<ApiV2010AccountSipSipIpAccessControlListSipIpAddress>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    ipAddress: s.optionalNullable(s.string()),
    cidrPrefixLength: s.defaulted(s.int(), 0),
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
