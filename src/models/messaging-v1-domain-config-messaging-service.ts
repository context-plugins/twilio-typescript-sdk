import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1DomainConfigMessagingService = {
  domainSid?: string | null;
  configSid?: string | null;
  messagingServiceSid?: string | null;
  fallbackUrl?: string | null;
  callbackUrl?: string | null;
  continueOnFailure?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const messagingV1DomainConfigMessagingServiceSchema: Schema<MessagingV1DomainConfigMessagingService> =
  s.object<MessagingV1DomainConfigMessagingService>({
    domainSid: s.optionalNullable(s.string()),
    configSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    fallbackUrl: s.optionalNullable(s.string()),
    callbackUrl: s.optionalNullable(s.string()),
    continueOnFailure: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      domainSid: "domain_sid",
      configSid: "config_sid",
      messagingServiceSid: "messaging_service_sid",
      fallbackUrl: "fallback_url",
      callbackUrl: "callback_url",
      continueOnFailure: "continue_on_failure",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
