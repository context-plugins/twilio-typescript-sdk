import { s, type Schema } from "../core/index.js";

export type MessagingV1ServiceDestinationAlphaSender = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  alphaSender?: string | null;
  capabilities?: string[] | null;
  url?: string | null;
  isoCountryCode?: string | null;
};

export const messagingV1ServiceDestinationAlphaSenderSchema: Schema<MessagingV1ServiceDestinationAlphaSender> =
  s.object<MessagingV1ServiceDestinationAlphaSender>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    alphaSender: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    isoCountryCode: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      alphaSender: "alpha_sender",
      isoCountryCode: "iso_country_code",
    },
  });
