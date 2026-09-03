import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = {
  accountSid?: string | null;
  longestTaskWaitingAge?: number;
  longestTaskWaitingSid?: string | null;
  tasksByPriority?: Record<string, unknown> | null;
  tasksByStatus?: Record<string, unknown> | null;
  totalTasks?: number;
  workflowSid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    longestTaskWaitingAge: s.optional(s.number()),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalTasks: s.optional(s.number()),
    workflowSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      longestTaskWaitingAge: "longest_task_waiting_age",
      longestTaskWaitingSid: "longest_task_waiting_sid",
      tasksByPriority: "tasks_by_priority",
      tasksByStatus: "tasks_by_status",
      totalTasks: "total_tasks",
      workflowSid: "workflow_sid",
      workspaceSid: "workspace_sid",
    },
  });
