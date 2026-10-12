import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bundleCloneEnumStatusSchema, type BundleCloneEnumStatus } from "./bundle-clone-enum-status.js";

export type NumbersV2BundleClone = {
  /** The unique string that we created to identify the Bundle resource. */
  bundleSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle
   * resource.
   */
  accountSid?: string | null;
  /** The unique string of a regulation that is associated to the Bundle resource. */
  regulationSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The verification status of the Bundle resource. */
  status?: BundleCloneEnumStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the
   * resource will be valid until.
   */
  validUntil?: Date | null;
  /** The email address that will receive updates when the Bundle resource changes status. */
  email?: string | null;
  /** The URL we call to inform your application of status changes. */
  statusCallback?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const numbersV2BundleCloneSchema: Schema<NumbersV2BundleClone> = s.object<NumbersV2BundleClone>({
  bundleSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  regulationSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => bundleCloneEnumStatusSchema)),
  validUntil: s.optionalNullable(s.dateTime()),
  email: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    bundleSid: "bundle_sid",
    accountSid: "account_sid",
    regulationSid: "regulation_sid",
    friendlyName: "friendly_name",
    validUntil: "valid_until",
    statusCallback: "status_callback",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
