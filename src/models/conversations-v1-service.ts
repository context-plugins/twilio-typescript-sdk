import { s, type Schema } from "../core/index.js";

export type ConversationsV1Service = {
  accountSid?: string | null;
  sid?: string | null;
  friendlyName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const conversationsV1ServiceSchema: Schema<ConversationsV1Service> = s.object<ConversationsV1Service>({
  accountSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
