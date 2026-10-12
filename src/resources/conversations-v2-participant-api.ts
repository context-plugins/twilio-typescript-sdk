import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  conversationsV2ParticipantSchema,
  type ConversationsV2Participant,
} from "../models/conversations-v2-participant.js";
import {
  v2ConversationsParticipantsRequestSchema,
  type V2ConversationsParticipantsRequest,
} from "../models/v2-conversations-participants-request.js";
import {
  v2ConversationsParticipantsRequest1Schema,
  type V2ConversationsParticipantsRequest1,
} from "../models/v2-conversations-participants-request1.js";
import {
  v2ConversationsParticipantsResponseSchema,
  type V2ConversationsParticipantsResponse,
} from "../models/v2-conversations-participants-response.js";
import type { Servers } from "../servers.js";

/**
 * A participant represents an actor involved in a conversation. Conversation Orchestrator assigns
 * each participant a type that identifies their role, such as customer, human agent, or AI agent.
 */
export class ConversationsV2ParticipantApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Participant
   *
   * @remarks
   * Create a Participant.
   *
   * @returns Created
   *
   * @throws {@link ConversationsV2ParticipantApi.CreateParticipantInConversationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createParticipantInConversation(
    request: ConversationsV2ParticipantApi.CreateParticipantInConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConversationsV2Participant,
    ConversationsV2ParticipantApi.CreateParticipantInConversationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsParticipantsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2ParticipantSchema },
        errorFactory: ConversationsV2ParticipantApi.CreateParticipantInConversationError,
      },
      options,
    );
  }

  /**
   * Fetch Participant
   *
   * @remarks
   * Retrieve a Participant.
   *
   * @returns OK
   *
   * @throws {@link ConversationsV2ParticipantApi.FetchParticipant2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchParticipant2(
    request: ConversationsV2ParticipantApi.FetchParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Participant, ConversationsV2ParticipantApi.FetchParticipant2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2ParticipantSchema },
        errorFactory: ConversationsV2ParticipantApi.FetchParticipant2Error,
      },
      options,
    );
  }

  /**
   * List Participants
   *
   * @remarks
   * Retrieve a list of Participants in a Conversation.
   *
   * @returns OK
   *
   * @throws {@link ConversationsV2ParticipantApi.ListParticipantByConversationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listParticipantByConversation(
    request: ConversationsV2ParticipantApi.ListParticipantByConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V2ConversationsParticipantsResponse,
    ConversationsV2ParticipantApi.ListParticipantByConversationError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ConversationsParticipantsResponseSchema },
        errorFactory: ConversationsV2ParticipantApi.ListParticipantByConversationError,
      },
      options,
    );
  }

  /**
   * Update a Participant
   *
   * @remarks
   * Update an existing Participant
   *
   * @returns OK
   *
   * @throws {@link ConversationsV2ParticipantApi.UpdateParticipantInConversationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateParticipantInConversation(
    request: ConversationsV2ParticipantApi.UpdateParticipantInConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConversationsV2Participant,
    ConversationsV2ParticipantApi.UpdateParticipantInConversationError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsParticipantsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2ParticipantSchema },
        errorFactory: ConversationsV2ParticipantApi.UpdateParticipantInConversationError,
      },
      options,
    );
  }
}

export namespace ConversationsV2ParticipantApi {
  export type CreateParticipantInConversationRequest = {
    conversationSid: string;
    body?: V2ConversationsParticipantsRequest;
  };

  export class CreateParticipantInConversationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error12",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error13",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error14",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error15",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error16",
          AccountsCallsRecordingsSidJson201041408Error1
        >
    >;

    static readonly errors: ErrorDecoders<CreateParticipantInConversationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 409,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error16",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchParticipant2Request = {
    conversationSid: string;
    sid: string;
  };

  export class FetchParticipant2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error12",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error13",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error14",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error15",
          AccountsCallsRecordingsSidJson201041408Error1
        >
    >;

    static readonly errors: ErrorDecoders<FetchParticipant2Error> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type ListParticipantByConversationRequest = {
    conversationSid: string;
    /** Maximum number of items to return @default 50 */
    pageSize?: number;
    /** Page token for pagination */
    pageToken?: string;
  };

  export class ListParticipantByConversationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error12",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error13",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error14",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error15",
          AccountsCallsRecordingsSidJson201041408Error1
        >
    >;

    static readonly errors: ErrorDecoders<ListParticipantByConversationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type UpdateParticipantInConversationRequest = {
    conversationSid: string;
    sid: string;
    body?: V2ConversationsParticipantsRequest1;
  };

  export class UpdateParticipantInConversationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error12",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error13",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error14",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error15",
          AccountsCallsRecordingsSidJson201041408Error1
        >
    >;

    static readonly errors: ErrorDecoders<UpdateParticipantInConversationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
