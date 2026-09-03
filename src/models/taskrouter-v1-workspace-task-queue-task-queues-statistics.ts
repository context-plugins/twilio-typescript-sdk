import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics = {
  accountSid?: string | null;
  cumulative?: Record<string, unknown> | null;
  realtime?: Record<string, unknown> | null;
  taskQueueSid?: string | null;
  workspaceSid?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueuesStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics>({
    accountSid: s.optionalNullable(s.string()),
    cumulative: s.optionalNullable(s.record(s.string(), s.unknown())),
    realtime: s.optionalNullable(s.record(s.string(), s.unknown())),
    taskQueueSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      taskQueueSid: "task_queue_sid",
      workspaceSid: "workspace_sid",
    },
  });
