import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listWorkspaceResponseSchema,
  type ListWorkspaceResponse,
} from "../models/list-workspace-response.js";
import {
  taskrouterV1WorkspaceSchema,
  type TaskrouterV1Workspace,
} from "../models/taskrouter-v1-workspace.js";
import {
  workspaceEnumQueueOrderSchema,
  type WorkspaceEnumQueueOrder,
} from "../models/workspace-enum-queue-order.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkspaceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWorkspace(
    request: TaskrouterV1WorkspaceApi.CreateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1Workspace, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1Workspace, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "EventCallbackUrl", value: request.eventCallbackUrl, schema: s.optional(s.string()) },
            { name: "EventsFilter", value: request.eventsFilter, schema: s.optional(s.string()) },
            { name: "MultiTaskEnabled", value: request.multiTaskEnabled, schema: s.optional(s.boolean()) },
            { name: "Template", value: request.template, schema: s.optional(s.string()) },
            {
              name: "PrioritizeQueueOrder",
              value: request.prioritizeQueueOrder,
              schema: s.optional(s.lazy(() => workspaceEnumQueueOrderSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteWorkspace(
    request: TaskrouterV1WorkspaceApi.DeleteWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchWorkspace(
    request: TaskrouterV1WorkspaceApi.FetchWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1Workspace, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1Workspace, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorkspace(
    request: TaskrouterV1WorkspaceApi.ListWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkspaceResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkspaceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkspaceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorkspace(
    request: TaskrouterV1WorkspaceApi.UpdateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1Workspace, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1Workspace, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "DefaultActivitySid", value: request.defaultActivitySid, schema: s.optional(s.string()) },
            { name: "EventCallbackUrl", value: request.eventCallbackUrl, schema: s.optional(s.string()) },
            { name: "EventsFilter", value: request.eventsFilter, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "MultiTaskEnabled", value: request.multiTaskEnabled, schema: s.optional(s.boolean()) },
            { name: "TimeoutActivitySid", value: request.timeoutActivitySid, schema: s.optional(s.string()) },
            {
              name: "PrioritizeQueueOrder",
              value: request.prioritizeQueueOrder,
              schema: s.optional(s.lazy(() => workspaceEnumQueueOrderSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkspaceApi {
  export type CreateWorkspaceRequest = {
    friendlyName: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    multiTaskEnabled?: boolean;
    template?: string;
    prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  };

  export type DeleteWorkspaceRequest = {
    sid: string;
  };

  export type FetchWorkspaceRequest = {
    sid: string;
  };

  export type ListWorkspaceRequest = {
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWorkspaceRequest = {
    sid: string;
    defaultActivitySid?: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    friendlyName?: string;
    multiTaskEnabled?: boolean;
    timeoutActivitySid?: string;
    prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  };
}
