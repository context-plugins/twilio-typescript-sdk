import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV2010AccountCallSchema, type ApiV2010AccountCall } from "../models/api-v2010-account-call.js";
import {
  asyncAmdStatusCallbackMethodSchema,
  type AsyncAmdStatusCallbackMethod,
} from "../models/async-amd-status-callback-method.js";
import { callEnumStatusSchema, type CallEnumStatus } from "../models/call-enum-status.js";
import { callEnumUpdateStatusSchema, type CallEnumUpdateStatus } from "../models/call-enum-update-status.js";
import { fallbackMethodSchema, type FallbackMethod } from "../models/fallback-method.js";
import { listCallResponseSchema, type ListCallResponse } from "../models/list-call-response.js";
import { methodSchema, type Method } from "../models/method.js";
import { method1Schema, type Method1 } from "../models/method1.js";
import {
  recordingStatusCallbackMethodSchema,
  type RecordingStatusCallbackMethod,
} from "../models/recording-status-callback-method.js";
import {
  statusCallbackMethod8Schema,
  type StatusCallbackMethod8,
} from "../models/status-callback-method8.js";
import {
  statusCallbackMethod9Schema,
  type StatusCallbackMethod9,
} from "../models/status-callback-method9.js";
import type { Servers } from "../servers.js";

