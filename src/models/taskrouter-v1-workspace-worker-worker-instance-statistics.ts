import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker
   * resource.
   */
  accountSid?: string | null;
  /** An object that contains the cumulative statistics for the Worker. */
  cumulative?: Record<string, unknown> | null;
  /** The SID of the Worker that contains the WorkerChannel. */
  workerSid?: string | null;
  /** The SID of the Workspace that contains the WorkerChannel. */
  workspaceSid?: string | null;
  /** The absolute URL of the WorkerChannel statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkerInstanceStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics> =
  s.object<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics>({
    accountSid: s.optionalNullable(s.string()),
    cumulative: s.optionalNullable(s.record(s.string(), s.unknown())),
    workerSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      workerSid: "worker_sid",
      workspaceSid: "workspace_sid",
    },
  });
