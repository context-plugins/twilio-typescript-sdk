import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Error notifications for calls
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCallNotification(
    request: Api20100401CallNotification.FetchCallNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallNotificationInstance, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallNotificationInstanceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Error notifications for calls
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCallNotification(
    request: Api20100401CallNotification.ListCallNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallNotificationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [
          { name: "Log", value: request.log, schema: s.optional(s.int()) },
          { name: "MessageDate", value: request.messageDate, schema: s.optional(s.dateOnly()) },
          { name: "MessageDate<", value: request.messageDateQuery, schema: s.optional(s.dateOnly()) },
          { name: "MessageDate>", value: request.messageDateQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallNotificationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401CallNotification {
  export type FetchCallNotificationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * Notification resource to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification
     * resource to fetch.
     */
    callSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Call Notification resource to fetch.
     */
    sid: string;
  };

  export type ListCallNotificationRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call
     * Notification resources to read.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification
     * resources to read.
     */
    callSid: string;
    /**
     * Only read notifications of the specified log level. Can be: `0` to read only ERROR
     * notifications or `1` to read only WARNING notifications. By default, all notifications are
     * read.
     */
    log?: number;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also
     * specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a
     * date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDate?: string;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also
     * specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a
     * date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDateQuery?: string;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also
     * specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a
     * date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDateQueryQuery?: string;
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
