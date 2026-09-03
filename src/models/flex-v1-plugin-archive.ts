import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginArchive = {
  sid?: string | null;
  accountSid?: string | null;
  uniqueName?: string | null;
  friendlyName?: string | null;
  description?: string | null;
  archived?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const flexV1PluginArchiveSchema: Schema<FlexV1PluginArchive> = s.object<FlexV1PluginArchive>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  archived: s.optionalNullable(s.boolean()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    uniqueName: "unique_name",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
