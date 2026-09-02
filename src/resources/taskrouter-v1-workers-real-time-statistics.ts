import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkersRealTimeStatistics {
  export type FetchWorkersRealTimeStatisticsRequest = {
    workspaceSid: string;
    taskChannel?: string;
  };
}
