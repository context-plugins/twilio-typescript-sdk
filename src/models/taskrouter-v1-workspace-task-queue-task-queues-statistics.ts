import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskQueue resource.
   */
  accountSid?: string | null;
  /** An object that contains the cumulative statistics for the TaskQueues. */
  cumulative?: Record<string, unknown> | null;
  /** An object that contains the real-time statistics for the TaskQueues. */
  realtime?: Record<string, unknown> | null;
  /** The SID of the TaskQueue from which these statistics were calculated. */
  taskQueueSid?: string | null;
  /** The SID of the Workspace that contains the TaskQueues. */
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
