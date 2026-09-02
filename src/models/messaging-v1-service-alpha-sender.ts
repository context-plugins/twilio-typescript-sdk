import { s, type Schema } from "../core/index.js";

export type MessagingV1ServiceAlphaSender = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  alphaSender?: string | null;
  capabilities?: string[] | null;
  url?: string | null;
};

export const messagingV1ServiceAlphaSenderSchema: Schema<MessagingV1ServiceAlphaSender> =
  s.object<MessagingV1ServiceAlphaSender>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    alphaSender: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      alphaSender: "alpha_sender",
    },
  });
