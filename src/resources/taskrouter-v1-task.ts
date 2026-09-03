import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTask, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Timeout", value: request.timeout, schema: s.optional(s.number()) },
            { name: "Priority", value: request.priority, schema: s.optional(s.number()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTask(
    request: TaskrouterV1Task.DeleteTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTask(
    request: TaskrouterV1Task.FetchTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTask, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTask(
    request: TaskrouterV1Task.ListTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskResponse, ResponseError> {
    return this.#rawClient.execute<ListTaskResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "Priority", value: request.priority, schema: s.optional(s.number()) },
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTask(
    request: TaskrouterV1Task.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTask, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
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
            { name: "Priority", value: request.priority, schema: s.optional(s.number()) },
            { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
            { name: "VirtualStartTime", value: request.virtualStartTime, schema: s.optional(s.dateTime()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Task {
  export type CreateTaskRequest = {
    workspaceSid: string;
    timeout?: number;
    priority?: number;
    taskChannel?: string;
    workflowSid?: string;
    attributes?: string;
    virtualStartTime?: Date;
    routingTarget?: string;
    ignoreCapacity?: string;
    taskQueueSid?: string;
  };

  export type DeleteTaskRequest = {
    workspaceSid: string;
    sid: string;
    ifMatch?: string;
  };

  export type FetchTaskRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListTaskRequest = {
    workspaceSid: string;
    priority?: number;
    assignmentStatus?: string[];
    workflowSid?: string;
    workflowName?: string;
    taskQueueSid?: string;
    taskQueueName?: string;
    evaluateTaskAttributes?: string;
    routingTarget?: string;
    ordering?: string;
    hasAddons?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateTaskRequest = {
    workspaceSid: string;
    sid: string;
    ifMatch?: string;
    attributes?: string;
    assignmentStatus?: TaskEnumStatus;
    reason?: string;
    priority?: number;
    taskChannel?: string;
    virtualStartTime?: Date;
  };
}
