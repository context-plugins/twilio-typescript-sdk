import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteWorkflow(
    request: TaskrouterV1Workflow.DeleteWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
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

  fetchWorkflow(
    request: TaskrouterV1Workflow.FetchWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listWorkflow(
    request: TaskrouterV1Workflow.ListWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkflowResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkflowResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWorkflow(
    request: TaskrouterV1Workflow.UpdateWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}"),
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
              schema: s.optional(s.int()),
            },
            { name: "ReEvaluateTasks", value: request.reEvaluateTasks, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkflowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Workflow {
  export type CreateWorkflowRequest = {
    /** The SID of the Workspace that the new Workflow to create belongs to. */
    workspaceSid: string;
    /**
     * A descriptive string that you create to describe the Workflow resource. For example, `Inbound
     * Call Workflow` or `2014 Outbound Campaign`.
     */
    friendlyName: string;
    /**
     * A JSON string that contains the rules to apply to the Workflow. See [Configuring
     * Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more
     * information.
     */
    configuration: string;
    /**
     * The URL from your application that will process task assignment events. See [Handling Task
     * Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for
     * more details.
     */
    assignmentCallbackUrl?: string;
    /** The URL that we should call when a call to the `assignment_callback_url` fails. */
    fallbackAssignmentCallbackUrl?: string;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it
     * assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
     */
    taskReservationTimeout?: number;
  };

  export type DeleteWorkflowRequest = {
    /** The SID of the Workspace with the Workflow to delete. */
    workspaceSid: string;
    /** The SID of the Workflow resource to delete. */
    sid: string;
  };

  export type FetchWorkflowRequest = {
    /** The SID of the Workspace with the Workflow to fetch. */
    workspaceSid: string;
    /** The SID of the Workflow resource to fetch. */
    sid: string;
  };

  export type ListWorkflowRequest = {
    /** The SID of the Workspace with the Workflow to read. */
    workspaceSid: string;
    /** The `friendly_name` of the Workflow resources to read. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWorkflowRequest = {
    /** The SID of the Workspace with the Workflow to update. */
    workspaceSid: string;
    /** The SID of the Workflow resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the Workflow resource. For example, `Inbound
     * Call Workflow` or `2014 Outbound Campaign`.
     */
    friendlyName?: string;
    /**
     * The URL from your application that will process task assignment events. See [Handling Task
     * Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for
     * more details.
     */
    assignmentCallbackUrl?: string;
    /** The URL that we should call when a call to the `assignment_callback_url` fails. */
    fallbackAssignmentCallbackUrl?: string;
    /**
     * A JSON string that contains the rules to apply to the Workflow. See [Configuring
     * Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more
     * information.
     */
    configuration?: string;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it
     * assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
     */
    taskReservationTimeout?: number;
    /**
     * Whether or not to re-evaluate Tasks. The default is `false`, which means Tasks in the
     * Workflow will not be processed through the assignment loop again.
     */
    reEvaluateTasks?: string;
  };
}
