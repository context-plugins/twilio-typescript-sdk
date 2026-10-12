import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Types of tasks
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTaskChannel(
    request: TaskrouterV1TaskChannel.CreateTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Types of tasks
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTaskChannel(
    request: TaskrouterV1TaskChannel.DeleteTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
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

  /**
   * Types of tasks
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTaskChannel(
    request: TaskrouterV1TaskChannel.FetchTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Types of tasks
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTaskChannel(
    request: TaskrouterV1TaskChannel.ListTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskChannelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskChannelResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Types of tasks
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTaskChannel(
    request: TaskrouterV1TaskChannel.UpdateTaskChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}"),
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
              name: "ChannelOptimizedRouting",
              value: request.channelOptimizedRouting,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskChannel {
  export type CreateTaskChannelRequest = {
    /** The SID of the Workspace that the new Task Channel belongs to. */
    workspaceSid: string;
    /**
     * A descriptive string that you create to describe the Task Channel. It can be up to 64
     * characters long.
     */
    friendlyName: string;
    /**
     * An application-defined string that uniquely identifies the Task Channel, such as `voice` or
     * `sms`.
     */
    uniqueName: string;
    /**
     * Whether the Task Channel should prioritize Workers that have been idle. If `true`, Workers
     * that have been idle the longest are prioritized.
     */
    channelOptimizedRouting?: boolean;
  };

  export type DeleteTaskChannelRequest = {
    /** The SID of the Workspace with the Task Channel to delete. */
    workspaceSid: string;
    /** The SID of the Task Channel resource to delete. */
    sid: string;
  };

  export type FetchTaskChannelRequest = {
    /** The SID of the Workspace with the Task Channel to fetch. */
    workspaceSid: string;
    /** The SID of the Task Channel resource to fetch. */
    sid: string;
  };

  export type ListTaskChannelRequest = {
    /** The SID of the Workspace with the Task Channel to read. */
    workspaceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateTaskChannelRequest = {
    /** The SID of the Workspace with the Task Channel to update. */
    workspaceSid: string;
    /** The SID of the Task Channel resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the Task Channel. It can be up to 64
     * characters long.
     */
    friendlyName?: string;
    /**
     * Whether the TaskChannel should prioritize Workers that have been idle. If `true`, Workers
     * that have been idle the longest are prioritized.
     */
    channelOptimizedRouting?: boolean;
  };
}
