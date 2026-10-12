import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.string() },
        ],
        query: [{ name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueRealTimeStatistics {
  export type FetchTaskQueueRealTimeStatisticsRequest = {
    /** The SID of the Workspace with the TaskQueue to fetch. */
    workspaceSid: string;
    /** The SID of the TaskQueue for which to fetch statistics. */
    taskQueueSid: string;
    /**
     * The TaskChannel for which to fetch statistics. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
  };
}
