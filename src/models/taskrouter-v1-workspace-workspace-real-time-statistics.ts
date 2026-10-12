import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkspaceRealTimeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Workspace resource.
   */
  accountSid?: string | null;
  /** The number of current Workers by Activity. */
  activityStatistics?: Record<string, unknown>[] | null;
  /** The age of the longest waiting Task. @default 0 */
  longestTaskWaitingAge?: number;
  /** The SID of the longest waiting Task. */
  longestTaskWaitingSid?: string | null;
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
  /** The total number of Tasks. @default 0 */
  totalTasks?: number;
  /** The total number of Workers in the Workspace. @default 0 */
  totalWorkers?: number;
  /** The SID of the Workspace. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workspace statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    longestTaskWaitingAge: s.defaulted(s.int(), 0),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalTasks: s.defaulted(s.int(), 0),
    totalWorkers: s.defaulted(s.int(), 0),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      activityStatistics: "activity_statistics",
      longestTaskWaitingAge: "longest_task_waiting_age",
      longestTaskWaitingSid: "longest_task_waiting_sid",
      tasksByPriority: "tasks_by_priority",
      tasksByStatus: "tasks_by_status",
      totalTasks: "total_tasks",
      totalWorkers: "total_workers",
      workspaceSid: "workspace_sid",
    },
  });
