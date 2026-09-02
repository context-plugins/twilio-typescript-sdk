import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createQueue(
    request: Api20100401Queue.CreateQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountQueue, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "MaxSize", value: request.maxSize, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteQueue(
    request: Api20100401Queue.DeleteQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchQueue(
    request: Api20100401Queue.FetchQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountQueue, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listQueue(
    request: Api20100401Queue.ListQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ListQueueResponse, ResponseError> {
    return this.#rawClient.execute<ListQueueResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listQueueResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateQueue(
    request: Api20100401Queue.UpdateQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueue, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountQueue, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "MaxSize", value: request.maxSize, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Queue {
  export type CreateQueueRequest = {
    accountSid: string;
    friendlyName: string;
    maxSize?: number;
  };

  export type DeleteQueueRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchQueueRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListQueueRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateQueueRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
    maxSize?: number;
  };
}
