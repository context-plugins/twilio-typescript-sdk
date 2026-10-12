import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flexV1InteractionSchema, type FlexV1Interaction } from "../models/flex-v1-interaction.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Interaction.
   *
   * @remarks
   * Create a new Interaction.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInteraction(
    request: FlexV1InteractionApi.CreateInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Interactions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Channel", value: request.channel, schema: s.record(s.string(), s.unknown()) },
            {
              name: "Routing",
              value: request.routing,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            {
              name: "InteractionContextSid",
              value: request.interactionContextSid,
              schema: s.optional(s.string()),
            },
            { name: "WebhookTtid", value: request.webhookTtid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchInteraction2(
    request: FlexV1InteractionApi.FetchInteraction2Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates an interaction.
   *
   * @remarks
   * Updates an interaction.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInteraction(
    request: FlexV1InteractionApi.UpdateInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "WebhookTtid", value: request.webhookTtid, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionApi {
  export type CreateInteractionRequest = {
    /** The Interaction's channel. */
    channel: Record<string, unknown>;
    /** The Interaction's routing logic. */
    routing?: Record<string, unknown>;
    /** The Interaction context sid is used for adding a context lookup sid */
    interactionContextSid?: string;
    /** The unique identifier for Interaction level webhook */
    webhookTtid?: string;
  };

  export type FetchInteraction2Request = {
    /** The SID of the Interaction resource to fetch. */
    sid: string;
  };

  export type UpdateInteractionRequest = {
    /** The SID of the Interaction resource to fetch. */
    sid: string;
    /** The unique identifier for Interaction level webhook */
    webhookTtid?: string;
  };
}
