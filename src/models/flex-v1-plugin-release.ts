import { s, type Schema } from "../core/index.js";

export type FlexV1PluginRelease = {
  sid?: string | null;
  accountSid?: string | null;
  configurationSid?: string | null;
  dateCreated?: Date | null;
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
