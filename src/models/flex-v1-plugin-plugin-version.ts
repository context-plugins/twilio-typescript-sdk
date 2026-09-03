import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginPluginVersion = {
  sid?: string | null;
  pluginSid?: string | null;
  accountSid?: string | null;
  version?: string | null;
  pluginUrl?: string | null;
  changelog?: string | null;
  private?: boolean | null;
  archived?: boolean | null;
  validated?: boolean | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const flexV1PluginPluginVersionSchema: Schema<FlexV1PluginPluginVersion> =
  s.object<FlexV1PluginPluginVersion>({
    sid: s.optionalNullable(s.string()),
    pluginSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    version: s.optionalNullable(s.string()),
    pluginUrl: s.optionalNullable(s.string()),
    changelog: s.optionalNullable(s.string()),
    private: s.optionalNullable(s.boolean()),
    archived: s.optionalNullable(s.boolean()),
    validated: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      pluginSid: "plugin_sid",
      accountSid: "account_sid",
      pluginUrl: "plugin_url",
      dateCreated: "date_created",
    },
  });
