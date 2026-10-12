import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkspaceStatistics = {
  /** An object that contains the real-time statistics for the Workspace. */
  realtime?: Record<string, unknown> | null;
  /** An object that contains the cumulative statistics for the Workspace. */
  cumulative?: Record<string, unknown> | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Workspace resource.
   */
  accountSid?: string | null;
  /** The SID of the Workspace. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workspace statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkspaceStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkspaceStatistics> =
  s.object<TaskrouterV1WorkspaceWorkspaceStatistics>({
    realtime: s.optionalNullable(s.record(s.string(), s.unknown())),
    cumulative: s.optionalNullable(s.record(s.string(), s.unknown())),
    accountSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      workspaceSid: "workspace_sid",
    },
  });
