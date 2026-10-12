import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflowWorkflowStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow
   * resource.
   */
  accountSid?: string | null;
  /** An object that contains the cumulative statistics for the Workflow. */
  cumulative?: Record<string, unknown> | null;
  /** An object that contains the real-time statistics for the Workflow. */
  realtime?: Record<string, unknown> | null;
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified SID
   * value.
   */
  workflowSid?: string | null;
  /** The SID of the Workspace that contains the Workflow. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workflow statistics resource. */
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
