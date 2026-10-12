import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listTaskQueuesStatisticsResponseSchema,
  type ListTaskQueuesStatisticsResponse,
} from "../models/list-task-queues-statistics-response.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueuesStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listTaskQueuesStatistics(
    request: TaskrouterV1TaskQueuesStatistics.ListTaskQueuesStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskQueuesStatisticsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "SplitByWaitTime", value: request.splitByWaitTime, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskQueuesStatisticsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueuesStatistics {
  export type ListTaskQueuesStatisticsRequest = {
    /** The SID of the Workspace with the TaskQueues to read. */
    workspaceSid: string;
    /**
     * Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /** The `friendly_name` of the TaskQueue statistics to read. */
    friendlyName?: string;
    /** Only calculate statistics since this many minutes in the past. The default is 15 minutes. */
    minutes?: number;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its
     * `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate
     * statistics on. For each threshold specified, the number of Tasks canceled and reservations
     * accepted above and below the specified thresholds in seconds are computed.
     */
    splitByWaitTime?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
