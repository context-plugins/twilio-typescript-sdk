import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listWorkerChannelResponseSchema,
  type ListWorkerChannelResponse,
} from "../models/list-worker-channel-response.js";
import {
  taskrouterV1WorkspaceWorkerWorkerChannelSchema,
  type TaskrouterV1WorkspaceWorkerWorkerChannel,
} from "../models/taskrouter-v1-workspace-worker-worker-channel.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkerChannel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkerChannel(
    request: TaskrouterV1WorkerChannel.FetchWorkerChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listWorkerChannel(
    request: TaskrouterV1WorkerChannel.ListWorkerChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerChannelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerChannelResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWorkerChannel(
    request: TaskrouterV1WorkerChannel.UpdateWorkerChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Capacity", value: request.capacity, schema: s.optional(s.int()) },
            { name: "Available", value: request.available, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerChannel {
  export type FetchWorkerChannelRequest = {
    /** The SID of the Workspace with the WorkerChannel to fetch. */
    workspaceSid: string;
    /** The SID of the Worker with the WorkerChannel to fetch. */
    workerSid: string;
    /** The SID of the WorkerChannel to fetch. */
    sid: string;
  };

  export type ListWorkerChannelRequest = {
    /** The SID of the Workspace with the WorkerChannels to read. */
    workspaceSid: string;
    /** The SID of the Worker with the WorkerChannels to read. */
    workerSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWorkerChannelRequest = {
    /** The SID of the Workspace with the WorkerChannel to update. */
    workspaceSid: string;
    /** The SID of the Worker with the WorkerChannel to update. */
    workerSid: string;
    /** The SID of the WorkerChannel to update. */
    sid: string;
    /**
     * The total number of Tasks that the Worker should handle for the TaskChannel type. TaskRouter
     * creates reservations for Tasks of this TaskChannel type up to the specified capacity. If the
     * capacity is 0, no new reservations will be created.
     */
    capacity?: number;
    /**
     * Whether the WorkerChannel is available. Set to `false` to prevent the Worker from receiving
     * any new Tasks of this TaskChannel type.
     */
    available?: boolean;
  };
}
