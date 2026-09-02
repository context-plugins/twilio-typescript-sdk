import { s, type Schema } from "../core/index.js";

export type FlexV1Channel = {
  accountSid?: string | null;
  flexFlowSid?: string | null;
  sid?: string | null;
  userSid?: string | null;
  taskSid?: string | null;
  url?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const flexV1ChannelSchema: Schema<FlexV1Channel> = s.object<FlexV1Channel>({
  accountSid: s.optionalNullable(s.string()),
  flexFlowSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  userSid: s.optionalNullable(s.string()),
  taskSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  _keysMap: {
    accountSid: "account_sid",
    flexFlowSid: "flex_flow_sid",
    userSid: "user_sid",
    taskSid: "task_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
