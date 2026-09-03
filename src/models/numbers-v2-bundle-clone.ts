import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bundleCloneEnumStatusSchema, type BundleCloneEnumStatus } from "./bundle-clone-enum-status.js";

export type NumbersV2BundleClone = {
  bundleSid?: string | null;
  accountSid?: string | null;
  regulationSid?: string | null;
  friendlyName?: string | null;
  status?: BundleCloneEnumStatus;
  validUntil?: Date | null;
  email?: string | null;
  statusCallback?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
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
