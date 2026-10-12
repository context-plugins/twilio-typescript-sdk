import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InteractionInteractionChannelInteractionTransferSchema,
  type FlexV1InteractionInteractionChannelInteractionTransfer,
} from "../models/flex-v1-interaction-interaction-channel-interaction-transfer.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionTransfer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Transfer.
   *
   * @remarks
   * Create a new Transfer.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInteractionTransfer(
    request: FlexV1InteractionTransfer.CreateInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Transfer by SID.
   *
   * @remarks
   * Fetch a specific Transfer by SID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInteractionTransfer(
    request: FlexV1InteractionTransfer.FetchInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing Transfer.
   *
   * @remarks
   * Update an existing Transfer.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInteractionTransfer(
    request: FlexV1InteractionTransfer.UpdateInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionTransfer {
  export type CreateInteractionTransferRequest = {
    /** The Interaction Sid for the Interaction */
    interactionSid: string;
    /** The Channel Sid for the Channel. */
    channelSid: string;
    body?: Record<string, unknown>;
  };

  export type FetchInteractionTransferRequest = {
    /** The Interaction Sid for this channel. */
    interactionSid: string;
    /** The Channel Sid for this Transfer. */
    channelSid: string;
    /** The unique string created by Twilio to identify a Transfer resource. */
    sid: string;
  };

  export type UpdateInteractionTransferRequest = {
    /** The Interaction Sid for this channel. */
    interactionSid: string;
    /** The Channel Sid for this Transfer. */
    channelSid: string;
    /** The unique string created by Twilio to identify a Transfer resource. */
    sid: string;
    body?: Record<string, unknown>;
  };
}
