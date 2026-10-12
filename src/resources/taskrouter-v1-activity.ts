import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteActivity(
    request: TaskrouterV1Activity.DeleteActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
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

  fetchActivity(
    request: TaskrouterV1Activity.FetchActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceActivitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listActivity(
    request: TaskrouterV1Activity.ListActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<ListActivityResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Available", value: request.available, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listActivityResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateActivity(
    request: TaskrouterV1Activity.UpdateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceActivitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Activity {
  export type CreateActivityRequest = {
    /** The SID of the Workspace that the new Activity belongs to. */
    workspaceSid: string;
    /**
     * A descriptive string that you create to describe the Activity resource. It can be up to 64
     * characters long. These names are used to calculate and expose statistics about Workers, and
     * provide visibility into the state of each Worker. Examples of friendly names include:
     * `on-call`, `break`, and `email`.
     */
    friendlyName: string;
    /**
     * Whether the Worker should be eligible to receive a Task when it occupies the Activity. A
     * value of `true`, `1`, or `yes` specifies the Activity is available. All other values specify
     * that it is not. The value cannot be changed after the Activity is created.
     */
    available?: boolean;
  };

  export type DeleteActivityRequest = {
    /** The SID of the Workspace with the Activity resources to delete. */
    workspaceSid: string;
    /** The SID of the Activity resource to delete. */
    sid: string;
  };

  export type FetchActivityRequest = {
    /** The SID of the Workspace with the Activity resources to fetch. */
    workspaceSid: string;
    /** The SID of the Activity resource to fetch. */
    sid: string;
  };

  export type ListActivityRequest = {
    /** The SID of the Workspace with the Activity resources to read. */
    workspaceSid: string;
    /** The `friendly_name` of the Activity resources to read. */
    friendlyName?: string;
    /**
     * Whether return only Activity resources that are available or unavailable. A value of `true`
     * returns only available activities. Values of '1' or `yes` also indicate `true`. All other
     * values represent `false` and return activities that are unavailable.
     */
    available?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateActivityRequest = {
    /** The SID of the Workspace with the Activity resources to update. */
    workspaceSid: string;
    /** The SID of the Activity resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the Activity resource. It can be up to 64
     * characters long. These names are used to calculate and expose statistics about Workers, and
     * provide visibility into the state of each Worker. Examples of friendly names include:
     * `on-call`, `break`, and `email`.
     */
    friendlyName?: string;
  };
}
