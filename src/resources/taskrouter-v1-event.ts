import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<TaskrouterV1WorkspaceEvent, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceEvent, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Events/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceEventSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEvent(
    request: TaskrouterV1Event.ListEventRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEventResponse, ResponseError> {
    return this.#rawClient.execute<ListEventResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Events"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() }],
        query: [
          { name: "EndDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "EventType", value: request.eventType, schema: s.optional(s.string()) },
          { name: "Minutes", value: request.minutes, schema: s.optional(s.number()) },
          { name: "ReservationSid", value: request.reservationSid, schema: s.optional(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "TaskQueueSid", value: request.taskQueueSid, schema: s.optional(s.string()) },
          { name: "TaskSid", value: request.taskSid, schema: s.optional(s.string()) },
          { name: "WorkerSid", value: request.workerSid, schema: s.optional(s.string()) },
          { name: "WorkflowSid", value: request.workflowSid, schema: s.optional(s.string()) },
          { name: "TaskChannel", value: request.taskChannel, schema: s.optional(s.string()) },
          { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1Event {
  export type FetchEventRequest = {
    workspaceSid: string;
    sid: string;
  };

  export type ListEventRequest = {
    workspaceSid: string;
    endDate?: Date;
    eventType?: string;
    minutes?: number;
    reservationSid?: string;
    startDate?: Date;
    taskQueueSid?: string;
    taskSid?: string;
    workerSid?: string;
    workflowSid?: string;
    taskChannel?: string;
    sid?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
