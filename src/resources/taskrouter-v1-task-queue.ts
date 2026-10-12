import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "TargetWorkers", value: request.targetWorkers, schema: s.optional(s.string()) },
            { name: "MaxReservedWorkers", value: request.maxReservedWorkers, schema: s.optional(s.int()) },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteTaskQueue(
    request: TaskrouterV1TaskQueue.DeleteTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchTaskQueue(
    request: TaskrouterV1TaskQueue.FetchTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskQueueSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listTaskQueue(
    request: TaskrouterV1TaskQueue.ListTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskQueueResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskQueueResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateTaskQueue(
    request: TaskrouterV1TaskQueue.UpdateTaskQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "MaxReservedWorkers", value: request.maxReservedWorkers, schema: s.optional(s.int()) },
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskQueue {
  export type CreateTaskQueueRequest = {
    /** The SID of the Workspace that the new TaskQueue belongs to. */
    workspaceSid: string;
    /**
     * A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`,
     * `Sales`, or `Escalation`.
     */
    friendlyName: string;
    /**
     * A string that describes the Worker selection criteria for any Tasks that enter the TaskQueue.
     * For example, `'"language" == "spanish"'`. The default value is `1==1`. If this value is
     * empty, Tasks will wait in the TaskQueue until they are deleted or moved to another TaskQueue.
     * For more information about Worker selection, see [Describing Worker selection
     * criteria](https://www.twilio.com/docs/taskrouter/api/taskqueues#target-workers).
     */
    targetWorkers?: string;
    /**
     * The maximum number of Workers to reserve for the assignment of a Task in the queue. Can be an
     * integer between 1 and 50, inclusive and defaults to 1.
     */
    maxReservedWorkers?: number;
    /**
     * How Tasks will be assigned to Workers. Set this parameter to `LIFO` to assign most recently
     * created Task first or `FIFO` to assign the oldest Task. Default is FIFO. [Click
     * here](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo) to learn
     * more.
     */
    taskOrder?: TaskQueueEnumTaskOrder;
    /** The SID of the Activity to assign Workers when a task is reserved for them. */
    reservationActivitySid?: string;
    /** The SID of the Activity to assign Workers when a task is assigned to them. */
    assignmentActivitySid?: string;
  };

  export type DeleteTaskQueueRequest = {
    /** The SID of the Workspace with the TaskQueue to delete. */
    workspaceSid: string;
    /** The SID of the TaskQueue resource to delete. */
    sid: string;
  };

  export type FetchTaskQueueRequest = {
    /** The SID of the Workspace with the TaskQueue to fetch. */
    workspaceSid: string;
    /** The SID of the TaskQueue resource to fetch. */
    sid: string;
  };

  export type ListTaskQueueRequest = {
    /** The SID of the Workspace with the TaskQueue to read. */
    workspaceSid: string;
    /** The `friendly_name` of the TaskQueue resources to read. */
    friendlyName?: string;
    /**
     * The attributes of the Workers to read. Returns the TaskQueues with Workers that match the
     * attributes specified in this parameter.
     */
    evaluateWorkerAttributes?: string;
    /** The SID of the Worker with the TaskQueue resources to read. */
    workerSid?: string;
    /** Sorting parameter for TaskQueues */
    ordering?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateTaskQueueRequest = {
    /** The SID of the Workspace with the TaskQueue to update. */
    workspaceSid: string;
    /** The SID of the TaskQueue resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`,
     * `Sales`, or `Escalation`.
     */
    friendlyName?: string;
    /**
     * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For
     * example '"language" == "spanish"' If no TargetWorkers parameter is provided, Tasks will wait
     * in the queue until they are either deleted or moved to another queue. Additional examples on
     * how to describing Worker selection criteria below.
     */
    targetWorkers?: string;
    /** The SID of the Activity to assign Workers when a task is reserved for them. */
    reservationActivitySid?: string;
    /** The SID of the Activity to assign Workers when a task is assigned for them. */
    assignmentActivitySid?: string;
    /**
     * The maximum number of Workers to create reservations for the assignment of a task while in
     * the queue. Maximum of 50.
     */
    maxReservedWorkers?: number;
    /**
     * How Tasks will be assigned to Workers. Set this parameter to `LIFO` to assign most recently
     * created Task first or `FIFO` to assign the oldest Task. Default is FIFO. [Click
     * here](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo) to learn
     * more.
     */
    taskOrder?: TaskQueueEnumTaskOrder;
  };
}
