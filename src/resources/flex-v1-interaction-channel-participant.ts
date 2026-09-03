import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InteractionInteractionChannelInteractionChannelParticipantSchema,
  type FlexV1InteractionInteractionChannelInteractionChannelParticipant,
} from "../models/flex-v1-interaction-interaction-channel-interaction-channel-participant.js";
import {
  interactionChannelParticipantEnumStatusSchema,
  type InteractionChannelParticipantEnumStatus,
} from "../models/interaction-channel-participant-enum-status.js";
import {
  interactionChannelParticipantEnumTypeSchema,
  type InteractionChannelParticipantEnumType,
} from "../models/interaction-channel-participant-enum-type.js";
import {
  listInteractionChannelParticipantResponseSchema,
  type ListInteractionChannelParticipantResponse,
} from "../models/list-interaction-channel-participant-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionChannelParticipant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.CreateInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Type", value: request.type, schema: interactionChannelParticipantEnumTypeSchema },
            {
              name: "MediaProperties",
              value: request.mediaProperties,
              schema: s.record(s.string(), s.unknown()),
            },
            {
              name: "RoutingProperties",
              value: request.routingProperties,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: flexV1InteractionInteractionChannelInteractionChannelParticipantSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.ListInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListInteractionChannelParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionChannelParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.UpdateInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: interactionChannelParticipantEnumStatusSchema },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: flexV1InteractionInteractionChannelInteractionChannelParticipantSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannelParticipant {
  export type CreateInteractionChannelParticipantRequest = {
    interactionSid: string;
    channelSid: string;
    type: InteractionChannelParticipantEnumType;
    mediaProperties: Record<string, unknown>;
    routingProperties?: Record<string, unknown>;
  };

  export type ListInteractionChannelParticipantRequest = {
    interactionSid: string;
    channelSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateInteractionChannelParticipantRequest = {
    interactionSid: string;
    channelSid: string;
    sid: string;
    status: InteractionChannelParticipantEnumStatus;
  };
}
