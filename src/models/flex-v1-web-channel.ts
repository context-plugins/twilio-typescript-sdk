import { s, type Schema } from "../core/index.js";

export type FlexV1WebChannel = {
  accountSid?: string | null;
  flexFlowSid?: string | null;
  sid?: string | null;
  url?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const flexV1WebChannelSchema: Schema<FlexV1WebChannel> = s.object<FlexV1WebChannel>({
  accountSid: s.optionalNullable(s.string()),
  flexFlowSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  _keysMap: {
    accountSid: "account_sid",
    flexFlowSid: "flex_flow_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
