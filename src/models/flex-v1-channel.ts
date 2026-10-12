import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1Channel = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel
   * resource and owns this Workflow.
   */
  accountSid?: string | null;
  /** The SID of the Flex Flow. */
  flexFlowSid?: string | null;
  /** The unique string that we created to identify the Channel resource. */
  sid?: string | null;
  /** The SID of the chat user. */
  userSid?: string | null;
  /**
   * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for
   * integration types `studio` & `external`
   */
  taskSid?: string | null;
  /** The absolute URL of the Flex chat channel resource. */
  url?: string | null;
  /**
   * The date and time in GMT when the Flex chat channel was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the Flex chat channel was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
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
