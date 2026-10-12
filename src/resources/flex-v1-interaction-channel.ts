import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InteractionInteractionChannelSchema,
  type FlexV1InteractionInteractionChannel,
} from "../models/flex-v1-interaction-interaction-channel.js";
import {
  interactionChannelEnumUpdateChannelStatusSchema,
  type InteractionChannelEnumUpdateChannelStatus,
} from "../models/interaction-channel-enum-update-channel-status.js";
import {
  listInteractionChannelResponseSchema,
  type ListInteractionChannelResponse,
} from "../models/list-interaction-channel-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionChannel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a Channel for an Interaction.
   *
   * @remarks
   * Fetch a Channel for an Interaction.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInteractionChannel(
    request: FlexV1InteractionChannel.FetchInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all Channels for an Interaction.
   *
   * @remarks
   * List all Channels for an Interaction.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInteractionChannel(
    request: FlexV1InteractionChannel.ListInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "InteractionSid", value: request.interactionSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionChannelResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing Interaction Channel.
   *
   * @remarks
   * Update an existing Interaction Channel.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInteractionChannel(
    request: FlexV1InteractionChannel.UpdateInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: interactionChannelEnumUpdateChannelStatusSchema,
            },
            {
              name: "Routing",
              value: request.routing,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannel {
  export type FetchInteractionChannelRequest = {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource, prefixed
     * with UO.
     */
    sid: string;
  };

  export type ListInteractionChannelRequest = {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateInteractionChannelRequest = {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource, prefixed
     * with UO.
     */
    sid: string;
    status: InteractionChannelEnumUpdateChannelStatus;
    /**
     * It changes the state of associated tasks. Routing status is required, When the channel status
     * is set to `inactive`. Allowed Value for routing status is `closed`. Otherwise Optional, if
     * not specified, all tasks will be set to `wrapping`.
     */
    routing?: Record<string, unknown>;
  };
}
