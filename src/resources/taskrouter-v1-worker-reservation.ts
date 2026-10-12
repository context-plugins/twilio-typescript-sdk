import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Current and past reservations for a worker
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchWorkerReservation(
    request: TaskrouterV1WorkerReservation.FetchWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerReservation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskrouterV1WorkspaceWorkerWorkerReservationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Current and past reservations for a worker
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkerReservation(
    request: TaskrouterV1WorkerReservation.ListWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkerReservationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default8("/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkerReservationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Current and past reservations for a worker
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWorkerReservation(
    request: TaskrouterV1WorkerReservation.UpdateWorkerReservationRequest,
    options?: RequestOptions,
  ): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerReservation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8(
          "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "WorkspaceSid", value: request.workspaceSid, schema: s.string() },
          { name: "WorkerSid", value: request.workerSid, schema: s.string() },
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
            { name: "DequeueTimeout", value: request.dequeueTimeout, schema: s.optional(s.int()) },
            { name: "DequeueTo", value: request.dequeueTo, schema: s.optional(s.string()) },
            {
              name: "DequeueStatusCallbackUrl",
              value: request.dequeueStatusCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "CallFrom", value: request.callFrom, schema: s.optional(s.string()) },
            { name: "CallRecord", value: request.callRecord, schema: s.optional(s.string()) },
            { name: "CallTimeout", value: request.callTimeout, schema: s.optional(s.int()) },
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
            { name: "Timeout", value: request.timeout, schema: s.optional(s.int()) },
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
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.int()) },
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TaskrouterV1WorkerReservation {
  export type FetchWorkerReservationRequest = {
    /** The SID of the Workspace with the WorkerReservation resource to fetch. */
    workspaceSid: string;
    /** The SID of the reserved Worker resource with the WorkerReservation resource to fetch. */
    workerSid: string;
    /** The SID of the WorkerReservation resource to fetch. */
    sid: string;
  };

  export type ListWorkerReservationRequest = {
    /** The SID of the Workspace with the WorkerReservation resources to read. */
    workspaceSid: string;
    /** The SID of the reserved Worker resource with the WorkerReservation resources to read. */
    workerSid: string;
    /**
     * Returns the list of reservations for a worker with a specified ReservationStatus. Can be:
     * `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`.
     */
    reservationStatus?: WorkerReservationEnumStatus;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWorkerReservationRequest = {
    /** The SID of the Workspace with the WorkerReservation resources to update. */
    workspaceSid: string;
    /** The SID of the reserved Worker resource with the WorkerReservation resources to update. */
    workerSid: string;
    /** The SID of the WorkerReservation resource to update. */
    sid: string;
    /** The If-Match HTTP request header */
    ifMatch?: string;
    /**
     * The current status of the reservation. Can be: `pending`, `accepted`, `rejected`, `timeout`,
     * `canceled`, or `rescinded`.
     */
    reservationStatus?: WorkerReservationEnumStatus;
    /** The new worker activity SID if rejecting a reservation. */
    workerActivitySid?: string;
    /** The assignment instruction for the reservation. */
    instruction?: string;
    /** The SID of the Activity resource to start after executing a Dequeue instruction. */
    dequeuePostWorkActivitySid?: string;
    /** The caller ID of the call to the worker when executing a Dequeue instruction. */
    dequeueFrom?: string;
    /**
     * Whether to record both legs of a call when executing a Dequeue instruction or which leg to
     * record.
     */
    dequeueRecord?: string;
    /** The timeout for call when executing a Dequeue instruction. */
    dequeueTimeout?: number;
    /**
     * The contact URI of the worker when executing a Dequeue instruction. Can be the URI of the
     * Twilio Client, the SIP URI for Programmable SIP, or the
     * [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on
     * the destination.
     */
    dequeueTo?: string;
    /** The callback URL for completed call event when executing a Dequeue instruction. */
    dequeueStatusCallbackUrl?: string;
    /** The Caller ID of the outbound call when executing a Call instruction. */
    callFrom?: string;
    /** Whether to record both legs of a call when executing a Call instruction. */
    callRecord?: string;
    /** The timeout for a call when executing a Call instruction. */
    callTimeout?: number;
    /**
     * The contact URI of the worker when executing a Call instruction. Can be the URI of the Twilio
     * Client, the SIP URI for Programmable SIP, or the
     * [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on
     * the destination.
     */
    callTo?: string;
    /** TwiML URI executed on answering the worker's leg as a result of the Call instruction. */
    callUrl?: string;
    /** The URL to call for the completed call event when executing a Call instruction. */
    callStatusCallbackUrl?: string;
    /** Whether to accept a reservation when executing a Call instruction. */
    callAccept?: boolean;
    /** The Call SID of the call parked in the queue when executing a Redirect instruction. */
    redirectCallSid?: string;
    /** Whether the reservation should be accepted when executing a Redirect instruction. */
    redirectAccept?: boolean;
    /** TwiML URI to redirect the call to when executing the Redirect instruction. */
    redirectUrl?: string;
    /**
     * The Contact URI of the worker when executing a Conference instruction. Can be the URI of the
     * Twilio Client, the SIP URI for Programmable SIP, or the
     * [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on
     * the destination.
     */
    to?: string;
    /** The caller ID of the call to the worker when executing a Conference instruction. */
    from?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the
     * default is `POST`.
     */
    statusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The call progress events that we will send to `status_callback`. Can be: `initiated`,
     * `ringing`, `answered`, or `completed`.
     */
    statusCallbackEvent?: CallEnumEvent[];
    /** The timeout for a call when executing a Conference instruction. */
    timeout?: number;
    /**
     * Whether to record the participant and their conferences, including the time between
     * conferences. Can be `true` or `false` and the default is `false`.
     */
    record?: boolean;
    /** Whether the agent is muted in the conference. Defaults to `false`. */
    muted?: boolean;
    /**
     * Whether to play a notification beep when the participant joins or when to play a beep. Can
     * be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`.
     */
    beep?: string;
    /**
     * Whether to start the conference when the participant joins, if it has not already started.
     * Can be: `true` or `false` and the default is `true`. If `false` and the conference has not
     * started, the participant is muted and hears background music until another participant starts
     * the conference.
     */
    startConferenceOnEnter?: boolean;
    /** Whether to end the conference when the agent leaves. */
    endConferenceOnExit?: boolean;
    /**
     * The URL we should call using the `wait_method` for the music to play while participants are
     * waiting for the conference to start. The default value is the URL of our standard hold music.
     * [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
     */
    waitUrl?: string;
    /**
     * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is
     * `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
     */
    waitMethod?: AmdStatusCallbackMethod;
    /**
     * Whether to allow an agent to hear the state of the outbound call, including ringing or
     * disconnect messages. The default is `true`.
     */
    earlyMedia?: boolean;
    /**
     * The maximum number of participants allowed in the conference. Can be a positive integer from
     * `2` to `250`. The default value is `250`.
     */
    maxParticipants?: number;
    /**
     * The URL we should call using the `conference_status_callback_method` when the conference
     * events in `conference_status_callback_event` occur. Only the value set by the first
     * participant to join the conference is used. Subsequent `conference_status_callback` values
     * are ignored.
     */
    conferenceStatusCallback?: string;
    /**
     * The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST`
     * and defaults to `POST`.
     */
    conferenceStatusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The conference status events that we will send to `conference_status_callback`. Can be:
     * `start`, `end`, `join`, `leave`, `mute`, `hold`, `speaker`.
     */
    conferenceStatusCallbackEvent?: WorkerReservationEnumConferenceEvent[];
    /**
     * Whether to record the conference the participant is joining or when to record the conference.
     * Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is
     * `false`.
     */
    conferenceRecord?: string;
    /**
     * Whether to trim leading and trailing silence from your recorded conference audio files. Can
     * be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`.
     */
    conferenceTrim?: string;
    /**
     * The recording channels for the final recording. Can be: `mono` or `dual` and the default is
     * `mono`.
     */
    recordingChannels?: string;
    /**
     * The URL that we should call using the `recording_status_callback_method` when the recording
     * status changes.
     */
    recordingStatusCallback?: string;
    /**
     * The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or
     * `POST` and defaults to `POST`.
     */
    recordingStatusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The URL we should call using the `conference_recording_status_callback_method` when the
     * conference recording is available.
     */
    conferenceRecordingStatusCallback?: string;
    /**
     * The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET`
     * or `POST` and defaults to `POST`.
     */
    conferenceRecordingStatusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The
     * [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls)
     * where we should mix the recorded audio. Can be:`us1`, `us2`, `ie1`, `de1`, `sg1`, `br1`,
     * `au1`, or `jp1`.
     */
    region?: string;
    /** The SIP username used for authentication. */
    sipAuthUsername?: string;
    /** The SIP password for authentication. */
    sipAuthPassword?: string;
    /** The call progress events sent via webhooks as a result of a Dequeue instruction. */
    dequeueStatusCallbackEvent?: string[];
    /** The new worker activity SID after executing a Conference instruction. */
    postWorkActivitySid?: string;
    /** Whether to end the conference when the customer leaves. */
    endConferenceOnCustomerExit?: boolean;
    /** Whether to play a notification beep when the customer joins. */
    beepOnCustomerEntrance?: boolean;
    /** The jitter buffer size for conference. Can be: `small`, `medium`, `large`, `off`. */
    jitterBufferSize?: string;
  };
}
