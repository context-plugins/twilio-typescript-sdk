import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  supportingDocumentEnumStatusSchema,
  type SupportingDocumentEnumStatus,
} from "./supporting-document-enum-status.js";

export type NumbersV2RegulatoryComplianceSupportingDocument = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  mimeType?: string | null;
  status?: SupportingDocumentEnumStatus;
  failureReason?: string | null;
  errors?: Record<string, unknown>[] | null;
  type?: string | null;
  attributes?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceSupportingDocumentSchema: Schema<NumbersV2RegulatoryComplianceSupportingDocument> =
  s.object<NumbersV2RegulatoryComplianceSupportingDocument>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    mimeType: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => supportingDocumentEnumStatusSchema)),
    failureReason: s.optionalNullable(s.string()),
    errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    type: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      mimeType: "mime_type",
      failureReason: "failure_reason",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
