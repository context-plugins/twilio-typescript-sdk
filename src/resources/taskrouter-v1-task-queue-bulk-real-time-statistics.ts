import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics,
} from "../models/taskrouter-v1-workspace-task-queue-task-queue-bulk-real-time-statistics.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueueBulkRealTimeStatistics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a Task Queue Real Time Statistics in bulk for the array of TaskQueue SIDs, support upto
   * 50 in a request.
   *
   * @remarks
   * Fetch a Task Queue Real Time Statistics in bulk for the array of TaskQueue SIDs, support upto
   * 50 in a request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTaskQueueBulkRealTimeStatistics(
    request: TaskrouterV1TaskQueueBulkRealTimeStatistics.CreateTaskQueueBulkRealTimeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: {
          kind: "json",
          schema: taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueueBulkRealTimeStatistics {
  export type CreateTaskQueueBulkRealTimeStatisticsRequest = {
    /** The unique SID identifier of the Workspace. */
    workspaceSid: string;
    body?: Record<string, unknown>;
  };
}
