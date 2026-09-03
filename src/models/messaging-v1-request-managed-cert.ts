import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1RequestManagedCert = {
  domainSid?: string | null;
  dateUpdated?: Date | null;
  dateCreated?: Date | null;
  dateExpires?: Date | null;
  domainName?: string | null;
  certificateSid?: string | null;
  url?: string | null;
  managed?: boolean | null;
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
