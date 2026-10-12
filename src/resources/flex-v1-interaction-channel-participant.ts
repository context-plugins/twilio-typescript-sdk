import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Add a Participant to a Channel.
   *
   * @remarks
   * Add a Participant to a Channel.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.CreateInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all Participants for a Channel.
   *
   * @remarks
   * List all Participants for a Channel.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.ListInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelParticipantResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionChannelParticipantResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing Channel Participant.
   *
   * @remarks
   * Update an existing Channel Participant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInteractionChannelParticipant(
    request: FlexV1InteractionChannelParticipant.UpdateInteractionChannelParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannelParticipant {
  export type CreateInteractionChannelParticipantRequest = {
    /** The Interaction Sid for the new Channel Participant. */
    interactionSid: string;
    /** The Channel Sid for the new Channel Participant. */
    channelSid: string;
    /** Participant type. Can be: `agent`, `customer`, `supervisor`, `external`, `unknown` */
    type: InteractionChannelParticipantEnumType;
    /** JSON representing the Media Properties for the new Participant. */
    mediaProperties: Record<string, unknown>;
    /** Object representing the Routing Properties for the new Participant. */
    routingProperties?: Record<string, unknown>;
  };

  export type ListInteractionChannelParticipantRequest = {
    /** The Interaction Sid for this channel. */
    interactionSid: string;
    /** The Channel Sid for this Participant. */
    channelSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateInteractionChannelParticipantRequest = {
    /** The Interaction Sid for this channel. */
    interactionSid: string;
    /** The Channel Sid for this Participant. */
    channelSid: string;
    /** The unique string created by Twilio to identify an Interaction Channel resource. */
    sid: string;
    status: InteractionChannelParticipantEnumStatus;
  };
}
