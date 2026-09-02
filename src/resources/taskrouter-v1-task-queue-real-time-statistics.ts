import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-task-queue-task-queue-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueueRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchTaskQueueRealTimeStatistics(
    request: TaskrouterV1TaskQueueRealTimeStatistics.FetchTaskQueueRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.string() },
        ],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueRealTimeStatistics {
  export type FetchTaskQueueRealTimeStatisticsRequest = {
    workspaceSid: string;
    taskQueueSid: string;
    taskChannel?: string;
  };
}
