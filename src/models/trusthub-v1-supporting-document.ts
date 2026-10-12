import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  supportingDocumentEnumStatus1Schema,
  type SupportingDocumentEnumStatus1,
} from "./supporting-document-enum-status1.js";

export type TrusthubV1SupportingDocument = {
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
  status?: SupportingDocumentEnumStatus1;
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

export const trusthubV1SupportingDocumentSchema: Schema<TrusthubV1SupportingDocument> =
  s.object<TrusthubV1SupportingDocument>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    mimeType: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => supportingDocumentEnumStatus1Schema)),
    type: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      mimeType: "mime_type",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
