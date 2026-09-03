import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listTaskQueueResponseSchema,
  type ListTaskQueueResponse,
} from "../models/list-task-queue-response.js";
import {
  taskQueueEnumTaskOrderSchema,
  type TaskQueueEnumTaskOrder,
} from "../models/task-queue-enum-task-order.js";
import {
  taskrouterV1WorkspaceTaskQueueSchema,
  type TaskrouterV1WorkspaceTaskQueue,
} from "../models/taskrouter-v1-workspace-task-queue.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskQueue {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTaskQueue(
    request: TaskrouterV1TaskQueue.CreateTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueue, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "TargetWorkers", value: request.targetWorkers, schema: s.optional(s.string()) },
            { name: "MaxReservedWorkers", value: request.maxReservedWorkers, schema: s.optional(s.number()) },
            {
              name: "TaskOrder",
              value: request.taskOrder,
              schema: s.optional(s.lazy(() => taskQueueEnumTaskOrderSchema)),
            },
            {
              name: "ReservationActivitySid",
              value: request.reservationActivitySid,
              schema: s.optional(s.string()),
            },
            {
              name: "AssignmentActivitySid",
              value: request.assignmentActivitySid,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTaskQueue(
    request: TaskrouterV1TaskQueue.DeleteTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTaskQueue(
    request: TaskrouterV1TaskQueue.FetchTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueue, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTaskQueue(
    request: TaskrouterV1TaskQueue.ListTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskQueueResponse, ResponseError> {
    return this.#rawClient.execute<ListTaskQueueResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          {
            name: "EvaluateWorkerAttributes",
            value: request.evaluateWorkerAttributes,
            schema: s.optional(s.string()),
          },
          { name: "WorkerSid", value: request.workerSid, schema: s.optional(s.string()) },
          { name: "Ordering", value: request.ordering, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskQueueResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTaskQueue(
    request: TaskrouterV1TaskQueue.UpdateTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskQueue, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "TargetWorkers", value: request.targetWorkers, schema: s.optional(s.string()) },
            {
              name: "ReservationActivitySid",
              value: request.reservationActivitySid,
              schema: s.optional(s.string()),
            },
            {
              name: "AssignmentActivitySid",
              value: request.assignmentActivitySid,
              schema: s.optional(s.string()),
            },
            { name: "MaxReservedWorkers", value: request.maxReservedWorkers, schema: s.optional(s.number()) },
            {
              name: "TaskOrder",
              value: request.taskOrder,
              schema: s.optional(s.lazy(() => taskQueueEnumTaskOrderSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueue {
  export type CreateTaskQueueRequest = {
    workspaceSid: string;
    friendlyName: string;
    targetWorkers?: string;
    maxReservedWorkers?: number;
    taskOrder?: TaskQueueEnumTaskOrder;
    reservationActivitySid?: string;
    assignmentActivitySid?: string;
  };

  export type DeleteTaskQueueRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type FetchTaskQueueRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListTaskQueueRequest = {
    workspaceSid: string;
    friendlyName?: string;
    evaluateWorkerAttributes?: string;
    workerSid?: string;
    ordering?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateTaskQueueRequest = {
    workspaceSid: string;
    sid: string;
    friendlyName?: string;
    targetWorkers?: string;
    reservationActivitySid?: string;
    assignmentActivitySid?: string;
    maxReservedWorkers?: number;
    taskOrder?: TaskQueueEnumTaskOrder;
  };
}
