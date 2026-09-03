import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bundleCopyEnumStatusSchema, type BundleCopyEnumStatus } from "./bundle-copy-enum-status.js";

export type NumbersV2RegulatoryComplianceBundleBundleCopy = {
  sid?: string | null;
  accountSid?: string | null;
  regulationSid?: string | null;
  friendlyName?: string | null;
  status?: BundleCopyEnumStatus;
  validUntil?: Date | null;
  email?: string | null;
  statusCallback?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const numbersV2RegulatoryComplianceBundleBundleCopySchema: Schema<NumbersV2RegulatoryComplianceBundleBundleCopy> =
  s.object<NumbersV2RegulatoryComplianceBundleBundleCopy>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    regulationSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => bundleCopyEnumStatusSchema)),
    validUntil: s.optionalNullable(s.dateTime()),
    email: s.optionalNullable(s.string()),
    statusCallback: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      regulationSid: "regulation_sid",
      friendlyName: "friendly_name",
      validUntil: "valid_until",
      statusCallback: "status_callback",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
