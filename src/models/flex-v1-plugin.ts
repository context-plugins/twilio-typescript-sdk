import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1Plugin = {
  /** The unique string that we created to identify the Flex Plugin resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Plugin resource and owns this resource.
   */
  accountSid?: string | null;
  /** The name that uniquely identifies this Flex Plugin resource. */
  uniqueName?: string | null;
  /** The friendly name this Flex Plugin resource. */
  friendlyName?: string | null;
  /**
   * A descriptive string that you create to describe the plugin resource. It can be up to 500
   * characters long
   */
  description?: string | null;
  /** Whether the Flex Plugin is archived. The default value is false. */
  archived?: boolean | null;
  /**
   * The date and time in GMT-7 when the Flex Plugin was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT-7 when the Flex Plugin was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Flex Plugin resource. */
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
