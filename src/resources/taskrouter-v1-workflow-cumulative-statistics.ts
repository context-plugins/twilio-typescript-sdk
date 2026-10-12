import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics,
} from "../models/taskrouter-v1-workspace-workflow-workflow-cumulative-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkflowCumulativeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkflowCumulativeStatistics(
    request: TaskrouterV1WorkflowCumulativeStatistics.FetchWorkflowCumulativeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.string() },
        ],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "SplitByWaitTime", value: request.splitByWaitTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkflowCumulativeStatistics {
  export type FetchWorkflowCumulativeStatisticsRequest = {
    /** The SID of the Workspace with the resource to fetch. */
    workspaceSid: string;
    /**
     * Returns the list of Tasks that are being controlled by the Workflow with the specified Sid
     * value.
     */
    workflowSid: string;
    /**
     * Only include usage that occurred on or before this date, specified in GMT as an [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * Only calculate statistics since this many minutes in the past. The default 15 minutes. This
     * is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480
     * minutes (8 hours) to see trends.
     */
    minutes?: number;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate
     * statistics on. For each threshold specified, the number of Tasks canceled and reservations
     * accepted above and below the specified thresholds in seconds are computed. For example,
     * `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds
     * and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that
     * failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any
     * given threshold.
     */
    splitByWaitTime?: string;
  };
}
