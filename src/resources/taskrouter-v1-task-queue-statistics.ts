import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueueStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics,
} from "../models/taskrouter-v1-workspace-task-queue-task-queue-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueueStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchTaskQueueStatistics(
    request: TaskrouterV1TaskQueueStatistics.FetchTaskQueueStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.string() },
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
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueTaskQueueStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueStatistics {
  export type FetchTaskQueueStatisticsRequest = {
    workspaceSid: string;
    taskQueueSid: string;
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
  };
}
