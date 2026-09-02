import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountQueueMember = {
  callSid?: string | null;
  dateEnqueued?: string | null;
  position?: number;
  uri?: string | null;
  waitTime?: number;
  queueSid?: string | null;
};

export const apiV2010AccountQueueMemberSchema: Schema<ApiV2010AccountQueueMember> =
  s.object<ApiV2010AccountQueueMember>({
    callSid: s.optionalNullable(s.string()),
    dateEnqueued: s.optionalNullable(s.string()),
    position: s.optional(s.number()),
    uri: s.optionalNullable(s.string()),
    waitTime: s.optional(s.number()),
    queueSid: s.optionalNullable(s.string()),
    _keysMap: {
      callSid: "call_sid",
      dateEnqueued: "date_enqueued",
      waitTime: "wait_time",
      queueSid: "queue_sid",
    },
  });
