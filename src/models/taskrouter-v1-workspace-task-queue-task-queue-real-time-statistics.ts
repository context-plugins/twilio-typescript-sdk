import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = {
  accountSid?: string | null;
  activityStatistics?: Record<string, unknown>[] | null;
  longestTaskWaitingAge?: number;
  longestTaskWaitingSid?: string | null;
  longestRelativeTaskAgeInQueue?: number;
  longestRelativeTaskSidInQueue?: string | null;
  taskQueueSid?: string | null;
  tasksByPriority?: Record<string, unknown> | null;
  tasksByStatus?: Record<string, unknown> | null;
  totalAvailableWorkers?: number;
  totalEligibleWorkers?: number;
  totalTasks?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    longestTaskWaitingAge: s.optional(s.number()),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    longestRelativeTaskAgeInQueue: s.optional(s.number()),
    longestRelativeTaskSidInQueue: s.optionalNullable(s.string()),
    taskQueueSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalAvailableWorkers: s.optional(s.number()),
    totalEligibleWorkers: s.optional(s.number()),
    totalTasks: s.optional(s.number()),
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
