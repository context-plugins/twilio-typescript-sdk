import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = {
  sid?: string | null;
  accountSid?: string | null;
  resourceSid?: string | null;
  friendlyName?: string | null;
  description?: string | null;
  configuration?: Record<string, unknown> | null;
  uniqueName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  uri?: string | null;
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
