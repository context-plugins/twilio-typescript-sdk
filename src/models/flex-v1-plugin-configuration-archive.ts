import { s, type Schema } from "../core/index.js";

export type FlexV1PluginConfigurationArchive = {
  sid?: string | null;
  accountSid?: string | null;
  name?: string | null;
  description?: string | null;
  archived?: boolean | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const flexV1PluginConfigurationArchiveSchema: Schema<FlexV1PluginConfigurationArchive> =
  s.object<FlexV1PluginConfigurationArchive>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    archived: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
    },
  });
