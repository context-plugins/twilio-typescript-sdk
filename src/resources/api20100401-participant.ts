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

  createParticipant(
    request: Api20100401Participant.CreateParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConferenceParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
        ],
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
              schema: s.optional(s.lazy(() => waitMethodSchema)),
            },
            { name: "EarlyMedia", value: request.earlyMedia, schema: s.optional(s.boolean()) },
            { name: "MaxParticipants", value: request.maxParticipants, schema: s.optional(s.number()) },
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
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.number()) },
            { name: "MachineDetection", value: request.machineDetection, schema: s.optional(s.string()) },
            {
              name: "MachineDetectionTimeout",
              value: request.machineDetectionTimeout,
              schema: s.optional(s.number()),
            },
            {
              name: "MachineDetectionSpeechThreshold",
              value: request.machineDetectionSpeechThreshold,
              schema: s.optional(s.number()),
            },
            {
              name: "MachineDetectionSpeechEndThreshold",
              value: request.machineDetectionSpeechEndThreshold,
              schema: s.optional(s.number()),
            },
            {
              name: "MachineDetectionSilenceTimeout",
              value: request.machineDetectionSilenceTimeout,
              schema: s.optional(s.number()),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteParticipant(
    request: Api20100401Participant.DeleteParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchParticipant(
    request: Api20100401Participant.FetchParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConferenceParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listParticipant(
    request: Api20100401Participant.ListParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateParticipant(
    request: Api20100401Participant.UpdateParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConferenceParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Participant {
  export type CreateParticipantRequest = {
    accountSid: string;
    conferenceSid: string;
    from: string;
    to: string;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod16;
    statusCallbackEvent?: string[];
    label?: string;
    timeout?: number;
    record?: boolean;
    muted?: boolean;
    beep?: string;
    startConferenceOnEnter?: boolean;
    endConferenceOnExit?: boolean;
    waitUrl?: string;
    waitMethod?: WaitMethod;
    earlyMedia?: boolean;
    maxParticipants?: number;
    conferenceRecord?: string;
    conferenceTrim?: string;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackMethod?: ConferenceStatusCallbackMethod;
    conferenceStatusCallbackEvent?: string[];
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod2;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
    region?: string;
    conferenceRecordingStatusCallback?: string;
    conferenceRecordingStatusCallbackMethod?: ConferenceRecordingStatusCallbackMethod;
    recordingStatusCallbackEvent?: string[];
    conferenceRecordingStatusCallbackEvent?: string[];
    coaching?: boolean;
    callSidToCoach?: string;
    jitterBufferSize?: string;
    byoc?: string;
    callerId?: string;
    callReason?: string;
    recordingTrack?: string;
    recordingConfigurationId?: string;
    timeLimit?: number;
    machineDetection?: string;
    machineDetectionTimeout?: number;
    machineDetectionSpeechThreshold?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSilenceTimeout?: number;
    amdStatusCallback?: string;
    amdStatusCallbackMethod?: AmdStatusCallbackMethod;
    trim?: string;
    callToken?: string;
    clientNotificationUrl?: string;
    callerDisplayName?: string;
  };

  export type DeleteParticipantRequest = {
    accountSid: string;
    conferenceSid: string;
    callSid: string;
  };

  export type FetchParticipantRequest = {
    accountSid: string;
    conferenceSid: string;
    callSid: string;
  };

  export type ListParticipantRequest = {
    accountSid: string;
    conferenceSid: string;
    muted?: boolean;
    hold?: boolean;
    coaching?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateParticipantRequest = {
    accountSid: string;
    conferenceSid: string;
    callSid: string;
    muted?: boolean;
    hold?: boolean;
    holdUrl?: string;
    holdMethod?: HoldMethod;
    announceUrl?: string;
    announceMethod?: AnnounceMethod1;
    waitUrl?: string;
    waitMethod?: WaitMethod;
    beepOnExit?: boolean;
    endConferenceOnExit?: boolean;
    coaching?: boolean;
    callSidToCoach?: string;
  };
}
