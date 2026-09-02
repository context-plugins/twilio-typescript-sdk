import { s, type Schema } from "../core/index.js";

export type MessagingV1LinkshorteningMessagingServiceDomainAssociation = {
  domainSid?: string | null;
  messagingServiceSid?: string | null;
  url?: string | null;
};

export const messagingV1LinkshorteningMessagingServiceDomainAssociationSchema: Schema<MessagingV1LinkshorteningMessagingServiceDomainAssociation> =
  s.object<MessagingV1LinkshorteningMessagingServiceDomainAssociation>({
    domainSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      domainSid: "domain_sid",
      messagingServiceSid: "messaging_service_sid",
    },
  });
