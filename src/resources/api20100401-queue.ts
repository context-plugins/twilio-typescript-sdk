import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV2010AccountQueueSchema, type ApiV2010AccountQueue } from "../models/api-v2010-account-queue.js";
import { listQueueResponseSchema, type ListQueueResponse } from "../models/list-queue-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Queue {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a queue
   *
   * @remarks
   * Create a queue
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQueue(
    request: Api20100401Queue.CreateQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "MaxSize", value: request.maxSize, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an empty queue
   *
   * @remarks
   * Remove an empty queue
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteQueue(
    request: Api20100401Queue.DeleteQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch an instance of a queue identified by the QueueSid
   *
   * @remarks
   * Fetch an instance of a queue identified by the QueueSid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchQueue(
    request: Api20100401Queue.FetchQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of queues belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of queues belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueue(
    request: Api20100401Queue.ListQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ListQueueResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listQueueResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the queue with the new parameters
   *
   * @remarks
   * Update the queue with the new parameters
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateQueue(
    request: Api20100401Queue.UpdateQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "MaxSize", value: request.maxSize, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Queue {
  export type CreateQueueRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64
     * characters long.
     */
    friendlyName: string;
    /**
     * The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is
     * 5000.
     */
    maxSize?: number;
  };

  export type DeleteQueueRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue
     * resource to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Queue resource to delete */
    sid: string;
  };

  export type FetchQueueRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue
     * resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Queue resource to fetch */
    sid: string;
  };

  export type ListQueueRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue
     * resources to read.
     */
    accountSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateQueueRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue
     * resource to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Queue resource to update */
    sid: string;
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64
     * characters long.
     */
    friendlyName?: string;
    /**
     * The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is
     * 5000.
     */
    maxSize?: number;
  };
}
