import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listTaskResponseSchema, type ListTaskResponse } from "../models/list-task-response.js";
import { taskEnumStatusSchema, type TaskEnumStatus } from "../models/task-enum-status.js";
import {
  taskrouterV1WorkspaceTaskSchema,
  type TaskrouterV1WorkspaceTask,
} from "../models/taskrouter-v1-workspace-task.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1Task {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTask(
    request: TaskrouterV1Task.CreateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTask, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Timeout", value: request.timeout, schema: s.optional(s.int()) },
            { name: "Priority", value: request.priority, schema: s.optional(s.int()) },
            { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
            { name: "WorkflowSid", value: request.workflowSid, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "VirtualStartTime", value: request.virtualStartTime, schema: s.optional(s.dateTime()) },
            { name: "RoutingTarget", value: request.routingTarget, schema: s.optional(s.string()) },
            { name: "IgnoreCapacity", value: request.ignoreCapacity, schema: s.optional(s.string()) },
            { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteTask(
    request: TaskrouterV1Task.DeleteTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchTask(
    request: TaskrouterV1Task.FetchTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTask, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listTask(
    request: TaskrouterV1Task.ListTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "Priority", value: request.priority, schema: s.optional(s.int()) },
          {
            name: "AssignmentStatus",
            value: request.assignmentStatus,
            schema: s.optional(s.array(s.string())),
          },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.optional(s.string()) },
          { name: "WorkflowName", value: request.workflowName, schema: s.optional(s.string()) },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          { name: "TaskQueueName", value: request.taskQueueName, schema: s.optional(s.string()) },
          {
            name: "EvaluateTaskAttributes",
            value: request.evaluateTaskAttributes,
            schema: s.optional(s.string()),
          },
          { name: "RoutingTarget", value: request.routingTarget, schema: s.optional(s.string()) },
          { name: "Ordering", value: request.ordering, schema: s.optional(s.string()) },
          { name: "HasAddons", value: request.hasAddons, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateTask(
    request: TaskrouterV1Task.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTask, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "AssignmentStatus",
              value: request.assignmentStatus,
              schema: s.optional(s.lazy(() => taskEnumStatusSchema)),
            },
            { name: "Reason", value: request.reason, schema: s.optional(s.string()) },
            { name: "Priority", value: request.priority, schema: s.optional(s.int()) },
            { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
            { name: "VirtualStartTime", value: request.virtualStartTime, schema: s.optional(s.dateTime()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Task {
  export type CreateTaskRequest = {
    /** The SID of the Workspace that the new Task belongs to. */
    workspaceSid: string;
    /**
     * The amount of time in seconds the new task can live before being assigned. Can be up to a
     * maximum of 2 weeks (1,209,600 seconds). The default value is 24 hours (86,400 seconds). On
     * timeout, the `task.canceled` event will fire with description `Task TTL Exceeded`.
     */
    timeout?: number;
    /**
     * The priority to assign the new task and override the default. When supplied, the new Task
     * will have this priority unless it matches a Workflow Target with a Priority set. When not
     * supplied, the new Task will have the priority of the matching Workflow Target. Value can be 0
     * to 2^31^ (2,147,483,647).
     */
    priority?: number;
    /**
     * When MultiTasking is enabled, specify the TaskChannel by passing either its `unique_name` or
     * `sid`. Default value is `default`.
     */
    taskChannel?: string;
    /**
     * The SID of the Workflow that you would like to handle routing for the new Task. If there is
     * only one Workflow defined for the Workspace that you are posting the new task to, this
     * parameter is optional.
     */
    workflowSid?: string;
    /**
     * A JSON string with the attributes of the new task. This value is passed to the Workflow's
     * `assignment_callback_url` when the Task is assigned to a Worker. For example: `{ "task_type":
     * "call", "twilio_call_sid": "CAxxx", "customer_ticket_number": "12345" }`.
     */
    attributes?: string;
    /**
     * The virtual start time to assign the new task and override the default. When supplied, the
     * new task will have this virtual start time. When not supplied, the new task will have the
     * virtual start time equal to `date_created`. Value can't be in the future or before the year
     * of 1900.
     */
    virtualStartTime?: Date;
    /** A SID of a Worker, Queue, or Workflow to route a Task to */
    routingTarget?: string;
    /**
     * A boolean that indicates if the Task should respect a Worker's capacity and availability
     * during assignment. This field can only be used when the `RoutingTarget` field is set to a
     * Worker SID. By setting `IgnoreCapacity` to a value of `true`, `1`, or `yes`, the Task will be
     * routed to the Worker without respecting their capacity and availability. Any other value will
     * enforce the Worker's capacity and availability. The default value of `IgnoreCapacity` is
     * `true` when the `RoutingTarget` is set to a Worker SID.
     */
    ignoreCapacity?: string;
    /** The SID of the TaskQueue in which the Task belongs */
    taskQueueSid?: string;
  };

  export type DeleteTaskRequest = {
    /** The SID of the Workspace with the Task to delete. */
    workspaceSid: string;
    /** The SID of the Task resource to delete. */
    sid: string;
    /**
     * If provided, deletes this Task if (and only if) the
     * [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
  };

  export type FetchTaskRequest = {
    /** The SID of the Workspace with the Task to fetch. */
    workspaceSid: string;
    /** The SID of the Task resource to fetch. */
    sid: string;
  };

  export type ListTaskRequest = {
    /** The SID of the Workspace with the Tasks to read. */
    workspaceSid: string;
    /**
     * The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with
     * the specified priority.
     */
    priority?: number;
    /**
     * The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`,
     * `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with
     * the specified `assignment_status`.
     */
    assignmentStatus?: string[];
    /**
     * The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow
     * identified by this SID.
     */
    workflowSid?: string;
    /**
     * The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the
     * Workflow identified by this friendly name.
     */
    workflowName?: string;
    /**
     * The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue
     * identified by this SID.
     */
    taskQueueSid?: string;
    /**
     * The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the
     * TaskQueue identified by this friendly name.
     */
    taskQueueName?: string;
    /**
     * The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in
     * this parameter.
     */
    evaluateTaskAttributes?: string;
    /** A SID of a Worker, Queue, or Workflow to route a Task to */
    routingTarget?: string;
    /**
     * How to order the returned Task resources. By default, Tasks are sorted by ascending
     * DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either
     * `DateCreated`, `Priority`, or `VirtualStartTime` and `Order` can be either `asc` or `desc`.
     * For example, `Priority:desc` returns Tasks ordered in descending order of their Priority.
     * Pairings of sort orders can be specified in a comma-separated list such as
     * `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and
     * ascending DateCreated Order. The only ordering pairing not allowed is DateCreated and
     * VirtualStartTime.
     */
    ordering?: string;
    /**
     * Whether to read Tasks with Add-ons. If `true`, returns only Tasks with Add-ons. If `false`,
     * returns only Tasks without Add-ons.
     */
    hasAddons?: boolean;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateTaskRequest = {
    /** The SID of the Workspace with the Task to update. */
    workspaceSid: string;
    /** The SID of the Task resource to update. */
    sid: string;
    /**
     * If provided, applies this mutation if (and only if) the
     * [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task
     * matches the provided value. This matches the semantics of (and is implemented with) the HTTP
     * [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /** The JSON string that describes the custom attributes of the task. */
    attributes?: string;
    /**
     * The current status of the Task's assignment. Can be: `pending`, `reserved`, `assigned`,
     * `canceled`, `wrapping`, or `completed`.
     */
    assignmentStatus?: TaskEnumStatus;
    /**
     * The reason that the Task was canceled or completed. This parameter is required only if the
     * Task is canceled or completed. Setting this value queues the task for deletion and logs the
     * reason.
     */
    reason?: string;
    /**
     * The Task's new priority value. When supplied, the Task takes on the specified priority unless
     * it matches a Workflow Target with a Priority set. Value can be 0 to 2^31^ (2,147,483,647).
     */
    priority?: number;
    /**
     * When MultiTasking is enabled, specify the TaskChannel with the task to update. Can be the
     * TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * The task's new virtual start time value. When supplied, the Task takes on the specified
     * virtual start time. Value can't be in the future or before the year of 1900.
     */
    virtualStartTime?: Date;
  };
}
