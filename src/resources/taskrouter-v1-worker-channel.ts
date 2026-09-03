import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerChannel, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorkerChannel(
    request: TaskrouterV1WorkerChannel.ListWorkerChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerChannelResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkerChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorkerChannel(
    request: TaskrouterV1WorkerChannel.UpdateWorkerChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Capacity", value: request.capacity, schema: s.optional(s.number()) },
            { name: "Available", value: request.available, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerChannel {
  export type FetchWorkerChannelRequest = {
    workspaceSid: string;
    workerSid: string;
    sid: string;
  };

  export type ListWorkerChannelRequest = {
    workspaceSid: string;
    workerSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWorkerChannelRequest = {
    workspaceSid: string;
    workerSid: string;
    sid: string;
    capacity?: number;
    available?: boolean;
  };
}
