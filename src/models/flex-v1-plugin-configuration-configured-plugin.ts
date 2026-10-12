import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginConfigurationConfiguredPlugin = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Flex Plugin
   * resource is installed for.
   */
  accountSid?: string | null;
  /** The SID of the Flex Plugin Configuration that this Flex Plugin belongs to. */
  configurationSid?: string | null;
  /** The SID of the Flex Plugin. */
  pluginSid?: string | null;
  /** The SID of the Flex Plugin Version. */
  pluginVersionSid?: string | null;
  /** The phase this Flex Plugin would initialize at runtime. @default 0 */
  phase?: number;
  /** The URL of where the Flex Plugin Version JavaScript bundle is hosted on. */
  pluginUrl?: string | null;
  /** The name that uniquely identifies this Flex Plugin resource. */
  uniqueName?: string | null;
  /** The friendly name of this Flex Plugin resource. */
  friendlyName?: string | null;
  /**
   * A descriptive string that you create to describe the plugin resource. It can be up to 500
   * characters long
   */
  description?: string | null;
  /** Whether the Flex Plugin is archived. The default value is false. */
  pluginArchived?: boolean | null;
  /** The latest version of this Flex Plugin Version. */
  version?: string | null;
  /** A changelog that describes the changes this Flex Plugin Version brings. */
  changelog?: string | null;
  /** Whether the Flex Plugin Version is archived. The default value is false. */
  pluginVersionArchived?: boolean | null;
  /** Whether to validate the request is authorized to access the Flex Plugin Version. */
  private?: boolean | null;
  /**
   * The date and time in GMT when the Flex Plugin was installed specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Flex Plugin resource. */
  url?: string | null;
};

export const flexV1PluginConfigurationConfiguredPluginSchema: Schema<FlexV1PluginConfigurationConfiguredPlugin> =
  s.object<FlexV1PluginConfigurationConfiguredPlugin>({
    accountSid: s.optionalNullable(s.string()),
    configurationSid: s.optionalNullable(s.string()),
    pluginSid: s.optionalNullable(s.string()),
    pluginVersionSid: s.optionalNullable(s.string()),
    phase: s.defaulted(s.int(), 0),
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
