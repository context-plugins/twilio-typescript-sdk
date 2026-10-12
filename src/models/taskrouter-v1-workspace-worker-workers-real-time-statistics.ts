import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker
   * resource.
   */
  accountSid?: string | null;
  /** The number of current Workers by Activity. */
  activityStatistics?: Record<string, unknown>[] | null;
  /** The total number of Workers. @default 0 */
  totalWorkers?: number;
  /** The SID of the Workspace that contains the Workers. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workers statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    activityStatistics: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    totalWorkers: s.defaulted(s.int(), 0),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      activityStatistics: "activity_statistics",
      totalWorkers: "total_workers",
      workspaceSid: "workspace_sid",
    },
  });
