import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-task-queue-task-queue-bulk-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueueBulkRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTaskQueueBulkRealTimeStatistics(
    request: TaskrouterV1TaskQueueBulkRealTimeStatistics.CreateTaskQueueBulkRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: {
          kind: "json",
          schema: taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueBulkRealTimeStatistics {
  export type CreateTaskQueueBulkRealTimeStatisticsRequest = {
    workspaceSid: string;
    body?: Record<string, unknown>;
  };
}
