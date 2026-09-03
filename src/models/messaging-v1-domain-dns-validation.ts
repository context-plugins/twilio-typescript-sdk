import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1DomainDnsValidation = {
  domainSid?: string | null;
  isValid?: boolean | null;
  reason?: string | null;
  url?: string | null;
};

export const messagingV1DomainDnsValidationSchema: Schema<MessagingV1DomainDnsValidation> =
  s.object<MessagingV1DomainDnsValidation>({
    domainSid: s.optionalNullable(s.string()),
    isValid: s.optionalNullable(s.boolean()),
    reason: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      domainSid: "domain_sid",
      isValid: "is_valid",
    },
  });
