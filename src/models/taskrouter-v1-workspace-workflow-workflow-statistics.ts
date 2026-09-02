import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceWorkflowWorkflowStatistics = {
  accountSid?: string | null;
  cumulative?: Record<string, unknown> | null;
  realtime?: Record<string, unknown> | null;
  workflowSid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkflowWorkflowStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkflowWorkflowStatistics> =
  s.object<TaskrouterV1WorkspaceWorkflowWorkflowStatistics>({
    accountSid: s.optionalNullable(s.string()),
    cumulative: s.optionalNullable(s.record(s.string(), s.unknown())),
    realtime: s.optionalNullable(s.record(s.string(), s.unknown())),
    workflowSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      workflowSid: "workflow_sid",
      workspaceSid: "workspace_sid",
    },
  });
