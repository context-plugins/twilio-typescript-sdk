import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workspaceEnumQueueOrderSchema, type WorkspaceEnumQueueOrder } from "./workspace-enum-queue-order.js";

export type TaskrouterV1Workspace = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Workspace resource.
   */
  accountSid?: string | null;
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
  /** The name of the default activity. */
  defaultActivityName?: string | null;
  /** The SID of the Activity that will be used when new Workers are created in the Workspace. */
  defaultActivitySid?: string | null;
  /**
   * The URL we call when an event occurs. If provided, the Workspace will publish events to this
   * URL, for example, to collect data for reporting. See [Workspace
   * Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter
   * supports Twilio's [Webhooks (HTTP callbacks) Connection
   * Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
   */
  eventCallbackUrl?: string | null;
  /**
   * The list of Workspace events for which to call `event_callback_url`. For example, if
   * `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call
   * event_callback_url only when a task is created, canceled, or a Worker activity is updated.
   */
  eventsFilter?: string | null;
  /**
   * The string that you assigned to describe the Workspace resource. For example `Customer Support`
   * or `2014 Election Campaign`.
   */
  friendlyName?: string | null;
  /**
   * Whether multi-tasking is enabled. The default is `true`, which enables multi-tasking.
   * Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`),
   * each Worker can receive parallel reservations up to the per-channel maximums defined in the
   * Workers section. In single-tasking each Worker would only receive a new reservation when the
   * previous task is completed. Learn more at
   * [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
   */
  multiTaskEnabled?: boolean | null;
  /** The unique string that we created to identify the Workspace resource. */
  sid?: string | null;
  /** The name of the timeout activity. */
  timeoutActivityName?: string | null;
  /**
   * The SID of the Activity that will be assigned to a Worker when a Task reservation times out
   * without a response.
   */
  timeoutActivitySid?: string | null;
  /**
   * The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of
   * TaskQueues. Can be: `LIFO` or `FIFO` and the default is `FIFO`. For more information, see
   * [Queue Ordering](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo).
   */
  prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  /** The absolute URL of the Workspace resource. */
  url?: string | null;
  /** The URLs of related resources. */
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
