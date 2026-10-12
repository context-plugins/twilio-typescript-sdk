import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkersCumulativeStatistics {
  export type FetchWorkersCumulativeStatisticsRequest = {
    /** The SID of the Workspace with the resource to fetch. */
    workspaceSid: string;
    /**
     * Only calculate statistics from this date and time and earlier, specified in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endDate?: Date;
    /**
     * Only calculate statistics since this many minutes in the past. The default 15 minutes. This
     * is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480
     * minutes (8 hours) to see trends.
     */
    minutes?: number;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
  };
}
