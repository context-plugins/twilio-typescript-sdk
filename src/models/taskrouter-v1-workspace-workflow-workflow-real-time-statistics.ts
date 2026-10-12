import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow
   * resource.
   */
  accountSid?: string | null;
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
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified SID
   * value.
   */
  workflowSid?: string | null;
  /** The SID of the Workspace that contains the Workflow. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workflow statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    longestTaskWaitingAge: s.defaulted(s.int(), 0),
    longestTaskWaitingSid: s.optionalNullable(s.string()),
    tasksByPriority: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksByStatus: s.optionalNullable(s.record(s.string(), s.unknown())),
    totalTasks: s.defaulted(s.int(), 0),
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
