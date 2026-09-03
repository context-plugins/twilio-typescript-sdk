import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountNotificationInstanceSchema,
  type ApiV2010AccountNotificationInstance,
} from "../models/api-v2010-account-notification-instance.js";
import {
  listNotificationResponseSchema,
  type ListNotificationResponse,
} from "../models/list-notification-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Notification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchNotification(
    request: Api20100401Notification.FetchNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountNotificationInstance, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountNotificationInstance, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountNotificationInstanceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listNotification(
    request: Api20100401Notification.ListNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListNotificationResponse, ResponseError> {
    return this.#rawClient.execute<ListNotificationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Notifications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "Log", value: request.log, schema: s.optional(s.number()) },
          { name: "MessageDate", value: request.messageDate, schema: s.optional(s.dateOnly()) },
          { name: "MessageDate<", value: request.messageDateQuery, schema: s.optional(s.dateOnly()) },
          { name: "MessageDate>", value: request.messageDateQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listNotificationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Notification {
  export type FetchNotificationRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListNotificationRequest = {
    accountSid: string;
    log?: number;
    messageDate?: string;
    messageDateQuery?: string;
    messageDateQueryQuery?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
