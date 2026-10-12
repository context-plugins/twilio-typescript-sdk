import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1DomainCertV4 = {
  /** The unique string that we created to identify the Domain resource. */
  domainSid?: string | null;
  /** Date that this Domain was last updated. */
  dateUpdated?: Date | null;
  /**
   * Date that the private certificate associated with this domain expires. You will need to update
   * the certificate before that date to ensure your shortened links will continue to work.
   */
  dateExpires?: Date | null;
  /** Date that this Domain was registered to the Twilio platform to create a new Domain object. */
  dateCreated?: Date | null;
  /** Full url path for this domain. */
  domainName?: string | null;
  /** The unique string that we created to identify this Certificate resource. */
  certificateSid?: string | null;
  url?: string | null;
  /**
   * Optional JSON field describing the status and upload date of a new certificate in the process
   * of validation
   */
  certInValidation?: Record<string, unknown> | null;
};

export const messagingV1DomainCertV4Schema: Schema<MessagingV1DomainCertV4> =
  s.object<MessagingV1DomainCertV4>({
    domainSid: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    dateExpires: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    domainName: s.optionalNullable(s.string()),
    certificateSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    certInValidation: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      domainSid: "domain_sid",
      dateUpdated: "date_updated",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      domainName: "domain_name",
      certificateSid: "certificate_sid",
      certInValidation: "cert_in_validation",
    },
  });
