import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountQueueMember = {
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Member resource
   * is associated with.
   */
  callSid?: string | null;
  /** The date that the member was enqueued, given in RFC 2822 format. */
  dateEnqueued?: string | null;
  /** This member's current position in the queue. @default 0 */
  position?: number;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** The number of seconds the member has been in the queue. @default 0 */
  waitTime?: number;
  /** The SID of the Queue the member is in. */
  queueSid?: string | null;
};

export const apiV2010AccountQueueMemberSchema: Schema<ApiV2010AccountQueueMember> =
  s.object<ApiV2010AccountQueueMember>({
    callSid: s.optionalNullable(s.string()),
    dateEnqueued: s.optionalNullable(s.string()),
    position: s.defaulted(s.int(), 0),
    uri: s.optionalNullable(s.string()),
    waitTime: s.defaulted(s.int(), 0),
    queueSid: s.optionalNullable(s.string()),
    _keysMap: {
      callSid: "call_sid",
      dateEnqueued: "date_enqueued",
      waitTime: "wait_time",
      queueSid: "queue_sid",
    },
  });
