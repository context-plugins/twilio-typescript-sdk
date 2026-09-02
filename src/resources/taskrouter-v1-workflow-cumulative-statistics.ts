import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.string() },
        ],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "SplitByWaitTime", value: request.splitByWaitTime, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkflowCumulativeStatistics {
  export type FetchWorkflowCumulativeStatisticsRequest = {
    workspaceSid: string;
    workflowSid: string;
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
  };
}
