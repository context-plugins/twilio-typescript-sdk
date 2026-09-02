import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import { callEnumEventSchema, type CallEnumEvent } from "../models/call-enum-event.js";
import {
  listTaskReservationResponseSchema,
  type ListTaskReservationResponse,
} from "../models/list-task-reservation-response.js";
import {
  taskReservationEnumConferenceEventSchema,
  type TaskReservationEnumConferenceEvent,
} from "../models/task-reservation-enum-conference-event.js";
import {
  taskReservationEnumStatusSchema,
  type TaskReservationEnumStatus,
} from "../models/task-reservation-enum-status.js";
import {
  taskReservationEnumSupervisorModeSchema,
  type TaskReservationEnumSupervisorMode,
} from "../models/task-reservation-enum-supervisor-mode.js";
import {
  taskrouterV1WorkspaceTaskTaskReservationSchema,
  type TaskrouterV1WorkspaceTaskTaskReservation,
} from "../models/taskrouter-v1-workspace-task-task-reservation.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1TaskReservation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchTaskReservation(
    request: TaskrouterV1TaskReservation.FetchTaskReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskSid", value: request.taskSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskTaskReservationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTaskReservation(
    request: TaskrouterV1TaskReservation.ListTaskReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTaskReservationResponse, ResponseError> {
    return this.#rawClient.execute<ListTaskReservationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskSid", value: request.taskSid, schema: s.string() },
        ],
        query: [
          {
            name: "ReservationStatus",
            value: request.reservationStatus,
            schema: s.optional(s.lazy(() => taskReservationEnumStatusSchema)),
          },
          { name: "WorkerSid", value: request.workerSid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTaskReservationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTaskReservation(
    request: TaskrouterV1TaskReservation.UpdateTaskReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "TaskSid", value: request.taskSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "ReservationStatus",
              value: request.reservationStatus,
              schema: s.optional(s.lazy(() => taskReservationEnumStatusSchema)),
            },
            { name: "WorkerActivitySid", value: request.workerActivitySid, schema: s.optional(s.string()) },
            { name: "Instruction", value: request.instruction, schema: s.optional(s.string()) },
            {
              name: "DequeuePostWorkActivitySid",
              value: request.dequeuePostWorkActivitySid,
              schema: s.optional(s.string()),
            },
            { name: "DequeueFrom", value: request.dequeueFrom, schema: s.optional(s.string()) },
            { name: "DequeueRecord", value: request.dequeueRecord, schema: s.optional(s.string()) },
            { name: "DequeueTimeout", value: request.dequeueTimeout, schema: s.optional(s.number()) },
            { name: "DequeueTo", value: request.dequeueTo, schema: s.optional(s.string()) },
            {
              name: "DequeueStatusCallbackUrl",
              value: request.dequeueStatusCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "CallFrom", value: request.callFrom, schema: s.optional(s.string()) },
            { name: "CallRecord", value: request.callRecord, schema: s.optional(s.string()) },
            { name: "CallTimeout", value: request.callTimeout, schema: s.optional(s.number()) },
            { name: "CallTo", value: request.callTo, schema: s.optional(s.string()) },
            { name: "CallUrl", value: request.callUrl, schema: s.optional(s.string()) },
            {
              name: "CallStatusCallbackUrl",
              value: request.callStatusCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "CallAccept", value: request.callAccept, schema: s.optional(s.boolean()) },
            { name: "RedirectCallSid", value: request.redirectCallSid, schema: s.optional(s.string()) },
            { name: "RedirectAccept", value: request.redirectAccept, schema: s.optional(s.boolean()) },
            { name: "RedirectUrl", value: request.redirectUrl, schema: s.optional(s.string()) },
            { name: "To", value: request.to, schema: s.optional(s.string()) },
            { name: "From", value: request.from, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            {
              name: "StatusCallbackEvent",
              value: request.statusCallbackEvent,
              schema: s.optional(s.array(s.lazy(() => callEnumEventSchema))),
            },
            { name: "Timeout", value: request.timeout, schema: s.optional(s.number()) },
            { name: "Record", value: request.record, schema: s.optional(s.boolean()) },
            { name: "Muted", value: request.muted, schema: s.optional(s.boolean()) },
            { name: "Beep", value: request.beep, schema: s.optional(s.string()) },
            {
              name: "StartConferenceOnEnter",
              value: request.startConferenceOnEnter,
              schema: s.optional(s.boolean()),
            },
            {
              name: "EndConferenceOnExit",
              value: request.endConferenceOnExit,
              schema: s.optional(s.boolean()),
            },
            { name: "WaitUrl", value: request.waitUrl, schema: s.optional(s.string()) },
            {
              name: "WaitMethod",
              value: request.waitMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "EarlyMedia", value: request.earlyMedia, schema: s.optional(s.boolean()) },
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.number()) },
            {
              name: "ConferenceStatusCallback",
              value: request.conferenceStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "ConferenceStatusCallbackMethod",
              value: request.conferenceStatusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            {
              name: "ConferenceStatusCallbackEvent",
              value: request.conferenceStatusCallbackEvent,
              schema: s.optional(s.array(s.lazy(() => taskReservationEnumConferenceEventSchema))),
            },
            { name: "ConferenceRecord", value: request.conferenceRecord, schema: s.optional(s.string()) },
            { name: "ConferenceTrim", value: request.conferenceTrim, schema: s.optional(s.string()) },
            { name: "RecordingChannels", value: request.recordingChannels, schema: s.optional(s.string()) },
            {
              name: "RecordingStatusCallback",
              value: request.recordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "RecordingStatusCallbackMethod",
              value: request.recordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            {
              name: "ConferenceRecordingStatusCallback",
              value: request.conferenceRecordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "ConferenceRecordingStatusCallbackMethod",
              value: request.conferenceRecordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "Region", value: request.region, schema: s.optional(s.string()) },
            { name: "SipAuthUsername", value: request.sipAuthUsername, schema: s.optional(s.string()) },
            { name: "SipAuthPassword", value: request.sipAuthPassword, schema: s.optional(s.string()) },
            {
              name: "DequeueStatusCallbackEvent",
              value: request.dequeueStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "PostWorkActivitySid",
              value: request.postWorkActivitySid,
              schema: s.optional(s.string()),
            },
            {
              name: "SupervisorMode",
              value: request.supervisorMode,
              schema: s.optional(s.lazy(() => taskReservationEnumSupervisorModeSchema)),
            },
            { name: "Supervisor", value: request.supervisor, schema: s.optional(s.string()) },
            {
              name: "EndConferenceOnCustomerExit",
              value: request.endConferenceOnCustomerExit,
              schema: s.optional(s.boolean()),
            },
            {
              name: "BeepOnCustomerEntrance",
              value: request.beepOnCustomerEntrance,
              schema: s.optional(s.boolean()),
            },
            { name: "JitterBufferSize", value: request.jitterBufferSize, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceTaskTaskReservationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1TaskReservation {
  export type FetchTaskReservationRequest = {
    workspaceSid: string;
    taskSid: string;
    sid: string;
  };

  export type ListTaskReservationRequest = {
    workspaceSid: string;
    taskSid: string;
    reservationStatus?: TaskReservationEnumStatus;
    workerSid?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateTaskReservationRequest = {
    workspaceSid: string;
    taskSid: string;
    sid: string;
    ifMatch?: string;
    reservationStatus?: TaskReservationEnumStatus;
    workerActivitySid?: string;
    instruction?: string;
    dequeuePostWorkActivitySid?: string;
    dequeueFrom?: string;
    dequeueRecord?: string;
    dequeueTimeout?: number;
    dequeueTo?: string;
    dequeueStatusCallbackUrl?: string;
    callFrom?: string;
    callRecord?: string;
    callTimeout?: number;
    callTo?: string;
    callUrl?: string;
    callStatusCallbackUrl?: string;
    callAccept?: boolean;
    redirectCallSid?: string;
    redirectAccept?: boolean;
    redirectUrl?: string;
    to?: string;
    from?: string;
    statusCallback?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    statusCallbackEvent?: CallEnumEvent[];
    timeout?: number;
    record?: boolean;
    muted?: boolean;
    beep?: string;
    startConferenceOnEnter?: boolean;
    endConferenceOnExit?: boolean;
    waitUrl?: string;
    waitMethod?: AmdStatusCallbackMethod;
    earlyMedia?: boolean;
    maxParticipants?: number;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackMethod?: AmdStatusCallbackMethod;
    conferenceStatusCallbackEvent?: TaskReservationEnumConferenceEvent[];
    conferenceRecord?: string;
    conferenceTrim?: string;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: AmdStatusCallbackMethod;
    conferenceRecordingStatusCallback?: string;
    conferenceRecordingStatusCallbackMethod?: AmdStatusCallbackMethod;
    region?: string;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
    dequeueStatusCallbackEvent?: string[];
    postWorkActivitySid?: string;
    supervisorMode?: TaskReservationEnumSupervisorMode;
    supervisor?: string;
    endConferenceOnCustomerExit?: boolean;
    beepOnCustomerEntrance?: boolean;
    jitterBufferSize?: string;
  };
}
