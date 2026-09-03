import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2DomainCertV4 = {
  domainSid?: string | null;
  dateUpdated?: Date | null;
  dateExpires?: Date | null;
  dateCreated?: Date | null;
  domainName?: string | null;
  certificateSid?: string | null;
  managed?: boolean | null;
  requesting?: boolean | null;
  url?: string | null;
  certInValidation?: Record<string, unknown> | null;
};

export const messagingV2DomainCertV4Schema: Schema<MessagingV2DomainCertV4> =
  s.object<MessagingV2DomainCertV4>({
    domainSid: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    dateExpires: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    domainName: s.optionalNullable(s.string()),
    certificateSid: s.optionalNullable(s.string()),
    managed: s.optionalNullable(s.boolean()),
    requesting: s.optionalNullable(s.boolean()),
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
