import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountCallRealtimeTranscriptionSchema,
  type ApiV2010AccountCallRealtimeTranscription,
} from "../models/api-v2010-account-call-realtime-transcription.js";
import {
  realtimeTranscriptionEnumTrackSchema,
  type RealtimeTranscriptionEnumTrack,
} from "../models/realtime-transcription-enum-track.js";
import {
  realtimeTranscriptionEnumUpdateStatusSchema,
  type RealtimeTranscriptionEnumUpdateStatus,
} from "../models/realtime-transcription-enum-update-status.js";
import {
  statusCallbackMethod17Schema,
  type StatusCallbackMethod17,
} from "../models/status-callback-method17.js";
import type { Servers } from "../servers.js";

export class Api20100401CallTranscription {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createRealtimeTranscription(
    request: Api20100401CallTranscription.CreateRealtimeTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallRealtimeTranscription, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Name", value: request.name, schema: s.optional(s.string()) },
            {
              name: "Track",
              value: request.track,
              schema: s.optional(s.lazy(() => realtimeTranscriptionEnumTrackSchema)),
            },
            { name: "StatusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod17Schema)),
            },
            { name: "InboundTrackLabel", value: request.inboundTrackLabel, schema: s.optional(s.string()) },
            { name: "OutboundTrackLabel", value: request.outboundTrackLabel, schema: s.optional(s.string()) },
            { name: "PartialResults", value: request.partialResults, schema: s.optional(s.boolean()) },
            { name: "LanguageCode", value: request.languageCode, schema: s.optional(s.string()) },
            {
              name: "TranscriptionEngine",
              value: request.transcriptionEngine,
              schema: s.optional(s.string()),
            },
            { name: "ProfanityFilter", value: request.profanityFilter, schema: s.optional(s.boolean()) },
            { name: "SpeechModel", value: request.speechModel, schema: s.optional(s.string()) },
            { name: "Hints", value: request.hints, schema: s.optional(s.string()) },
            {
              name: "EnableAutomaticPunctuation",
              value: request.enableAutomaticPunctuation,
              schema: s.optional(s.boolean()),
            },
            {
              name: "IntelligenceService",
              value: request.intelligenceService,
              schema: s.optional(s.string()),
            },
            {
              name: "ConversationConfiguration",
              value: request.conversationConfiguration,
              schema: s.optional(s.string()),
            },
            { name: "ConversationId", value: request.conversationId, schema: s.optional(s.string()) },
            {
              name: "TranscriptionConfigurationId",
              value: request.transcriptionConfigurationId,
              schema: s.optional(s.string()),
            },
            {
              name: "EnableProviderData",
              value: request.enableProviderData,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallRealtimeTranscriptionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRealtimeTranscription(
    request: Api20100401CallTranscription.UpdateRealtimeTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallRealtimeTranscription, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: realtimeTranscriptionEnumUpdateStatusSchema },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallRealtimeTranscriptionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401CallTranscription {
  export type CreateRealtimeTranscriptionRequest = {
    accountSid: string;
    callSid: string;
    name?: string;
    track?: RealtimeTranscriptionEnumTrack;
    statusCallbackUrl?: string;
    statusCallbackMethod?: StatusCallbackMethod17;
    inboundTrackLabel?: string;
    outboundTrackLabel?: string;
    partialResults?: boolean;
    languageCode?: string;
    transcriptionEngine?: string;
    profanityFilter?: boolean;
    speechModel?: string;
    hints?: string;
    enableAutomaticPunctuation?: boolean;
    intelligenceService?: string;
    conversationConfiguration?: string;
    conversationId?: string;
    transcriptionConfigurationId?: string;
    enableProviderData?: boolean;
  };

  export type UpdateRealtimeTranscriptionRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
    status: RealtimeTranscriptionEnumUpdateStatus;
  };
}
