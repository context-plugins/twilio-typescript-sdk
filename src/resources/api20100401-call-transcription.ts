import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a Transcription
   *
   * @remarks
   * Create a Transcription
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRealtimeTranscription(
    request: Api20100401CallTranscription.CreateRealtimeTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Stop a Transcription using either the SID of the Transcription resource or the `name` used when
   * creating the resource
   *
   * @remarks
   * Stop a Transcription using either the SID of the Transcription resource or the `name` used when
   * creating the resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRealtimeTranscription(
    request: Api20100401CallTranscription.UpdateRealtimeTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallRealtimeTranscription, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: realtimeTranscriptionEnumUpdateStatusSchema },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallRealtimeTranscriptionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401CallTranscription {
  export type CreateRealtimeTranscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
     * Transcription resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription
     * resource is associated with.
     */
    callSid: string;
    /**
     * The user-specified name of this Transcription, if one was given when the Transcription was
     * created. This may be used to stop the Transcription.
     */
    name?: string;
    /** One of `inbound_track`, `outbound_track`, `both_tracks`. */
    track?: RealtimeTranscriptionEnumTrack;
    /** Absolute URL of the status callback. */
    statusCallbackUrl?: string;
    /** The http method for the status_callback (one of GET, POST). */
    statusCallbackMethod?: StatusCallbackMethod17;
    /** Friendly name given to the Inbound Track */
    inboundTrackLabel?: string;
    /** Friendly name given to the Outbound Track */
    outboundTrackLabel?: string;
    /** Indicates if partial results are going to be sent to the customer */
    partialResults?: boolean;
    /**
     * Language code used by the transcription engine, specified in
     * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) format
     */
    languageCode?: string;
    /** Definition of the transcription engine to be used, among those supported by Twilio */
    transcriptionEngine?: string;
    /**
     * indicates if the server will attempt to filter out profanities, replacing all but the initial
     * character in each filtered word with asterisks
     */
    profanityFilter?: boolean;
    /** Recognition model used by the transcription engine, among those supported by the provider */
    speechModel?: string;
    /**
     * A Phrase contains words and phrase "hints" so that the speech recognition engine is more
     * likely to recognize them.
     */
    hints?: string;
    /** The provider will add punctuation to recognition result */
    enableAutomaticPunctuation?: boolean;
    /**
     * The SID or unique name of the [Intelligence
     * Service](https://www.twilio.com/docs/conversational-intelligence/api/service-resource) for
     * persisting transcripts and running post-call Language Operators
     */
    intelligenceService?: string;
    /**
     * The ID of the Conversations Configuration for customizing conversation behavior in
     * Intelligence Service
     */
    conversationConfiguration?: string;
    /**
     * The ID of the Conversation for associating this Transcription with an existing Conversation
     * in Intelligence Service
     */
    conversationId?: string;
    /**
     * The ID of the RealTimeTranscription Configuration for configuring all the non-default
     * behaviors in one go.
     */
    transcriptionConfigurationId?: string;
    /** Whether the callback includes raw provider data. */
    enableProviderData?: boolean;
  };

  export type UpdateRealtimeTranscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
     * Transcription resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription
     * resource is associated with.
     */
    callSid: string;
    /** The SID of the Transcription resource, or the `name` used when creating the resource */
    sid: string;
    status: RealtimeTranscriptionEnumUpdateStatus;
  };
}
