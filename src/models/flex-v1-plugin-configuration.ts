import { s, type Schema } from "../core/index.js";

export type FlexV1PluginConfiguration = {
  sid?: string | null;
  accountSid?: string | null;
  name?: string | null;
  description?: string | null;
  archived?: boolean | null;
  dateCreated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const flexV1PluginConfigurationSchema: Schema<FlexV1PluginConfiguration> =
  s.object<FlexV1PluginConfiguration>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    archived: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
    },
  });
