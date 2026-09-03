import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics = {
  accountSid?: string | null;
  cumulative?: Record<string, unknown> | null;
  realtime?: Record<string, unknown> | null;
  taskQueueSid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics>({
    accountSid: s.optionalNullable(s.string()),
    cumulative: s.optionalNullable(s.record(s.string(), s.unknown())),
    realtime: s.optionalNullable(s.record(s.string(), s.unknown())),
    taskQueueSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      taskQueueSid: "task_queue_sid",
      workspaceSid: "workspace_sid",
    },
  });
