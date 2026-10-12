import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
        ],
        query: [
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerInstanceStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerStatistics {
  export type FetchWorkerInstanceStatisticsRequest = {
    /** The SID of the Workspace with the WorkerChannel to fetch. */
    workspaceSid: string;
    /** The SID of the Worker with the WorkerChannel to fetch. */
    workerSid: string;
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
     * Only include usage that occurred on or before this date, specified in GMT as an [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
  };
}
