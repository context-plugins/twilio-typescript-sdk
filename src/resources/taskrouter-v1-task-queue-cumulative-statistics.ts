import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.string() },
        ],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "SplitByWaitTime", value: request.splitByWaitTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueCumulativeStatistics {
  export type FetchTaskQueueCumulativeStatisticsRequest = {
    /** The SID of the Workspace with the TaskQueue to fetch. */
    workspaceSid: string;
    /** The SID of the TaskQueue for which to fetch statistics. */
    taskQueueSid: string;
    /**
     * Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /** Only calculate statistics since this many minutes in the past. The default is 15 minutes. */
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
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate
     * statistics on. For each threshold specified, the number of Tasks canceled and reservations
     * accepted above and below the specified thresholds in seconds are computed. TaskRouter will
     * calculate statistics on up to 10,000 Tasks/Reservations for any given threshold.
     */
    splitByWaitTime?: string;
  };
}
