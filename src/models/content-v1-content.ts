import { s, type Schema } from "../core/index.js";

export type ContentV1Content = {
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  language?: string | null;
  variables?: Record<string, unknown> | null;
  types?: Record<string, unknown> | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const contentV1ContentSchema: Schema<ContentV1Content> = s.object<ContentV1Content>({
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  language: s.optionalNullable(s.string()),
  variables: s.optionalNullable(s.record(s.string(), s.unknown())),
  types: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    accountSid: "account_sid",
    friendlyName: "friendly_name",
  },
});
