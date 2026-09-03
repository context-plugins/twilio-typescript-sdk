import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkerWorkerStatisticsSchema,
  type TaskrouterV1WorkspaceWorkerWorkerStatistics,
} from "../models/taskrouter-v1-workspace-worker-worker-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkersStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkerStatistics(
    request: TaskrouterV1WorkersStatistics.FetchWorkerStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          { name: "TaskQueueName", value: request.taskQueueName, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkersStatistics {
  export type FetchWorkerStatisticsRequest = {
    workspaceSid: string;
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskQueueSid?: string;
    taskQueueName?: string;
    friendlyName?: string;
    taskChannel?: string;
  };
}
