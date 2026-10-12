import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<TaskrouterV1Workspace, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteWorkspace(
    request: TaskrouterV1WorkspaceApi.DeleteWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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

  fetchWorkspace(
    request: TaskrouterV1WorkspaceApi.FetchWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1Workspace, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listWorkspace(
    request: TaskrouterV1WorkspaceApi.ListWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkspaceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
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
        success: { kind: "json", schema: listWorkspaceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWorkspace(
    request: TaskrouterV1WorkspaceApi.UpdateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1Workspace, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkspaceApi {
  export type CreateWorkspaceRequest = {
    /**
     * A descriptive string that you create to describe the Workspace resource. It can be up to 64
     * characters long. For example: `Customer Support` or `2014 Election Campaign`.
     */
    friendlyName: string;
    /**
     * The URL we should call when an event occurs. If provided, the Workspace will publish events
     * to this URL, for example, to collect data for reporting. See [Workspace
     * Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This
     * parameter supports Twilio's [Webhooks (HTTP callbacks) Connection
     * Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
     */
    eventCallbackUrl?: string;
    /**
     * The list of Workspace events for which to call event_callback_url. For example, if
     * `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call
     * event_callback_url only when a task is created, canceled, or a Worker activity is updated.
     */
    eventsFilter?: string;
    /**
     * Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to
     * disable it. However, all workspaces should be created as multi-tasking. The default is
     * `true`. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled
     * (`true`), each Worker can receive parallel reservations up to the per-channel maximums
     * defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only
     * receive a new reservation when the previous task is completed. Learn more at
     * [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
     */
    multiTaskEnabled?: boolean;
    /**
     * An available template name. Can be: `NONE` or `FIFO` and the default is `NONE`.
     * Pre-configures the Workspace with the Workflow and Activities specified in the template.
     * `NONE` will create a Workspace with only a set of default activities. `FIFO` will configure
     * TaskRouter with a set of default activities and a single TaskQueue for first-in, first-out
     * distribution, which can be useful when you are getting started with TaskRouter.
     */
    template?: string;
    /**
     * The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of
     * TaskQueues. Can be: `LIFO` or `FIFO` and the default is `FIFO`. For more information, see
     * [Queue Ordering](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo).
     */
    prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  };

  export type DeleteWorkspaceRequest = {
    /** The SID of the Workspace resource to delete. */
    sid: string;
  };

  export type FetchWorkspaceRequest = {
    /** The SID of the Workspace resource to fetch. */
    sid: string;
  };

  export type ListWorkspaceRequest = {
    /**
     * The `friendly_name` of the Workspace resources to read. For example `Customer Support` or
     * `2014 Election Campaign`.
     */
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

  export type UpdateWorkspaceRequest = {
    /** The SID of the Workspace resource to update. */
    sid: string;
    /** The SID of the Activity that will be used when new Workers are created in the Workspace. */
    defaultActivitySid?: string;
    /**
     * The URL we should call when an event occurs. See [Workspace
     * Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This
     * parameter supports Twilio's [Webhooks (HTTP callbacks) Connection
     * Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
     */
    eventCallbackUrl?: string;
    /**
     * The list of Workspace events for which to call event_callback_url. For example if
     * `EventsFilter=task.created,task.canceled,worker.activity.update`, then TaskRouter will call
     * event_callback_url only when a task is created, canceled, or a Worker activity is updated.
     */
    eventsFilter?: string;
    /**
     * A descriptive string that you create to describe the Workspace resource. For example: `Sales
     * Call Center` or `Customer Support Team`.
     */
    friendlyName?: string;
    /**
     * Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to
     * disable it. However, all workspaces should be maintained as multi-tasking. There is no
     * default when omitting this parameter. A multi-tasking Workspace can't be updated to
     * single-tasking unless it is not a Flex Project and another (legacy) single-tasking Workspace
     * exists. Multi-tasking allows Workers to handle multiple Tasks simultaneously. In
     * multi-tasking mode, each Worker can receive parallel reservations up to the per-channel
     * maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker
     * will only receive a new reservation when the previous task is completed. Learn more at
     * [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
     */
    multiTaskEnabled?: boolean;
    /**
     * The SID of the Activity that will be assigned to a Worker when a Task reservation times out
     * without a response.
     */
    timeoutActivitySid?: string;
    /**
     * The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of
     * TaskQueues. Can be: `LIFO` or `FIFO` and the default is `FIFO`. For more information, see
     * [Queue Ordering](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo).
     */
    prioritizeQueueOrder?: WorkspaceEnumQueueOrder;
  };
}
