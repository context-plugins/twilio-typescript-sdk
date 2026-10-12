import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1LinkshorteningMessagingService = {
  /** The unique string identifies the domain resource */
  domainSid?: string | null;
  /** The unique string that identifies the messaging service */
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
