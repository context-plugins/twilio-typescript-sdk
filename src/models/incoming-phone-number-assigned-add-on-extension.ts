import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomingPhoneNumberAssignedAddOnExtension = {
  sid?: string | null;
  accountSid?: string | null;
  resourceSid?: string | null;
  assignedAddOnSid?: string | null;
  friendlyName?: string | null;
  productName?: string | null;
  uniqueName?: string | null;
  uri?: string | null;
  enabled?: boolean | null;
};

export const incomingPhoneNumberAssignedAddOnExtensionSchema: Schema<IncomingPhoneNumberAssignedAddOnExtension> =
  s.object<IncomingPhoneNumberAssignedAddOnExtension>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    resourceSid: s.optionalNullable(s.string()),
    assignedAddOnSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    productName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    enabled: s.optionalNullable(s.boolean()),
    _keysMap: {
      accountSid: "account_sid",
      resourceSid: "resource_sid",
      assignedAddOnSid: "assigned_add_on_sid",
      friendlyName: "friendly_name",
      productName: "product_name",
      uniqueName: "unique_name",
    },
  });
