import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-worker-workers-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkersRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkersRealTimeStatistics(
    request: TaskrouterV1WorkersRealTimeStatistics.FetchWorkersRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkersRealTimeStatistics {
  export type FetchWorkersRealTimeStatisticsRequest = {
    /** The SID of the Workspace with the resource to fetch. */
    workspaceSid: string;
    /**
     * Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
  };
}
