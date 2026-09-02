import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listTaskChannelResponseSchema,
  type ListTaskChannelResponse,
} from "../models/list-task-channel-response.js";
import {
  taskrouterV1WorkspaceTaskChannelSchema,
  type TaskrouterV1WorkspaceTaskChannel,
} from "../models/taskrouter-v1-workspace-task-channel.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskChannel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTaskChannel(
    request: TaskrouterV1TaskChannel.CreateTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "UniqueName", value: request.uniqueName, schema: s.string() },
            {
              name: "ChannelOptimizedRouting",
              value: request.channelOptimizedRouting,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTaskChannel(
    request: TaskrouterV1TaskChannel.DeleteTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
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

  fetchTaskChannel(
    request: TaskrouterV1TaskChannel.FetchTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskChannel, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTaskChannel(
    request: TaskrouterV1TaskChannel.ListTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskChannelResponse, ResponseError> {
    return this.#rawClient.execute<ListTaskChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTaskChannel(
    request: TaskrouterV1TaskChannel.UpdateTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
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
              name: "ChannelOptimizedRouting",
              value: request.channelOptimizedRouting,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskChannel {
  export type CreateTaskChannelRequest = {
    workspaceSid: string;
    friendlyName: string;
    uniqueName: string;
    channelOptimizedRouting?: boolean;
  };

  export type DeleteTaskChannelRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type FetchTaskChannelRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListTaskChannelRequest = {
    workspaceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateTaskChannelRequest = {
    workspaceSid: string;
    sid: string;
    friendlyName?: string;
    channelOptimizedRouting?: boolean;
  };
}
