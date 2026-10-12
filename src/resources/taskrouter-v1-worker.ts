import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteWorker(
    request: TaskrouterV1Worker.DeleteWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchWorker(
    request: TaskrouterV1Worker.FetchWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listWorker(
    request: TaskrouterV1Worker.ListWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWorker(
    request: TaskrouterV1Worker.UpdateWorkerRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorker, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Worker {
  export type CreateWorkerRequest = {
    /** The SID of the Workspace that the new Worker belongs to. */
    workspaceSid: string;
    /**
     * A descriptive string that you create to describe the new Worker. It can be up to 64
     * characters long.
     */
    friendlyName: string;
    /**
     * The SID of a valid Activity that will describe the new Worker's initial state. See
     * [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. If
     * not provided, the new Worker's initial state is the `default_activity_sid` configured on the
     * Workspace.
     */
    activitySid?: string;
    /**
     * A valid JSON string that describes the new Worker. For example: `{ "email":
     * "Bob@example.com", "phone": "+5095551234" }`. This data is passed to the
     * `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}.
     */
    attributes?: string;
  };

  export type DeleteWorkerRequest = {
    /** The SID of the Workspace with the Worker to delete. */
    workspaceSid: string;
    /** The SID of the Worker resource to delete. */
    sid: string;
    /** The If-Match HTTP request header */
    ifMatch?: string;
  };

  export type FetchWorkerRequest = {
    /** The SID of the Workspace with the Worker to fetch. */
    workspaceSid: string;
    /** The SID of the Worker resource to fetch. */
    sid: string;
  };

  export type ListWorkerRequest = {
    /** The SID of the Workspace with the Workers to read. */
    workspaceSid: string;
    /** The `activity_name` of the Worker resources to read. */
    activityName?: string;
    /** The `activity_sid` of the Worker resources to read. */
    activitySid?: string;
    /**
     * Whether to return only Worker resources that are available or unavailable. Can be `true`,
     * `1`, or `yes` to return Worker resources that are available, and `false`, or any value
     * returns the Worker resources that are not available.
     */
    available?: string;
    /** The `friendly_name` of the Worker resources to read. */
    friendlyName?: string;
    /**
     * Filter by Workers that would match an expression. In addition to fields in the workers'
     * attributes, the expression can include the following worker fields: `sid`, `friendly_name`,
     * `activity_sid`, or `activity_name`
     */
    targetWorkersExpression?: string;
    /** The `friendly_name` of the TaskQueue that the Workers to read are eligible for. */
    taskQueueName?: string;
    /** The SID of the TaskQueue that the Workers to read are eligible for. */
    taskQueueSid?: string;
    /** Sorting parameter for Workers */
    ordering?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWorkerRequest = {
    /** The SID of the Workspace with the Worker to update. */
    workspaceSid: string;
    /** The SID of the Worker resource to update. */
    sid: string;
    /** The If-Match HTTP request header */
    ifMatch?: string;
    /**
     * The SID of a valid Activity that will describe the Worker's initial state. See
     * [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information.
     */
    activitySid?: string;
    /**
     * The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com",
     * "phone": "+5095551234" }`. This data is passed to the `assignment_callback_url` when
     * TaskRouter assigns a Task to the Worker. Defaults to {}.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the Worker. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /**
     * Whether to reject the Worker's pending reservations. This option is only valid if the
     * Worker's new [Activity](https://www.twilio.com/docs/taskrouter/api/activity) resource has its
     * `availability` property set to `False`.
     */
    rejectPendingReservations?: boolean;
  };
}
