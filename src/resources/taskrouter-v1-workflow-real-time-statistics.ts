import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-workflow-workflow-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkflowRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkflowRealTimeStatistics(
    request: TaskrouterV1WorkflowRealTimeStatistics.FetchWorkflowRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.string() },
        ],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkflowRealTimeStatistics {
  export type FetchWorkflowRealTimeStatisticsRequest = {
    workspaceSid: string;
    workflowSid: string;
    taskChannel?: string;
  };
}
