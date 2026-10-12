import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listChannelSenderResponseSchema,
  type ListChannelSenderResponse,
} from "../models/list-channel-sender-response.js";
import {
  messagingV1ServiceChannelSenderSchema,
  type MessagingV1ServiceChannelSender,
} from "../models/messaging-v1-service-channel-sender.js";
import type { Servers } from "../servers.js";

export class MessagingV1ChannelSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to read, fetch all Channel Senders associated with a Messaging
   * Service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannelSender(
    request: MessagingV1ChannelSender.CreateChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceChannelSender, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "formUrlEncoded", value: [{ name: "Sid", value: request.sid, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceChannelSenderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to read, fetch all Channel Senders associated with a Messaging
   * Service.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannelSender(
    request: MessagingV1ChannelSender.DeleteChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
   * A Messaging Service resource to read, fetch all Channel Senders associated with a Messaging
   * Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchChannelSender(
    request: MessagingV1ChannelSender.FetchChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceChannelSender, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceChannelSenderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to read, fetch all Channel Senders associated with a Messaging
   * Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChannelSender(
    request: MessagingV1ChannelSender.ListChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1ChannelSender {
  export type CreateChannelSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create
     * the resource under.
     */
    messagingServiceSid: string;
    /** The SID of the Channel Sender being added to the Service. */
    sid: string;
  };

  export type DeleteChannelSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete
     * the resource from.
     */
    messagingServiceSid: string;
    /** The SID of the Channel Sender resource to delete. */
    sid: string;
  };

  export type FetchChannelSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the
     * resource from.
     */
    messagingServiceSid: string;
    /** The SID of the ChannelSender resource to fetch. */
    sid: string;
  };

  export type ListChannelSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the
     * resources from.
     */
    messagingServiceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
