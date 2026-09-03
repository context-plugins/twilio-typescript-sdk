import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import { callEnumEventSchema, type CallEnumEvent } from "../models/call-enum-event.js";
import {
  listWorkerReservationResponseSchema,
  type ListWorkerReservationResponse,
} from "../models/list-worker-reservation-response.js";
import {
  taskrouterV1WorkspaceWorkerWorkerReservationSchema,
  type TaskrouterV1WorkspaceWorkerWorkerReservation,
} from "../models/taskrouter-v1-workspace-worker-worker-reservation.js";
import {
  workerReservationEnumConferenceEventSchema,
  type WorkerReservationEnumConferenceEvent,
} from "../models/worker-reservation-enum-conference-event.js";
import {
  workerReservationEnumStatusSchema,
  type WorkerReservationEnumStatus,
} from "../models/worker-reservation-enum-status.js";
import type { Servers } from "../servers.js";

export class TaskrouterV1WorkerReservation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchWorkerReservation(
    request: TaskrouterV1WorkerReservation.FetchWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerReservation, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerReservation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerReservationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorkerReservation(
    request: TaskrouterV1WorkerReservation.ListWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerReservationResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkerReservationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
        ],
        query: [
          {
            name: "ReservationStatus",
            value: request.reservationStatus,
            schema: s.optional(s.lazy(() => workerReservationEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerReservationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorkerReservation(
    request: TaskrouterV1WorkerReservation.UpdateWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerReservation, ResponseError> {
    return this.#rawClient.execute<TaskrouterV1WorkspaceWorkerWorkerReservation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "ReservationStatus",
              value: request.reservationStatus,
              schema: s.optional(s.lazy(() => workerReservationEnumStatusSchema)),
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
              schema: s.optional(s.array(s.lazy(() => workerReservationEnumConferenceEventSchema))),
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
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerReservationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerReservation {
  export type FetchWorkerReservationRequest = {
    workspaceSid: string;
    workerSid: string;
    sid: string;
  };

  export type ListWorkerReservationRequest = {
    workspaceSid: string;
    workerSid: string;
    reservationStatus?: WorkerReservationEnumStatus;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWorkerReservationRequest = {
    workspaceSid: string;
    workerSid: string;
    sid: string;
    ifMatch?: string;
    reservationStatus?: WorkerReservationEnumStatus;
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
    conferenceStatusCallbackEvent?: WorkerReservationEnumConferenceEvent[];
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
    endConferenceOnCustomerExit?: boolean;
    beepOnCustomerEntrance?: boolean;
    jitterBufferSize?: string;
  };
}
