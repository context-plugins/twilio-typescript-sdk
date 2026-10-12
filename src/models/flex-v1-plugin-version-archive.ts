import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginVersionArchive = {
  /** The unique string that we created to identify the Flex Plugin Version resource. */
  sid?: string | null;
  /** The SID of the Flex Plugin resource this Flex Plugin Version belongs to. */
  pluginSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Plugin Version resource and owns this resource.
   */
  accountSid?: string | null;
  /** The unique version of this Flex Plugin Version. */
  version?: string | null;
  /** The URL of where the Flex Plugin Version JavaScript bundle is hosted on. */
  pluginUrl?: string | null;
  /** A changelog that describes the changes this Flex Plugin Version brings. */
  changelog?: string | null;
  /**
   * Whether to inject credentials while accessing this Plugin Version. The default value is false.
   */
  private?: boolean | null;
  /** Whether the Flex Plugin Version is archived. The default value is false. */
  archived?: boolean | null;
  /**
   * The date and time in GMT when the Flex Plugin Version was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Flex Plugin Version resource. */
  url?: string | null;
};

export const flexV1PluginVersionArchiveSchema: Schema<FlexV1PluginVersionArchive> =
  s.object<FlexV1PluginVersionArchive>({
    sid: s.optionalNullable(s.string()),
    pluginSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    version: s.optionalNullable(s.string()),
    pluginUrl: s.optionalNullable(s.string()),
    changelog: s.optionalNullable(s.string()),
    private: s.optionalNullable(s.boolean()),
    archived: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      pluginSid: "plugin_sid",
      accountSid: "account_sid",
      pluginUrl: "plugin_url",
      dateCreated: "date_created",
    },
  });
