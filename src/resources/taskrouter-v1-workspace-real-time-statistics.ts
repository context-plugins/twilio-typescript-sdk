import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkspaceRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-workspace-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkspaceRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkspaceRealTimeStatistics(
    request: TaskrouterV1WorkspaceRealTimeStatistics.FetchWorkspaceRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkspaceRealTimeStatistics {
  export type FetchWorkspaceRealTimeStatisticsRequest = {
    workspaceSid: string;
    taskChannel?: string;
  };
}
