import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = {
  accountSid?: string | null;
  activityStatistics?: Record<string, unknown>[] | null;
  totalWorkers?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    totalWorkers: s.optional(s.number()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      activityStatistics: "activity_statistics",
      totalWorkers: "total_workers",
      workspaceSid: "workspace_sid",
    },
  });
