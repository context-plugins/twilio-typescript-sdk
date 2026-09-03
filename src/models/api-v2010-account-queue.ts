import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountQueue = {
  dateUpdated?: string | null;
  currentSize?: number;
  friendlyName?: string | null;
  uri?: string | null;
  accountSid?: string | null;
  averageWaitTime?: number;
  sid?: string | null;
  dateCreated?: string | null;
  maxSize?: number;
};

export const apiV2010AccountQueueSchema: Schema<ApiV2010AccountQueue> = s.object<ApiV2010AccountQueue>({
  dateUpdated: s.optionalNullable(s.string()),
  currentSize: s.optional(s.number()),
  friendlyName: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  averageWaitTime: s.optional(s.number()),
  sid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  maxSize: s.optional(s.number()),
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
