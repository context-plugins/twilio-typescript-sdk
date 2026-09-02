import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics = {
  accountSid?: string | null;
  cumulative?: Record<string, unknown> | null;
  workerSid?: string | null;
  workspaceSid?: string | null;
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
