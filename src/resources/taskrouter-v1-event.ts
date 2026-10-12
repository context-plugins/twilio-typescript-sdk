import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { listEventResponseSchema, type ListEventResponse } from "../models/list-event-response.js";
import {
  taskrouterV1WorkspaceEventSchema,
  type TaskrouterV1WorkspaceEvent,
} from "../models/taskrouter-v1-workspace-event.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1Event {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchEvent(
    request: TaskrouterV1Event.FetchEventRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceEvent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Events/{Sid}"),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceEventSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listEvent(
    request: TaskrouterV1Event.ListEventRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEventResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Events"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "EventType", value: request.eventType, schema: s.optional(s.string()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.int()) },
          { name: "ReservationSid", value: request.reservationSid, schema: s.optional(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          { name: "TaskSid", value: request.taskSid, schema: s.optional(s.string()) },
          { name: "WorkerSid", value: request.workerSid, schema: s.optional(s.string()) },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.optional(s.string()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Event {
  export type FetchEventRequest = {
    /** The SID of the Workspace with the Event to fetch. */
    workspaceSid: string;
    /** The SID of the Event resource to fetch. */
    sid: string;
  };

  export type ListEventRequest = {
    /**
     * The SID of the Workspace with the Events to read. Returns only the Events that pertain to the
     * specified Workspace.
     */
    workspaceSid: string;
    /**
     * Only include Events that occurred on or before this date, specified in GMT as an [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /** The type of Events to read. Returns only Events of the type specified. */
    eventType?: string;
    /**
     * The period of events to read in minutes. Returns only Events that occurred since this many
     * minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more
     * 43,200 minutes ago will be redacted.
     */
    minutes?: number;
    /**
     * The SID of the Reservation with the Events to read. Returns only Events that pertain to the
     * specified Reservation.
     */
    reservationSid?: string;
    /**
     * Only include Events from on or after this date and time, specified in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than
     * 30 days will be redacted.
     */
    startDate?: Date;
    /**
     * The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the
     * specified TaskQueue.
     */
    taskQueueSid?: string;
    /**
     * The SID of the Task with the Events to read. Returns only the Events that pertain to the
     * specified Task.
     */
    taskSid?: string;
    /**
     * The SID of the Worker with the Events to read. Returns only the Events that pertain to the
     * specified Worker.
     */
    workerSid?: string;
    /**
     * The SID of the Workflow with the Events to read. Returns only the Events that pertain to the
     * specified Workflow.
     */
    workflowSid?: string;
    /**
     * The TaskChannel with the Events to read. Returns only the Events that pertain to the
     * specified TaskChannel.
     */
    taskChannel?: string;
    /** The SID of the Event resource to read. */
    sid?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
