import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1WebChannel = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * WebChannel resource and owns this Workflow.
   */
  accountSid?: string | null;
  /** The SID of the Flex Flow. */
  flexFlowSid?: string | null;
  /** The unique string that we created to identify the WebChannel resource. */
  sid?: string | null;
  /** The absolute URL of the WebChannel resource. */
  url?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
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
