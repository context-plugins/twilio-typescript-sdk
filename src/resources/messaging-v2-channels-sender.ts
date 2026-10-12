import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listChannelsSenderResponseSchema,
  type ListChannelsSenderResponse,
} from "../models/list-channels-sender-response.js";
import {
  messagingV2ChannelsSenderRequestsCreateSchema,
  type MessagingV2ChannelsSenderRequestsCreate,
} from "../models/messaging-v2-channels-sender-requests-create.js";
import {
  messagingV2ChannelsSenderRequestsUpdateSchema,
  type MessagingV2ChannelsSenderRequestsUpdate,
} from "../models/messaging-v2-channels-sender-requests-update.js";
import {
  messagingV2ChannelsSenderResponseSchema,
  type MessagingV2ChannelsSenderResponse,
} from "../models/messaging-v2-channels-sender-response.js";
import type { Servers } from "../servers.js";

export class MessagingV2ChannelsSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Sender
   *
   * @remarks
   * Create a Sender.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannelsSender(
    request: MessagingV2ChannelsSender.CreateChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v2/Channels/Senders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: messagingV2ChannelsSenderRequestsCreateSchema },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Sender
   *
   * @remarks
   * (WhatsApp only) Delete a Sender.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannelsSender(
    request: MessagingV2ChannelsSender.DeleteChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a Sender
   *
   * @remarks
   * Retrieve a Sender.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchChannelsSender(
    request: MessagingV2ChannelsSender.FetchChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Senders
   *
   * @remarks
   * Retrieve a list of Senders for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChannelsSender(
    request: MessagingV2ChannelsSender.ListChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelsSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v2/Channels/Senders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Channel", value: request.channel, schema: s.string() },
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelsSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a sender's information, including `profile`, `webhook`, and `configuration`.
   *
   * @remarks
   * (WhatsApp only) Update a Sender. You can update a sender's information, including `profile`,
   * `webhook`, and `configuration`. To verify a phone number, set `configuration.verification_code`
   * to the One-time Password (OTP) that you received.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateChannelsSender(
    request: MessagingV2ChannelsSender.UpdateChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => messagingV2ChannelsSenderRequestsUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV2ChannelsSender {
  export type CreateChannelsSenderRequest = {
    body: MessagingV2ChannelsSenderRequestsCreate;
  };

  export type DeleteChannelsSenderRequest = {
    /** The SID of the sender. */
    sid: string;
  };

  export type FetchChannelsSenderRequest = {
    /** The SID of the sender. */
    sid: string;
  };

  export type ListChannelsSenderRequest = {
    channel: string;
    /** The number of items to return per page. For WhatsApp, the default is `20`. @default 50 */
    pageSize?: number;
    /** The page index. Use only for client state. */
    page?: number;
    /** The page token provided by the API. */
    pageToken?: string;
  };

  export type UpdateChannelsSenderRequest = {
    /** The SID of the sender. */
    sid: string;
    body?: MessagingV2ChannelsSenderRequestsUpdate;
  };
}
