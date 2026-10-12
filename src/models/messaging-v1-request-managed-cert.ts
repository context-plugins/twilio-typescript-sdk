import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1RequestManagedCert = {
  /** The unique string that we created to identify the Domain resource. */
  domainSid?: string | null;
  /** Date that this Domain was last updated. */
  dateUpdated?: Date | null;
  /** Date that this Domain was registered to the Twilio platform to create a new Domain object. */
  dateCreated?: Date | null;
  /**
   * Date that the private certificate associated with this domain expires. This is the expiration
   * date of your existing cert.
   */
  dateExpires?: Date | null;
  /** Full url path for this domain. */
  domainName?: string | null;
  /** The unique string that we created to identify this Certificate resource. */
  certificateSid?: string | null;
  url?: string | null;
  /** A boolean flag indicating if the certificate is managed by Twilio. */
  managed?: boolean | null;
  /** A boolean flag indicating if a managed certificate needs to be fulfilled by Twilio. */
  requesting?: boolean | null;
};

export const messagingV1RequestManagedCertSchema: Schema<MessagingV1RequestManagedCert> =
  s.object<MessagingV1RequestManagedCert>({
    domainSid: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateExpires: s.optionalNullable(s.dateTime()),
    domainName: s.optionalNullable(s.string()),
    certificateSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    managed: s.optionalNullable(s.boolean()),
    requesting: s.optionalNullable(s.boolean()),
    _keysMap: {
      domainSid: "domain_sid",
      dateUpdated: "date_updated",
      dateCreated: "date_created",
      dateExpires: "date_expires",
      domainName: "domain_name",
      certificateSid: "certificate_sid",
    },
  });
