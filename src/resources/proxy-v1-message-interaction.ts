import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listMessageInteractionResponseSchema,
  type ListMessageInteractionResponse,
} from "../models/list-message-interaction-response.js";
import {
  proxyV1ServiceSessionParticipantMessageInteractionSchema,
  type ProxyV1ServiceSessionParticipantMessageInteraction,
} from "../models/proxy-v1-service-session-participant-message-interaction.js";
import type { Servers } from "../servers.js";

export class ProxyV1MessageInteraction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createMessageInteraction(
    request: ProxyV1MessageInteraction.CreateMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "MediaUrl", value: request.mediaUrl, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantMessageInteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchMessageInteraction(
    request: ProxyV1MessageInteraction.FetchMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSessionParticipantMessageInteraction, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantMessageInteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMessageInteraction(
    request: ProxyV1MessageInteraction.ListMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessageInteractionResponse, ResponseError> {
    return this.#rawClient.execute<ListMessageInteractionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessageInteractionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1MessageInteraction {
  export type CreateMessageInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    participantSid: string;
    body2?: string;
    mediaUrl?: string[];
  };

  export type FetchMessageInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    participantSid: string;
    sid: string;
  };

  export type ListMessageInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    participantSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
