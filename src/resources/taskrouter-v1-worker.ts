import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listWorkerResponseSchema, type ListWorkerResponse } from "../models/list-worker-response.js";
import {
  taskrouterV1WorkspaceWorkerSchema,
  type TaskrouterV1WorkspaceWorker,
} from "../models/taskrouter-v1-workspace-worker.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1Worker {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWorker(
    request: TaskrouterV1Worker.CreateWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorker, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "ActivitySid", value: request.activitySid, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteWorker(
    request: TaskrouterV1Worker.DeleteWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
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

  fetchWorker(
    request: TaskrouterV1Worker.FetchWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorker, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorker(
    request: TaskrouterV1Worker.ListWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkerResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "ActivityName", value: request.activityName, schema: s.optional(s.string()) },
          { name: "ActivitySid", value: request.activitySid, schema: s.optional(s.string()) },
          { name: "Available", value: request.available, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          {
            name: "TargetWorkersExpression",
            value: request.targetWorkersExpression,
            schema: s.optional(s.string()),
          },
          { name: "TaskQueueName", value: request.taskQueueName, schema: s.optional(s.string()) },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          { name: "Ordering", value: request.ordering, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorker(
    request: TaskrouterV1Worker.UpdateWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorker, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ActivitySid", value: request.activitySid, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "RejectPendingReservations",
              value: request.rejectPendingReservations,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Worker {
  export type CreateWorkerRequest = {
    workspaceSid: string;
    friendlyName: string;
    activitySid?: string;
    attributes?: string;
  };

  export type DeleteWorkerRequest = {
    workspaceSid: string;
    sid: string;
    ifMatch?: string;
  };

  export type FetchWorkerRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListWorkerRequest = {
    workspaceSid: string;
    activityName?: string;
    activitySid?: string;
    available?: string;
    friendlyName?: string;
    targetWorkersExpression?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
    ordering?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWorkerRequest = {
    workspaceSid: string;
    sid: string;
    ifMatch?: string;
    activitySid?: string;
    attributes?: string;
    friendlyName?: string;
    rejectPendingReservations?: boolean;
  };
}
