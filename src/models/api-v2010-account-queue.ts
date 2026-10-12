import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountQueue = {
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The number of calls currently in the queue. @default 0 */
  currentSize?: number;
  /** A string that you assigned to describe this resource. */
  friendlyName?: string | null;
  /** The URI of this resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Queue
   * resource.
   */
  accountSid?: string | null;
  /**
   * The average wait time in seconds of the members in this queue. This is calculated at the time
   * of the request.
   *
   * @default 0
   */
  averageWaitTime?: number;
  /** The unique string that that we created to identify this Queue resource. */
  sid?: string | null;
  /**
   * The date and time in GMT that this resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The maximum number of calls that can be in the queue. The default is 1000 and the maximum is
   * 5000.
   *
   * @default 0
   */
  maxSize?: number;
};

export const apiV2010AccountQueueSchema: Schema<ApiV2010AccountQueue> = s.object<ApiV2010AccountQueue>({
  dateUpdated: s.optionalNullable(s.string()),
  currentSize: s.defaulted(s.int(), 0),
  friendlyName: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  averageWaitTime: s.defaulted(s.int(), 0),
  sid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  maxSize: s.defaulted(s.int(), 0),
  _keysMap: {
    dateUpdated: "date_updated",
    currentSize: "current_size",
    friendlyName: "friendly_name",
    accountSid: "account_sid",
    averageWaitTime: "average_wait_time",
    dateCreated: "date_created",
    maxSize: "max_size",
  },
});
