import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2RegulatoryComplianceBundleItemAssignment = {
  sid?: string | null;
  bundleSid?: string | null;
  accountSid?: string | null;
  objectSid?: string | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceBundleItemAssignmentSchema: Schema<NumbersV2RegulatoryComplianceBundleItemAssignment> =
  s.object<NumbersV2RegulatoryComplianceBundleItemAssignment>({
    sid: s.optionalNullable(s.string()),
    bundleSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    objectSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      bundleSid: "bundle_sid",
      accountSid: "account_sid",
      objectSid: "object_sid",
      dateCreated: "date_created",
    },
  });
