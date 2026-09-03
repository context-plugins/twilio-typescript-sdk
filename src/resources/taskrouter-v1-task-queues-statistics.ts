import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<ListTaskQueuesStatisticsResponse, ResponseError> {
    return this.#rawClient.execute<ListTaskQueuesStatisticsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "SplitByWaitTime", value: request.splitByWaitTime, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskQueuesStatisticsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueuesStatistics {
  export type ListTaskQueuesStatisticsRequest = {
    workspaceSid: string;
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
