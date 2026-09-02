import { s, type Schema } from "../core/index.js";

export type MessagingV1ServiceAddons = {
  sid?: string;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  addOnTypeSid?: string | null;
  addOnConfig?: string | null;
  url?: string | null;
};

export const messagingV1ServiceAddonsSchema: Schema<MessagingV1ServiceAddons> =
  s.object<MessagingV1ServiceAddons>({
    sid: s.optional(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    addOnTypeSid: s.optionalNullable(s.string()),
    addOnConfig: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      addOnTypeSid: "add_on_type_sid",
      addOnConfig: "add_on_config",
    },
  });
