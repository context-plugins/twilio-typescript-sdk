import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkerWorkerInstanceStatisticsSchema,
  type TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics,
} from "../models/taskrouter-v1-workspace-worker-worker-instance-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkerStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkerInstanceStatistics(
    request: TaskrouterV1WorkerStatistics.FetchWorkerInstanceStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
        ],
        query: [
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerInstanceStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerStatistics {
  export type FetchWorkerInstanceStatisticsRequest = {
    workspaceSid: string;
    workerSid: string;
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskChannel?: string;
  };
}
