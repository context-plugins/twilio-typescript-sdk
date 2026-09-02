import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountCallCallNotificationInstanceSchema,
  type ApiV2010AccountCallCallNotificationInstance,
} from "../models/api-v2010-account-call-call-notification-instance.js";
import {
  listCallNotificationResponseSchema,
  type ListCallNotificationResponse,
} from "../models/list-call-notification-response.js";
import type { Servers } from "../servers.js";

export class Api20100401CallNotification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchCallNotification(
    request: Api20100401CallNotification.FetchCallNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallNotificationInstance, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallCallNotificationInstance, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallNotificationInstanceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCallNotification(
    request: Api20100401CallNotification.ListCallNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallNotificationResponse, ResponseError> {
    return this.#rawClient.execute<ListCallNotificationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        success: { kind: "json", schema: listCallNotificationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401CallNotification {
  export type FetchCallNotificationRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
  };

  export type ListCallNotificationRequest = {
    accountSid: string;
    callSid: string;
    log?: number;
    messageDate?: string;
    messageDateQuery?: string;
    messageDateQueryQuery?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
