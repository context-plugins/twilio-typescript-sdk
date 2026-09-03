import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listActivityResponseSchema, type ListActivityResponse } from "../models/list-activity-response.js";
import {
  taskrouterV1WorkspaceActivitySchema,
  type TaskrouterV1WorkspaceActivity,
} from "../models/taskrouter-v1-workspace-activity.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1Activity {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createActivity(
    request: TaskrouterV1Activity.CreateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceActivity, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Available", value: request.available, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceActivitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteActivity(
    request: TaskrouterV1Activity.DeleteActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
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

  fetchActivity(
    request: TaskrouterV1Activity.FetchActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceActivity, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceActivitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listActivity(
    request: TaskrouterV1Activity.ListActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<ListActivityResponse, ResponseError> {
    return this.#rawClient.execute<ListActivityResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Available", value: request.available, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listActivityResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateActivity(
    request: TaskrouterV1Activity.UpdateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceActivity, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceActivitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Activity {
  export type CreateActivityRequest = {
    workspaceSid: string;
    friendlyName: string;
    available?: boolean;
  };

  export type DeleteActivityRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type FetchActivityRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListActivityRequest = {
    workspaceSid: string;
    friendlyName?: string;
    available?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateActivityRequest = {
    workspaceSid: string;
    sid: string;
    friendlyName?: string;
  };
}
