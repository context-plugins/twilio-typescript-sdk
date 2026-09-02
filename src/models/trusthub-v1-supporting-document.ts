import { s, type Schema } from "../core/index.js";
import {
  supportingDocumentEnumStatus1Schema,
  type SupportingDocumentEnumStatus1,
} from "./supporting-document-enum-status1.js";

export type TrusthubV1SupportingDocument = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  mimeType?: string | null;
  status?: SupportingDocumentEnumStatus1;
  type?: string | null;
  attributes?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
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
