import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginConfigurationArchive = {
  /** The unique string that we created to identify the Flex Plugin Configuration resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Plugin Configuration resource and owns this resource.
   */
  accountSid?: string | null;
  /** The name of this Flex Plugin Configuration. */
  name?: string | null;
  /** The description of the Flex Plugin Configuration resource. */
  description?: string | null;
  /** Whether the Flex Plugin Configuration is archived. The default value is false. */
  archived?: boolean | null;
  /**
   * The date and time in GMT when the Flex Plugin Configuration was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Flex Plugin Configuration resource. */
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
