import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1PluginRelease = {
  /** The unique string that we created to identify the Plugin Release resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Plugin
   * Release resource and owns this resource.
   */
  accountSid?: string | null;
  /** The SID of the Plugin Configuration resource to release. */
  configurationSid?: string | null;
  /**
   * The date and time in GMT when the Flex Plugin Release was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Plugin Release resource. */
  url?: string | null;
};

export const flexV1PluginReleaseSchema: Schema<FlexV1PluginRelease> = s.object<FlexV1PluginRelease>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  configurationSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    configurationSid: "configuration_sid",
    dateCreated: "date_created",
  },
});
