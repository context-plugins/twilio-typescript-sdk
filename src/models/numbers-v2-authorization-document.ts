import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationDocumentEnumStatusSchema,
  type AuthorizationDocumentEnumStatus,
} from "./authorization-document-enum-status.js";

export type NumbersV2AuthorizationDocument = {
  /** A 34 character string that uniquely identifies this AuthorizationDocument. */
  sid?: string | null;
  /**
   * A 34 character string that uniquely identifies the Address resource that is associated with
   * this AuthorizationDocument.
   */
  addressSid?: string | null;
  /**
   * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed
   * LOA, 4. canceled, 5. failed. See the section entitled [Status
   * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
   * for more information on each of these statuses.
   */
  status?: AuthorizationDocumentEnumStatus;
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email?: string | null;
  /**
   * Email recipients who will be informed when an Authorization Document has been sent and signed.
   */
  ccEmails?: string[] | null;
  /**
   * The date this resource was created, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was updated, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
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
