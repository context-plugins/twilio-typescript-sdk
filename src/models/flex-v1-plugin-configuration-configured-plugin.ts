import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginConfigurationConfiguredPlugin = {
  accountSid?: string | null;
  configurationSid?: string | null;
  pluginSid?: string | null;
  pluginVersionSid?: string | null;
  phase?: number;
  pluginUrl?: string | null;
  uniqueName?: string | null;
  friendlyName?: string | null;
  description?: string | null;
  pluginArchived?: boolean | null;
  version?: string | null;
  changelog?: string | null;
  pluginVersionArchived?: boolean | null;
  private?: boolean | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const flexV1PluginConfigurationConfiguredPluginSchema: Schema<FlexV1PluginConfigurationConfiguredPlugin> =
  s.object<FlexV1PluginConfigurationConfiguredPlugin>({
    accountSid: s.optionalNullable(s.string()),
    configurationSid: s.optionalNullable(s.string()),
    pluginSid: s.optionalNullable(s.string()),
    pluginVersionSid: s.optionalNullable(s.string()),
    phase: s.optional(s.number()),
    pluginUrl: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    pluginArchived: s.optionalNullable(s.boolean()),
    version: s.optionalNullable(s.string()),
    changelog: s.optionalNullable(s.string()),
    pluginVersionArchived: s.optionalNullable(s.boolean()),
    private: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      configurationSid: "configuration_sid",
      pluginSid: "plugin_sid",
      pluginVersionSid: "plugin_version_sid",
      pluginUrl: "plugin_url",
      uniqueName: "unique_name",
      friendlyName: "friendly_name",
      pluginArchived: "plugin_archived",
      pluginVersionArchived: "plugin_version_archived",
      dateCreated: "date_created",
    },
  });
