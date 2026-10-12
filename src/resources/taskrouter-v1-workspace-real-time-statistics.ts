import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkspaceRealTimeStatistics {
  export type FetchWorkspaceRealTimeStatisticsRequest = {
    /** The SID of the Workspace to fetch. */
    workspaceSid: string;
    /**
     * Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
  };
}
