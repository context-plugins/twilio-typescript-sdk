import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationDocumentEnumStatusSchema,
  type AuthorizationDocumentEnumStatus,
} from "./authorization-document-enum-status.js";

export type NumbersV2AuthorizationDocument = {
  sid?: string | null;
  addressSid?: string | null;
  status?: AuthorizationDocumentEnumStatus;
  email?: string | null;
  ccEmails?: string[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const numbersV2AuthorizationDocumentSchema: Schema<NumbersV2AuthorizationDocument> =
  s.object<NumbersV2AuthorizationDocument>({
    sid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => authorizationDocumentEnumStatusSchema)),
    email: s.optionalNullable(s.string()),
    ccEmails: s.optionalNullable(s.array(s.string())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      addressSid: "address_sid",
      ccEmails: "cc_emails",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
