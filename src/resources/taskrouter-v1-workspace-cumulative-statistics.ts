import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceWorkspaceCumulativeStatisticsSchema,
  type TaskrouterV1WorkspaceWorkspaceCumulativeStatistics,
} from "../models/taskrouter-v1-workspace-workspace-cumulative-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkspaceCumulativeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkspaceCumulativeStatistics(
    request: TaskrouterV1WorkspaceCumulativeStatistics.FetchWorkspaceCumulativeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkspaceCumulativeStatistics, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkspaceCumulativeStatistics, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/CumulativeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
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
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkspaceCumulativeStatisticsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkspaceCumulativeStatistics {
  export type FetchWorkspaceCumulativeStatisticsRequest = {
    workspaceSid: string;
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
  };
}
