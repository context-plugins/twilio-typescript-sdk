import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1LinkshorteningMessagingService = {
  domainSid?: string | null;
  messagingServiceSid?: string | null;
  url?: string | null;
};

export const messagingV1LinkshorteningMessagingServiceSchema: Schema<MessagingV1LinkshorteningMessagingService> =
  s.object<MessagingV1LinkshorteningMessagingService>({
    domainSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      domainSid: "domain_sid",
      messagingServiceSid: "messaging_service_sid",
    },
  });
