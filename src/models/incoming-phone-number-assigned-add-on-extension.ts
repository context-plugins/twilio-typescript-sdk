import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomingPhoneNumberAssignedAddOnExtension = {
  /** The unique string that that we created to identify the resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the Phone Number to which the Add-on is assigned. */
  resourceSid?: string | null;
  /** The SID that uniquely identifies the assigned Add-on installation. */
  assignedAddOnSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** A string that you assigned to describe the Product this Extension is used within. */
  productName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of
   * the resource's `sid` in the URL to address the resource.
   */
  uniqueName?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** Whether the Extension will be invoked. */
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
