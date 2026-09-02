import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics = {
  accountSid?: string | null;
  workspaceSid?: string | null;
  taskQueueData?: Record<string, unknown>[] | null;
  taskQueueResponseCount?: number;
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    taskQueueData: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    taskQueueResponseCount: s.optional(s.number()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      workspaceSid: "workspace_sid",
      taskQueueData: "task_queue_data",
      taskQueueResponseCount: "task_queue_response_count",
    },
  });
