import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskQueue resource.
   */
  accountSid?: string | null;
  /** The SID of the Workspace that contains the TaskQueue. */
  workspaceSid?: string | null;
  /**
   * The real-time statistics for each requested TaskQueue SID. `task_queue_data` returns the
   * following attributes:
   *
   * `task_queue_sid`: The SID of the TaskQueue from which these statistics were calculated.
   *
   * `total_available_workers`: The total number of Workers available for Tasks in the TaskQueue.
   *
   * `total_eligible_workers`: The total number of Workers eligible for Tasks in the TaskQueue,
   * regardless of their Activity state.
   *
   * `total_tasks`: The total number of Tasks.
   *
   * `longest_task_waiting_age`: The age of the longest waiting Task.
   *
   * `longest_task_waiting_sid`: The SID of the longest waiting Task.
   *
   * `tasks_by_status`: The number of Tasks grouped by their current status.
   *
   * `tasks_by_priority`: The number of Tasks grouped by priority.
   *
   * `activity_statistics`: The number of current Workers grouped by Activity.
   */
  taskQueueData?: Record<string, unknown>[] | null;
  /** The number of TaskQueue statistics received in task_queue_data. @default 0 */
  taskQueueResponseCount?: number;
  /** The absolute URL of the TaskQueue statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    taskQueueData: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    taskQueueResponseCount: s.defaulted(s.int(), 0),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      workspaceSid: "workspace_sid",
      taskQueueData: "task_queue_data",
      taskQueueResponseCount: "task_queue_response_count",
    },
  });
