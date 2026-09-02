import { s, type Schema } from "../core/index.js";

export type FlexV1Plugin = {
  sid?: string | null;
  accountSid?: string | null;
  uniqueName?: string | null;
  friendlyName?: string | null;
  description?: string | null;
  archived?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const flexV1PluginSchema: Schema<FlexV1Plugin> = s.object<FlexV1Plugin>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  archived: s.optionalNullable(s.boolean()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    uniqueName: "unique_name",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
