import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkspaceStatistics = {
  realtime?: Record<string, unknown> | null;
  cumulative?: Record<string, unknown> | null;
  accountSid?: string | null;
  workspaceSid?: string | null;
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
