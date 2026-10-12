import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  supportingDocumentEnumStatusSchema,
  type SupportingDocumentEnumStatus,
} from "./supporting-document-enum-status.js";

export type NumbersV2RegulatoryComplianceSupportingDocument = {
  /** The unique string created by Twilio to identify the Supporting Document resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document
   * resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The image type uploaded in the Supporting Document container. */
  mimeType?: string | null;
  /** The verification status of the Supporting Document resource. */
  status?: SupportingDocumentEnumStatus;
  /** The failure reason of the Supporting Document Resource. */
  failureReason?: string | null;
  /** A list of errors that occurred during the registering RC Bundle */
  errors?: Record<string, unknown>[] | null;
  /** The type of the Supporting Document. */
  type?: string | null;
  /**
   * The set of parameters that are the attributes of the Supporting Documents resource which are
   * listed in the Supporting Document Types.
   */
  attributes?: Record<string, unknown> | null;
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
  /** The absolute URL of the Supporting Document resource. */
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
