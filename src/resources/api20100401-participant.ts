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
import { announceMethod1Schema, type AnnounceMethod1 } from "../models/announce-method1.js";
import {
  apiV2010AccountConferenceParticipantSchema,
  type ApiV2010AccountConferenceParticipant,
} from "../models/api-v2010-account-conference-participant.js";
import {
  conferenceRecordingStatusCallbackMethodSchema,
  type ConferenceRecordingStatusCallbackMethod,
} from "../models/conference-recording-status-callback-method.js";
import {
  conferenceStatusCallbackMethodSchema,
  type ConferenceStatusCallbackMethod,
} from "../models/conference-status-callback-method.js";
import { holdMethodSchema, type HoldMethod } from "../models/hold-method.js";
import {
  listParticipantResponseSchema,
  type ListParticipantResponse,
} from "../models/list-participant-response.js";
import {
  recordingStatusCallbackMethod2Schema,
  type RecordingStatusCallbackMethod2,
} from "../models/recording-status-callback-method2.js";
import {
  statusCallbackMethod16Schema,
  type StatusCallbackMethod16,
} from "../models/status-callback-method16.js";
import { waitMethodSchema, type WaitMethod } from "../models/wait-method.js";
import type { Servers } from "../servers.js";

export class Api20100401Participant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Conference participants
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createParticipant(
    request: Api20100401Participant.CreateParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "From", value: request.from, schema: s.string() },
            { name: "To", value: request.to, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod16Schema)),
            },
            {
              name: "StatusCallbackEvent",
              value: request.statusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Label", value: request.label, schema: s.optional(s.string()) },
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
              schema: s.optional(s.lazy(() => waitMethodSchema)),
            },
            { name: "EarlyMedia", value: request.earlyMedia, schema: s.optional(s.boolean()) },
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.int()) },
            { name: "ConferenceRecord", value: request.conferenceRecord, schema: s.optional(s.string()) },
            { name: "ConferenceTrim", value: request.conferenceTrim, schema: s.optional(s.string()) },
            {
              name: "ConferenceStatusCallback",
              value: request.conferenceStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "ConferenceStatusCallbackMethod",
              value: request.conferenceStatusCallbackMethod,
              schema: s.optional(s.lazy(() => conferenceStatusCallbackMethodSchema)),
            },
            {
              name: "ConferenceStatusCallbackEvent",
              value: request.conferenceStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            { name: "RecordingChannels", value: request.recordingChannels, schema: s.optional(s.string()) },
            {
              name: "RecordingStatusCallback",
              value: request.recordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "RecordingStatusCallbackMethod",
              value: request.recordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => recordingStatusCallbackMethod2Schema)),
            },
            { name: "SipAuthUsername", value: request.sipAuthUsername, schema: s.optional(s.string()) },
            { name: "SipAuthPassword", value: request.sipAuthPassword, schema: s.optional(s.string()) },
            { name: "Region", value: request.region, schema: s.optional(s.string()) },
            {
              name: "ConferenceRecordingStatusCallback",
              value: request.conferenceRecordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "ConferenceRecordingStatusCallbackMethod",
              value: request.conferenceRecordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => conferenceRecordingStatusCallbackMethodSchema)),
            },
            {
              name: "RecordingStatusCallbackEvent",
              value: request.recordingStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "ConferenceRecordingStatusCallbackEvent",
              value: request.conferenceRecordingStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Coaching", value: request.coaching, schema: s.optional(s.boolean()) },
            { name: "CallSidToCoach", value: request.callSidToCoach, schema: s.optional(s.string()) },
            { name: "JitterBufferSize", value: request.jitterBufferSize, schema: s.optional(s.string()) },
            { name: "Byoc", value: request.byoc, schema: s.optional(s.string()) },
            { name: "CallerId", value: request.callerId, schema: s.optional(s.string()) },
            { name: "CallReason", value: request.callReason, schema: s.optional(s.string()) },
            { name: "RecordingTrack", value: request.recordingTrack, schema: s.optional(s.string()) },
            {
              name: "RecordingConfigurationId",
              value: request.recordingConfigurationId,
              schema: s.optional(s.string()),
            },
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.int()) },
            { name: "MachineDetection", value: request.machineDetection, schema: s.optional(s.string()) },
            {
              name: "MachineDetectionTimeout",
              value: request.machineDetectionTimeout,
              schema: s.optional(s.int()),
            },
            {
              name: "MachineDetectionSpeechThreshold",
              value: request.machineDetectionSpeechThreshold,
              schema: s.optional(s.int()),
            },
            {
              name: "MachineDetectionSpeechEndThreshold",
              value: request.machineDetectionSpeechEndThreshold,
              schema: s.optional(s.int()),
            },
            {
              name: "MachineDetectionSilenceTimeout",
              value: request.machineDetectionSilenceTimeout,
              schema: s.optional(s.int()),
            },
            { name: "AmdStatusCallback", value: request.amdStatusCallback, schema: s.optional(s.string()) },
            {
              name: "AmdStatusCallbackMethod",
              value: request.amdStatusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.string()) },
            { name: "CallToken", value: request.callToken, schema: s.optional(s.string()) },
            {
              name: "ClientNotificationUrl",
              value: request.clientNotificationUrl,
              schema: s.optional(s.string()),
            },
            { name: "CallerDisplayName", value: request.callerDisplayName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Kick a participant from a given conference
   *
   * @remarks
   * Kick a participant from a given conference
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteParticipant(
    request: Api20100401Participant.DeleteParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
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

  /**
   * Fetch an instance of a participant
   *
   * @remarks
   * Fetch an instance of a participant
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchParticipant(
    request: Api20100401Participant.FetchParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of participants belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of participants belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listParticipant(
    request: Api20100401Participant.ListParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
        ],
        query: [
          { name: "Muted", value: request.muted, schema: s.optional(s.boolean()) },
          { name: "Hold", value: request.hold, schema: s.optional(s.boolean()) },
          { name: "Coaching", value: request.coaching, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listParticipantResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the properties of the participant
   *
   * @remarks
   * Update the properties of the participant
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateParticipant(
    request: Api20100401Participant.UpdateParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Muted", value: request.muted, schema: s.optional(s.boolean()) },
            { name: "Hold", value: request.hold, schema: s.optional(s.boolean()) },
            { name: "HoldUrl", value: request.holdUrl, schema: s.optional(s.string()) },
            {
              name: "HoldMethod",
              value: request.holdMethod,
              schema: s.optional(s.lazy(() => holdMethodSchema)),
            },
            { name: "AnnounceUrl", value: request.announceUrl, schema: s.optional(s.string()) },
            {
              name: "AnnounceMethod",
              value: request.announceMethod,
              schema: s.optional(s.lazy(() => announceMethod1Schema)),
            },
            { name: "WaitUrl", value: request.waitUrl, schema: s.optional(s.string()) },
            {
              name: "WaitMethod",
              value: request.waitMethod,
              schema: s.optional(s.lazy(() => waitMethodSchema)),
            },
            { name: "BeepOnExit", value: request.beepOnExit, schema: s.optional(s.boolean()) },
            {
              name: "EndConferenceOnExit",
              value: request.endConferenceOnExit,
              schema: s.optional(s.boolean()),
            },
            { name: "Coaching", value: request.coaching, schema: s.optional(s.boolean()) },
            { name: "CallSidToCoach", value: request.callSidToCoach, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Participant {
  export type CreateParticipantRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /** The SID of the participant's conference. */
    conferenceSid: string;
    /**
     * The phone number, Client identifier, or username portion of SIP address that made this call.
     * Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g.,
     * +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it
     * must be a Twilio number or a Verified [outgoing caller
     * id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to`
     * parameter is a phone number, `from` must also be a phone number. If `to` is sip address, this
     * value of `from` should be a username portion to be used to populate the P-Asserted-Identity
     * header that is passed to the SIP endpoint.
     */
    from: string;
    /**
     * The phone number, SIP address, Client, TwiML App identifier that received this call. Phone
     * numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g.,
     * +16175551212). SIP addresses are formatted as `sip:name@company.com`. Client identifiers are
     * formatted `client:name`. TwiML App identifiers are formatted `app:<APP_SID>`. [Custom
     * parameters](https://www.twilio.com/docs/voice/api/conference-participant-resource#custom-parameters)
     * may also be specified.
     */
    to: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` and `POST` and
     * defaults to `POST`.
     */
    statusCallbackMethod?: StatusCallbackMethod16;
    /**
     * The conference state changes that should generate a call to `status_callback`. Can be:
     * `initiated`, `ringing`, `answered`, and `completed`. Separate multiple values with a space.
     * The default value is `completed`.
     */
    statusCallbackEvent?: string[];
    /**
     * A label for this participant. If one is supplied, it may subsequently be used to fetch,
     * update or delete the participant.
     */
    label?: string;
    /**
     * The number of seconds that we should allow the phone to ring before assuming there is no
     * answer. Can be an integer between `5` and `600`, inclusive. The default value is `60`. We
     * always add a 5-second timeout buffer to outgoing calls, so value of 10 would result in an
     * actual timeout that was closer to 15 seconds.
     */
    timeout?: number;
    /**
     * Whether to record the participant and their conferences, including the time between
     * conferences. Can be `true` or `false` and the default is `false`.
     */
    record?: boolean;
    /**
     * Whether the agent is muted in the conference. Can be `true` or `false` and the default is
     * `false`.
     */
    muted?: boolean;
    /**
     * Whether to play a notification beep to the conference when the participant joins. Can be:
     * `true`, `false`, `onEnter`, or `onExit`. The default value is `true`.
     */
    beep?: string;
    /**
     * Whether to start the conference when the participant joins, if it has not already started.
     * Can be: `true` or `false` and the default is `true`. If `false` and the conference has not
     * started, the participant is muted and hears background music until another participant starts
     * the conference.
     */
    startConferenceOnEnter?: boolean;
    /**
     * Whether to end the conference when the participant leaves. Can be: `true` or `false` and
     * defaults to `false`.
     */
    endConferenceOnExit?: boolean;
    /**
     * The URL that Twilio calls using the `wait_method` before the conference has started. The URL
     * may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our
     * standard hold music. If you do not want anything to play while waiting for the conference to
     * start, specify an empty string by setting `wait_url` to `''`. For more details on the
     * allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML
     * instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl).
     */
    waitUrl?: string;
    /**
     * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is
     * `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
     */
    waitMethod?: WaitMethod;
    /**
     * Whether to allow an agent to hear the state of the outbound call, including ringing or
     * disconnect messages. Can be: `true` or `false` and defaults to `true`.
     */
    earlyMedia?: boolean;
    /**
     * The maximum number of participants in the conference. Can be a positive integer from `2` to
     * `250`. The default value is `250`.
     */
    maxParticipants?: number;
    /**
     * Whether to record the conference the participant is joining. Can be: `true`, `false`,
     * `record-from-start`, and `do-not-record`. The default value is `false`.
     */
    conferenceRecord?: string;
    /**
     * Whether to trim leading and trailing silence from the conference recording. Can be:
     * `trim-silence` or `do-not-trim` and defaults to `trim-silence`.
     */
    conferenceTrim?: string;
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
    conferenceStatusCallbackMethod?: ConferenceStatusCallbackMethod;
    /**
     * The conference state changes that should generate a call to `conference_status_callback`. Can
     * be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `modify`, `speaker`, and `announcement`.
     * Separate multiple values with a space. Defaults to `start end`.
     */
    conferenceStatusCallbackEvent?: string[];
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
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod2;
    /** The SIP username used for authentication. */
    sipAuthUsername?: string;
    /** The SIP password for authentication. */
    sipAuthPassword?: string;
    /**
     * The
     * [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls)
     * where we should mix the recorded audio. Can be:`us1`, `us2`, `ie1`, `de1`, `sg1`, `br1`,
     * `au1`, or `jp1`.
     */
    region?: string;
    /**
     * The URL we should call using the `conference_recording_status_callback_method` when the
     * conference recording is available.
     */
    conferenceRecordingStatusCallback?: string;
    /**
     * The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET`
     * or `POST` and defaults to `POST`.
     */
    conferenceRecordingStatusCallbackMethod?: ConferenceRecordingStatusCallbackMethod;
    /**
     * The recording state changes that should generate a call to `recording_status_callback`. Can
     * be: `started`, `in-progress`, `paused`, `resumed`, `stopped`, `completed`, `failed`, and
     * `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'`.
     */
    recordingStatusCallbackEvent?: string[];
    /**
     * The conference recording state changes that generate a call to
     * `conference_recording_status_callback`. Can be: `in-progress`, `completed`, `failed`, and
     * `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'`
     */
    conferenceRecordingStatusCallbackEvent?: string[];
    /**
     * Whether the participant is coaching another call. Can be: `true` or `false`. If not present,
     * defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach`
     * must be defined.
     */
    coaching?: boolean;
    /**
     * The SID of the participant who is being `coached`. The participant being coached is the only
     * participant who can hear the participant who is `coaching`.
     */
    callSidToCoach?: string;
    /**
     * Jitter buffer size for the connecting participant. Twilio will use this setting to apply
     * Jitter Buffer before participant's audio is mixed into the conference. Can be: `off`,
     * `small`, `medium`, and `large`. Default to `large`.
     */
    jitterBufferSize?: string;
    /**
     * The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is
     * only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta)
     */
    byoc?: string;
    /**
     * The phone number, Client identifier, or username portion of SIP address that made this call.
     * Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g.,
     * +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it
     * must be a Twilio number or a Verified [outgoing caller
     * id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to`
     * parameter is a phone number, `callerId` must also be a phone number. If `to` is sip address,
     * this value of `callerId` should be a username portion to be used to populate the From header
     * that is passed to the SIP endpoint.
     */
    callerId?: string;
    /**
     * The Reason for the outgoing call. Use it to specify the purpose of the call that is presented
     * on the called party's phone. (Branded Calls Beta)
     */
    callReason?: string;
    /**
     * The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default
     * is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the
     * audio that is sent from Twilio. `both` records the audio that is received and sent by Twilio.
     */
    recordingTrack?: string;
    /** The identifier of the configuration to be used when creating and processing the recording */
    recordingConfigurationId?: string;
    /**
     * The maximum duration of the call in seconds. Constraints depend on account and configuration.
     */
    timeLimit?: number;
    /**
     * Whether to detect if a human, answering machine, or fax has picked up the call. Can be:
     * `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as
     * soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a
     * message on an answering machine. For more information, see [Answering Machine
     * Detection](https://www.twilio.com/docs/voice/answering-machine-detection).
     */
    machineDetection?: string;
    /**
     * The number of seconds that we should attempt to detect an answering machine before timing out
     * and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30
     * seconds.
     */
    machineDetectionTimeout?: number;
    /**
     * The number of milliseconds that is used as the measuring stick for the length of the speech
     * activity, where durations lower than this value will be interpreted as a human and longer
     * than this value as a machine. Possible Values: 1000-6000. Default: 2400.
     */
    machineDetectionSpeechThreshold?: number;
    /**
     * The number of milliseconds of silence after speech activity at which point the speech
     * activity is considered complete. Possible Values: 500-5000. Default: 1200.
     */
    machineDetectionSpeechEndThreshold?: number;
    /**
     * The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will
     * be returned. Possible Values: 2000-10000. Default: 5000.
     */
    machineDetectionSilenceTimeout?: number;
    /**
     * The URL that we should call using the `amd_status_callback_method` to notify customer
     * application whether the call was answered by human, machine or fax.
     */
    amdStatusCallback?: string;
    /**
     * The HTTP method we should use when calling the `amd_status_callback` URL. Can be: `GET` or
     * `POST` and the default is `POST`.
     */
    amdStatusCallbackMethod?: AmdStatusCallbackMethod;
    /**
     * Whether to trim any leading and trailing silence from the participant recording. Can be:
     * `trim-silence` or `do-not-trim` and the default is `trim-silence`.
     */
    trim?: string;
    /**
     * A token string needed to invoke a forwarded call. A call_token is generated when an incoming
     * call is received on a Twilio number. Pass an incoming call's call_token value to a forwarded
     * call via the call_token parameter when creating a new call. A forwarded call should bear the
     * same CallerID of the original incoming call.
     */
    callToken?: string;
    /** The URL that we should use to deliver `push call notification`. */
    clientNotificationUrl?: string;
    /**
     * The name that populates the display name in the From header. Must be between 2 and 255
     * characters. Only applicable for calls to sip address.
     */
    callerDisplayName?: string;
  };

  export type DeleteParticipantRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Participant resources to delete.
     */
    accountSid: string;
    /** The SID of the conference with the participants to delete. */
    conferenceSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the
     * participant to delete. Non URL safe characters in a label must be percent encoded, for
     * example, a space character is represented as %20.
     */
    callSid: string;
  };

  export type FetchParticipantRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Participant resource to fetch.
     */
    accountSid: string;
    /** The SID of the conference with the participant to fetch. */
    conferenceSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the
     * participant to fetch. Non URL safe characters in a label must be percent encoded, for
     * example, a space character is represented as %20.
     */
    callSid: string;
  };

  export type ListParticipantRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Participant resources to read.
     */
    accountSid: string;
    /** The SID of the conference with the participants to read. */
    conferenceSid: string;
    /** Whether to return only participants that are muted. Can be: `true` or `false`. */
    muted?: boolean;
    /** Whether to return only participants that are on hold. Can be: `true` or `false`. */
    hold?: boolean;
    /**
     * Whether to return only participants who are coaching another call. Can be: `true` or `false`.
     */
    coaching?: boolean;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateParticipantRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Participant resources to update.
     */
    accountSid: string;
    /** The SID of the conference with the participant to update. */
    conferenceSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the
     * participant to update. Non URL safe characters in a label must be percent encoded, for
     * example, a space character is represented as %20.
     */
    callSid: string;
    /**
     * Whether the participant should be muted. Can be `true` or `false`. `true` will mute the
     * participant, and `false` will un-mute them. Anything value other than `true` or `false` is
     * interpreted as `false`.
     */
    muted?: boolean;
    /**
     * Whether the participant should be on hold. Can be: `true` or `false`. `true` puts the
     * participant on hold, and `false` lets them rejoin the conference.
     */
    hold?: boolean;
    /**
     * The URL we call using the `hold_method` for music that plays when the participant is on hold.
     * The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`,
     * `<Say>`, `<Pause>`, or `<Redirect>` verbs.
     */
    holdUrl?: string;
    /**
     * The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is
     * `GET`.
     */
    holdMethod?: HoldMethod;
    /**
     * The URL we call using the `announce_method` for an announcement to the participant. The URL
     * may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`,
     * `<Pause>`, or `<Redirect>` verbs.
     */
    announceUrl?: string;
    /**
     * The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to
     * `POST`.
     */
    announceMethod?: AnnounceMethod1;
    /**
     * The URL that Twilio calls using the `wait_method` before the conference has started. The URL
     * may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our
     * standard hold music. If you do not want anything to play while waiting for the conference to
     * start, specify an empty string by setting `wait_url` to `''`. For more details on the
     * allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML
     * instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl).
     */
    waitUrl?: string;
    /**
     * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is
     * `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
     */
    waitMethod?: WaitMethod;
    /**
     * Whether to play a notification beep to the conference when the participant exits. Can be:
     * `true` or `false`.
     */
    beepOnExit?: boolean;
    /**
     * Whether to end the conference when the participant leaves. Can be: `true` or `false` and
     * defaults to `false`.
     */
    endConferenceOnExit?: boolean;
    /**
     * Whether the participant is coaching another call. Can be: `true` or `false`. If not present,
     * defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach`
     * must be defined.
     */
    coaching?: boolean;
    /**
     * The SID of the participant who is being `coached`. The participant being coached is the only
     * participant who can hear the participant who is `coaching`.
     */
    callSidToCoach?: string;
  };
}
