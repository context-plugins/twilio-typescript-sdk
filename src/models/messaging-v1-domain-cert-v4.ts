import { s, type Schema } from "../core/index.js";

export type MessagingV1DomainCertV4 = {
  domainSid?: string | null;
  dateUpdated?: Date | null;
  dateExpires?: Date | null;
  dateCreated?: Date | null;
  domainName?: string | null;
  certificateSid?: string | null;
  url?: string | null;
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
