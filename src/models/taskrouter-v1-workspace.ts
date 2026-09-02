import { s, type Schema } from "../core/index.js";
import { workspaceEnumQueueOrderSchema, type WorkspaceEnumQueueOrder } from "./workspace-enum-queue-order.js";

export type TaskrouterV1Workspace = {
  accountSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  defaultActivityName?: string | null;
  defaultActivitySid?: string | null;
  eventCallbackUrl?: string | null;
  eventsFilter?: string | null;
  friendlyName?: string | null;
  multiTaskEnabled?: boolean | null;
  sid?: string | null;
  timeoutActivityName?: string | null;
  timeoutActivitySid?: string | null;
  prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceSchema: Schema<TaskrouterV1Workspace> = s.object<TaskrouterV1Workspace>({
  accountSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  defaultActivityName: s.optionalNullable(s.string()),
  defaultActivitySid: s.optionalNullable(s.string()),
  eventCallbackUrl: s.optionalNullable(s.string()),
  eventsFilter: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  multiTaskEnabled: s.optionalNullable(s.boolean()),
  sid: s.optionalNullable(s.string()),
  timeoutActivityName: s.optionalNullable(s.string()),
  timeoutActivitySid: s.optionalNullable(s.string()),
  prioritizeQueueOrder: s.optional(s.lazy(() => workspaceEnumQueueOrderSchema)),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    defaultActivityName: "default_activity_name",
    defaultActivitySid: "default_activity_sid",
    eventCallbackUrl: "event_callback_url",
    eventsFilter: "events_filter",
    friendlyName: "friendly_name",
    multiTaskEnabled: "multi_task_enabled",
    timeoutActivityName: "timeout_activity_name",
    timeoutActivitySid: "timeout_activity_sid",
    prioritizeQueueOrder: "prioritize_queue_order",
  },
});
