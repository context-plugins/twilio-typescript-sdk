import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics,
} from "../models/taskrouter-v1-workspace-task-queue-task-queue-cumulative-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueueCumulativeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchTaskQueueCumulativeStatistics(
    request: TaskrouterV1TaskQueueCumulativeStatistics.FetchTaskQueueCumulativeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics",
        ),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueCumulativeStatistics {
  export type FetchTaskQueueCumulativeStatisticsRequest = {
    workspaceSid: string;
    taskQueueSid: string;
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
  };
}
