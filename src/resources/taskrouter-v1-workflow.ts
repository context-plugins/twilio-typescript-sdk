import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listWorkflowResponseSchema, type ListWorkflowResponse } from "../models/list-workflow-response.js";
import {
  taskrouterV1WorkspaceWorkflowSchema,
  type TaskrouterV1WorkspaceWorkflow,
} from "../models/taskrouter-v1-workspace-workflow.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1Workflow {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWorkflow(
    request: TaskrouterV1Workflow.CreateWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkflow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Configuration", value: request.configuration, schema: s.string() },
            {
              name: "AssignmentCallbackUrl",
              value: request.assignmentCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "FallbackAssignmentCallbackUrl",
              value: request.fallbackAssignmentCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "TaskReservationTimeout",
              value: request.taskReservationTimeout,
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteWorkflow(
    request: TaskrouterV1Workflow.DeleteWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
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

  fetchWorkflow(
    request: TaskrouterV1Workflow.FetchWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkflow, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorkflow(
    request: TaskrouterV1Workflow.ListWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkflowResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkflowResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkflowResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorkflow(
    request: TaskrouterV1Workflow.UpdateWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkflow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "AssignmentCallbackUrl",
              value: request.assignmentCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "FallbackAssignmentCallbackUrl",
              value: request.fallbackAssignmentCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "Configuration", value: request.configuration, schema: s.optional(s.string()) },
            {
              name: "TaskReservationTimeout",
              value: request.taskReservationTimeout,
              schema: s.optional(s.number()),
            },
            { name: "ReEvaluateTasks", value: request.reEvaluateTasks, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Workflow {
  export type CreateWorkflowRequest = {
    workspaceSid: string;
    friendlyName: string;
    configuration: string;
    assignmentCallbackUrl?: string;
    fallbackAssignmentCallbackUrl?: string;
    taskReservationTimeout?: number;
  };

  export type DeleteWorkflowRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type FetchWorkflowRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListWorkflowRequest = {
    workspaceSid: string;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWorkflowRequest = {
    workspaceSid: string;
    sid: string;
    friendlyName?: string;
    assignmentCallbackUrl?: string;
    fallbackAssignmentCallbackUrl?: string;
    configuration?: string;
    taskReservationTimeout?: number;
    reEvaluateTasks?: string;
  };
}
