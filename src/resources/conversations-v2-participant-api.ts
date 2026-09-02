import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class ConversationsV2ParticipantApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

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
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
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

  fetchParticipant2(
    request: ConversationsV2ParticipantApi.FetchParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Participant, ConversationsV2ParticipantApi.FetchParticipant2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2ParticipantSchema },
        errorFactory: ConversationsV2ParticipantApi.FetchParticipant2Error,
      },
      options,
    );
  }

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
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ConversationsParticipantsResponseSchema },
        errorFactory: ConversationsV2ParticipantApi.ListParticipantByConversationError,
      },
      options,
    );
  }

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
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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

  export class CreateParticipantInConversationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
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
  > {
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

  export class FetchParticipant2Error extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
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
  > {
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
    pageSize?: number;
    pageToken?: string;
  };

  export class ListParticipantByConversationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
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
  > {
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

  export class UpdateParticipantInConversationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
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
  > {
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
