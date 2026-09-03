import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkspaceRealTimeStatistics = {
  accountSid?: string | null;
  activityStatistics?: Record<string, unknown>[] | null;
  longestTaskWaitingAge?: number;
  longestTaskWaitingSid?: string | null;
  tasksByPriority?: Record<string, unknown> | null;
  tasksByStatus?: Record<string, unknown> | null;
  totalTasks?: number;
  totalWorkers?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    longestTaskWaitingAge: s.optional(s.number()),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalTasks: s.optional(s.number()),
    totalWorkers: s.optional(s.number()),
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
