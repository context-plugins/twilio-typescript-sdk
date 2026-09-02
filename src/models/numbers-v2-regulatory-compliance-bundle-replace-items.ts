import { s, type Schema } from "../core/index.js";
import { replaceItemsEnumStatusSchema, type ReplaceItemsEnumStatus } from "./replace-items-enum-status.js";

export type NumbersV2RegulatoryComplianceBundleReplaceItems = {
  sid?: string | null;
  accountSid?: string | null;
  regulationSid?: string | null;
  friendlyName?: string | null;
  status?: ReplaceItemsEnumStatus;
  validUntil?: Date | null;
  email?: string | null;
  statusCallback?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const numbersV2RegulatoryComplianceBundleReplaceItemsSchema: Schema<NumbersV2RegulatoryComplianceBundleReplaceItems> =
  s.object<NumbersV2RegulatoryComplianceBundleReplaceItems>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    regulationSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => replaceItemsEnumStatusSchema)),
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
