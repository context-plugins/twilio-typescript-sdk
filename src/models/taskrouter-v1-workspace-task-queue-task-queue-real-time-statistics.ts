import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskQueue resource.
   */
  accountSid?: string | null;
  /** The number of current Workers by Activity. */
  activityStatistics?: Record<string, unknown>[] | null;
  /** The age of the longest waiting Task. @default 0 */
  longestTaskWaitingAge?: number;
  /** The SID of the longest waiting Task. */
  longestTaskWaitingSid?: string | null;
  /**
   * The relative age in the TaskQueue for the longest waiting Task. Calculation is based on the
   * time when the Task entered the TaskQueue.
   *
   * @default 0
   */
  longestRelativeTaskAgeInQueue?: number;
  /**
   * The Task SID of the Task waiting in the TaskQueue the longest. Calculation is based on the time
   * when the Task entered the TaskQueue.
   */
  longestRelativeTaskSidInQueue?: string | null;
  /** The SID of the TaskQueue from which these statistics were calculated. */
  taskQueueSid?: string | null;
  /**
   * The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at
   * priority 0 and 5 at priority 99.
   */
  tasksByPriority?: Record<string, unknown> | null;
  /**
   * The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3",
   * "assigned": "2", "completed": "5"}`.
   */
  tasksByStatus?: Record<string, unknown> | null;
  /**
   * The total number of Workers in the TaskQueue with an `available` status. Workers with an
   * `available` status may already have active interactions or may have none.
   *
   * @default 0
   */
  totalAvailableWorkers?: number;
  /**
   * The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity
   * state.
   *
   * @default 0
   */
  totalEligibleWorkers?: number;
  /** The total number of Tasks. @default 0 */
  totalTasks?: number;
  /** The SID of the Workspace that contains the TaskQueue. */
  workspaceSid?: string | null;
  /** The absolute URL of the TaskQueue statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    longestTaskWaitingAge: s.defaulted(s.int(), 0),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    longestRelativeTaskAgeInQueue: s.defaulted(s.int(), 0),
    longestRelativeTaskSidInQueue: s.optionalNullable(s.string()),
    taskQueueSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalAvailableWorkers: s.defaulted(s.int(), 0),
    totalEligibleWorkers: s.defaulted(s.int(), 0),
    totalTasks: s.defaulted(s.int(), 0),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      activityStatistics: "activity_statistics",
      longestTaskWaitingAge: "longest_task_waiting_age",
      longestTaskWaitingSid: "longest_task_waiting_sid",
      longestRelativeTaskAgeInQueue: "longest_relative_task_age_in_queue",
      longestRelativeTaskSidInQueue: "longest_relative_task_sid_in_queue",
      taskQueueSid: "task_queue_sid",
      tasksByPriority: "tasks_by_priority",
      tasksByStatus: "tasks_by_status",
      totalAvailableWorkers: "total_available_workers",
      totalEligibleWorkers: "total_eligible_workers",
      totalTasks: "total_tasks",
      workspaceSid: "workspace_sid",
    },
  });