export class Api20100401Call {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
   *
   * @remarks
   * Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCall(
    request: Api20100401Call.CreateCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "From", value: request.from, schema: s.string() },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => methodSchema)) },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => fallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackEvent",
              value: request.statusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod8Schema)),
            },
            { name: "SendDigits", value: request.sendDigits, schema: s.optional(s.string()) },
            { name: "Timeout", value: request.timeout, schema: s.optional(s.int()) },
            { name: "Record", value: request.record, schema: s.optional(s.boolean()) },
            { name: "RecordingChannels", value: request.recordingChannels, schema: s.optional(s.string()) },
            {
              name: "RecordingStatusCallback",
              value: request.recordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "RecordingStatusCallbackMethod",
              value: request.recordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => recordingStatusCallbackMethodSchema)),
            },
            {
              name: "RecordingConfigurationId",
              value: request.recordingConfigurationId,
              schema: s.optional(s.string()),
            },
            { name: "SipAuthUsername", value: request.sipAuthUsername, schema: s.optional(s.string()) },
            { name: "SipAuthPassword", value: request.sipAuthPassword, schema: s.optional(s.string()) },
            { name: "MachineDetection", value: request.machineDetection, schema: s.optional(s.string()) },
            {
              name: "MachineDetectionTimeout",
              value: request.machineDetectionTimeout,
              schema: s.optional(s.int()),
            },
            {
              name: "RecordingStatusCallbackEvent",
              value: request.recordingStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.string()) },
            { name: "CallerId", value: request.callerId, schema: s.optional(s.string()) },
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
            { name: "AsyncAmd", value: request.asyncAmd, schema: s.optional(s.string()) },
            {
              name: "AsyncAmdStatusCallback",
              value: request.asyncAmdStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "AsyncAmdStatusCallbackMethod",
              value: request.asyncAmdStatusCallbackMethod,
              schema: s.optional(s.lazy(() => asyncAmdStatusCallbackMethodSchema)),
            },
            { name: "Byoc", value: request.byoc, schema: s.optional(s.string()) },
            { name: "CallReason", value: request.callReason, schema: s.optional(s.string()) },
            { name: "CallToken", value: request.callToken, schema: s.optional(s.string()) },
            { name: "RecordingTrack", value: request.recordingTrack, schema: s.optional(s.string()) },
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.int()) },
            {
              name: "ClientNotificationUrl",
              value: request.clientNotificationUrl,
              schema: s.optional(s.string()),
            },
            { name: "Url", value: request.url, schema: s.optional(s.string()) },
            { name: "Twiml", value: request.twiml, schema: s.optional(s.string()) },
            { name: "ApplicationSid", value: request.applicationSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Call record from your account. Once the record is deleted, it will no longer appear in
   * the API and Account Portal logs.
   *
   * @remarks
   * Delete a Call record from your account. Once the record is deleted, it will no longer appear in
   * the API and Account Portal logs.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCall(
    request: Api20100401Call.DeleteCallRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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

  /**
   * Fetch the call specified by the provided Call SID
   *
   * @remarks
   * Fetch the call specified by the provided Call SID
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCall(
    request: Api20100401Call.FetchCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieves a collection of calls made to and from your account
   *
   * @remarks
   * Retrieves a collection of calls made to and from your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCall(
    request: Api20100401Call.ListCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "To", value: request.to, schema: s.optional(s.string()) },
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          { name: "ParentCallSid", value: request.parentCallSid, schema: s.optional(s.string()) },
          { name: "Status", value: request.status, schema: s.optional(s.lazy(() => callEnumStatusSchema)) },
          { name: "StartTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "StartTime<", value: request.startTimeQuery, schema: s.optional(s.dateTime()) },
          { name: "StartTime>", value: request.startTimeQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "EndTime", value: request.endTime, schema: s.optional(s.dateTime()) },
          { name: "EndTime<", value: request.endTimeQuery, schema: s.optional(s.dateTime()) },
          { name: "EndTime>", value: request.endTimeQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Initiates a call redirect or terminates a call
   *
   * @remarks
   * Initiates a call redirect or terminates a call
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCall(
    request: Api20100401Call.UpdateCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Url", value: request.url, schema: s.optional(s.string()) },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => method1Schema)) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => callEnumUpdateStatusSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => fallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod9Schema)),
            },
            { name: "Twiml", value: request.twiml, schema: s.optional(s.string()) },
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Call {
  export type CreateCallRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /** The phone number, SIP address, or client identifier to call. */
    to: string;
    /**
     * The phone number or client identifier to use as the caller id. If using a phone number, it
     * must be a Twilio number or a Verified [outgoing caller
     * id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to`
     * parameter is a phone number, `From` must also be a phone number.
     */
    from: string;
    /**
     * The HTTP method we should use when calling the `url` parameter's value. Can be: `GET` or
     * `POST` and the default is `POST`. If an `application_sid` parameter is present, this
     * parameter is ignored.
     */
    method?: Method;
    /**
     * The URL that we call using the `fallback_method` if an error occurs when requesting or
     * executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is
     * ignored.
     */
    fallbackUrl?: string;
    /**
     * The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and
     * the default is `POST`. If an `application_sid` parameter is present, this parameter is
     * ignored.
     */
    fallbackMethod?: FallbackMethod;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application. If no `status_callback_event` is specified, we will send the `completed` status.
     * If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a
     * valid hostname (underscores are not permitted).
     */
    statusCallback?: string;
    /**
     * The call progress events that we will send to the `status_callback` URL. Can be: `initiated`,
     * `ringing`, `answered`, and `completed`. If no event is specified, we send the `completed`
     * status. If you want to receive multiple events, specify each one in a separate
     * `status_callback_event` parameter. See the code sample for [monitoring call
     * progress](https://www.twilio.com/docs/voice/api/call-resource?code-sample=code-create-a-call-resource-and-specify-a-statuscallbackevent&code-sdk-version=json).
     * If an `application_sid` is present, this parameter is ignored.
     */
    statusCallbackEvent?: string[];
    /**
     * The HTTP method we should use when calling the `status_callback` URL. Can be: `GET` or `POST`
     * and the default is `POST`. If an `application_sid` parameter is present, this parameter is
     * ignored.
     */
    statusCallbackMethod?: StatusCallbackMethod8;
    /**
     * The string of keys to dial after connecting to the number, with a maximum length of 32
     * digits. Valid digits in the string include any digit (`0`-`9`), '`A`', '`B`', '`C`', '`D`',
     * '`#`', and '`*`'. You can also use '`w`' to insert a half-second pause and '`W`' to insert a
     * one-second pause. For example, to pause for one second after connecting and then dial
     * extension 1234 followed by the # key, set this parameter to `W1234#`. Be sure to URL-encode
     * this string because the '`#`' character has special meaning in a URL. If both `SendDigits`
     * and `MachineDetection` parameters are provided, then `MachineDetection` will be ignored.
     */
    sendDigits?: string;
    /**
     * The integer number of seconds that we should allow the phone to ring before assuming there is
     * no answer. The default is `60` seconds and the maximum is `600` seconds. For some call flows,
     * we will add a 5-second buffer to the timeout value you provide. For this reason, a timeout
     * value of 10 seconds could result in an actual timeout closer to 15 seconds. You can set this
     * to a short time, such as `15` seconds, to hang up before reaching an answering machine or
     * voicemail.
     */
    timeout?: number;
    /**
     * Whether to record the call. Can be `true` to record the phone call, or `false` to not. The
     * default is `false`. The `recording_url` is sent to the `status_callback` URL.
     */
    record?: boolean;
    /**
     * The number of channels in the final recording. Can be: `mono` or `dual`. The default is
     * `mono`. `mono` records both legs of the call in a single channel of the recording file.
     * `dual` records each leg to a separate channel of the recording file. The first channel of a
     * dual-channel recording contains the parent call and the second channel contains the child
     * call.
     */
    recordingChannels?: string;
    /** The URL that we call when the recording is available to be accessed. */
    recordingStatusCallback?: string;
    /**
     * The HTTP method we should use when calling the `recording_status_callback` URL. Can be: `GET`
     * or `POST` and the default is `POST`.
     */
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod;
    /** The identifier of the configuration to be used when creating and processing the recording */
    recordingConfigurationId?: string;
    /** The username used to authenticate the caller making a SIP call. */
    sipAuthUsername?: string;
    /** The password required to authenticate the user account specified in `sip_auth_username`. */
    sipAuthPassword?: string;
    /**
     * Whether to detect if a human, answering machine, or fax has picked up the call. Can be:
     * `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as
     * soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a
     * message on an answering machine. If `send_digits` is provided, this parameter is ignored. For
     * more information, see [Answering Machine
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
     * The recording status events that will trigger calls to the URL specified in
     * `recording_status_callback`. Can be: `in-progress`, `completed` and `absent`. Defaults to
     * `completed`. Separate multiple values with a space.
     */
    recordingStatusCallbackEvent?: string[];
    /**
     * Whether to trim any leading and trailing silence from the recording. Can be: `trim-silence`
     * or `do-not-trim` and the default is `trim-silence`.
     */
    trim?: string;
    /**
     * The phone number, SIP address, or Client identifier that made this call. Phone numbers are in
     * [E.164 format](https://wwnw.twilio.com/docs/glossary/what-e164) (e.g., +16175551212). SIP
     * addresses are formatted as `name@company.com`.
     */
    callerId?: string;
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
     * Select whether to perform answering machine detection in the background. Default, blocks the
     * execution of the call until Answering Machine Detection is completed. Can be: `true` or
     * `false`.
     */
    asyncAmd?: string;
    /**
     * The URL that we should call using the `async_amd_status_callback_method` to notify customer
     * application whether the call was answered by human, machine or fax.
     */
    asyncAmdStatusCallback?: string;
    /**
     * The HTTP method we should use when calling the `async_amd_status_callback` URL. Can be: `GET`
     * or `POST` and the default is `POST`.
     */
    asyncAmdStatusCallbackMethod?: AsyncAmdStatusCallbackMethod;
    /**
     * The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is
     * only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta)
     */
    byoc?: string;
    /**
     * The Reason for the outgoing call. Use it to specify the purpose of the call that is presented
     * on the called party's phone. (Branded Calls Beta)
     */
    callReason?: string;
    /**
     * A token string needed to invoke a forwarded call. A call_token is generated when an incoming
     * call is received on a Twilio number. Pass an incoming call's call_token value to a forwarded
     * call via the call_token parameter when creating a new call. A forwarded call should bear the
     * same CallerID of the original incoming call.
     */
    callToken?: string;
    /**
     * The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default
     * is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the
     * audio that is generated from Twilio. `both` records the audio that is received and generated
     * by Twilio.
     */
    recordingTrack?: string;
    /**
     * The maximum duration of the call in seconds. Constraints depend on account and configuration.
     */
    timeLimit?: number;
    /** The URL that we should use to deliver `push call notification`. */
    clientNotificationUrl?: string;
    /**
     * The absolute URL that returns the TwiML instructions for the call. We will call this URL
     * using the `method` when the call connects. For more information, see the [Url
     * Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in
     * [Making Calls](https://www.twilio.com/docs/voice/make-calls).
     */
    url?: string;
    /**
     * TwiML instructions for the call Twilio will use without fetching Twiml from url parameter. If
     * both `twiml` and `url` are provided then `twiml` parameter will be ignored. Max 4000
     * characters.
     */
    twiml?: string;
    /**
     * The SID of the Application resource that will handle the call, if the call will be handled by
     * an application.
     */
    applicationSid?: string;
  };

  export type DeleteCallRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * resource(s) to delete.
     */
    accountSid: string;
    /** The Twilio-provided Call SID that uniquely identifies the Call resource to delete */
    sid: string;
  };

  export type FetchCallRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * resource(s) to fetch.
     */
    accountSid: string;
    /** The SID of the Call resource to fetch. */
    sid: string;
  };

  export type ListCallRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * resource(s) to read.
     */
    accountSid: string;
    /** Only show calls made to this phone number, SIP address, Client identifier or SIM SID. */
    to?: string;
    /** Only include calls from this phone number, SIP address, Client identifier or SIM SID. */
    from?: string;
    /** Only include calls spawned by calls with this SID. */
    parentCallSid?: string;
    /**
     * The status of the calls to include. Can be: `queued`, `ringing`, `in-progress`, `canceled`,
     * `completed`, `failed`, `busy`, or `no-answer`.
     */
    status?: CallEnumStatus;
    /**
     * Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in UTC, for
     * example: `2009-07-06`, to read only calls that started on this date.
     */
    startTime?: Date;
    /**
     * Only include calls that started before this date. Specify a date as `YYYY-MM-DD` in UTC, for
     * example: `2009-07-06`, to read only calls that started before this date.
     */
    startTimeQuery?: Date;
    /**
     * Only include calls that started on or after this date. Specify a date as `YYYY-MM-DD` in UTC,
     * for example: `2009-07-06`, to read only calls that started on or after this date.
     */
    startTimeQueryQuery?: Date;
    /**
     * Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in UTC, for
     * example: `2009-07-06`, to read only calls that ended on this date.
     */
    endTime?: Date;
    /**
     * Only include calls that ended before this date. Specify a date as `YYYY-MM-DD` in UTC, for
     * example: `2009-07-06`, to read only calls that ended before this date.
     */
    endTimeQuery?: Date;
    /**
     * Only include calls that ended on or after this date. Specify a date as `YYYY-MM-DD` in UTC,
     * for example: `2009-07-06`, to read only calls that ended on or after this date.
     */
    endTimeQueryQuery?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateCallRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * resource(s) to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Call resource to update */
    sid: string;
    /**
     * The absolute URL that returns the TwiML instructions for the call. We will call this URL
     * using the `method` when the call connects. For more information, see the [Url
     * Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in
     * [Making Calls](https://www.twilio.com/docs/voice/make-calls).
     */
    url?: string;
    /**
     * The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default
     * is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
     */
    method?: Method1;
    status?: CallEnumUpdateStatus;
    /**
     * The URL that we call using the `fallback_method` if an error occurs when requesting or
     * executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is
     * ignored.
     */
    fallbackUrl?: string;
    /**
     * The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and
     * the default is `POST`. If an `application_sid` parameter is present, this parameter is
     * ignored.
     */
    fallbackMethod?: FallbackMethod;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your
     * application. If no `status_callback_event` is specified, we will send the `completed` status.
     * If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a
     * valid hostname (underscores are not permitted).
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or
     * `POST` and the default is `POST`. If an `application_sid` parameter is present, this
     * parameter is ignored.
     */
    statusCallbackMethod?: StatusCallbackMethod9;
    /**
     * TwiML instructions for the call Twilio will use without fetching Twiml from url. Twiml and
     * url parameters are mutually exclusive
     */
    twiml?: string;
    /**
     * The maximum duration of the call in seconds. Constraints depend on account and configuration.
     */
    timeLimit?: number;
  };
}
