import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = {
  /** The unique string that that we created to identify the resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  resourceSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** A short description of the functionality that the Add-on provides. */
  description?: string | null;
  /** A JSON string that represents the current configuration of this Add-on installation. */
  configuration?: Record<string, unknown> | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of
   * the resource's `sid` in the URL to address the resource.
   */
  uniqueName?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** A list of related resources identified by their relative URIs. */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema: Schema<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn> =
  s.object<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    resourceSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.record(s.string(), s.unknown())),
    uniqueName: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      resourceSid: "resource_sid",
      friendlyName: "friendly_name",
      uniqueName: "unique_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      subresourceUris: "subresource_uris",
    },
  });
