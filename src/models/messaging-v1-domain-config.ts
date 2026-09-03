import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1DomainConfig = {
  domainSid?: string | null;
  configSid?: string | null;
  fallbackUrl?: string | null;
  callbackUrl?: string | null;
  continueOnFailure?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  disableHttps?: boolean | null;
};

export const messagingV1DomainConfigSchema: Schema<MessagingV1DomainConfig> =
  s.object<MessagingV1DomainConfig>({
    domainSid: s.optionalNullable(s.string()),
    configSid: s.optionalNullable(s.string()),
    fallbackUrl: s.optionalNullable(s.string()),
    callbackUrl: s.optionalNullable(s.string()),
    continueOnFailure: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    disableHttps: s.optionalNullable(s.boolean()),
    _keysMap: {
      domainSid: "domain_sid",
      configSid: "config_sid",
      fallbackUrl: "fallback_url",
      callbackUrl: "callback_url",
      continueOnFailure: "continue_on_failure",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      disableHttps: "disable_https",
    },
  });
