import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics,
} from "../models/taskrouter-v1-workspace-worker-workers-cumulative-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkersCumulativeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkersCumulativeStatistics(
    request: TaskrouterV1WorkersCumulativeStatistics.FetchWorkersCumulativeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkersCumulativeStatistics {
  export type FetchWorkersCumulativeStatisticsRequest = {
    workspaceSid: string;
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
  };
}
