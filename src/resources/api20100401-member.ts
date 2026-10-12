import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountQueueMemberSchema,
  type ApiV2010AccountQueueMember,
} from "../models/api-v2010-account-queue-member.js";
import { listMemberResponseSchema, type ListMemberResponse } from "../models/list-member-response.js";
import { method2Schema, type Method2 } from "../models/method2.js";
import type { Servers } from "../servers.js";

export class Api20100401Member {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a specific member from the queue
   *
   * @remarks
   * Fetch a specific member from the queue
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchMember(
    request: Api20100401Member.FetchMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueueMember, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueMemberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve the members of the queue
   *
   * @remarks
   * Retrieve the members of the queue
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMember(
    request: Api20100401Member.ListMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMemberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMemberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Dequeue a member from a queue and have the member's call begin executing the TwiML document at
   * that URL
   *
   * @remarks
   * Dequeue a member from a queue and have the member's call begin executing the TwiML document at
   * that URL
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMember(
    request: Api20100401Member.UpdateMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueueMember, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Url", value: request.url, schema: s.string() },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => method2Schema)) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueMemberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Member {
  export type FetchMemberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member
     * resource(s) to fetch.
     */
    accountSid: string;
    /** The SID of the Queue in which to find the members to fetch. */
    queueSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to
     * fetch.
     */
    callSid: string;
  };

  export type ListMemberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member
     * resource(s) to read.
     */
    accountSid: string;
    /** The SID of the Queue in which to find the members */
    queueSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateMemberRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member
     * resource(s) to update.
     */
    accountSid: string;
    /** The SID of the Queue in which to find the members to update. */
    queueSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to
     * update.
     */
    callSid: string;
    /** The absolute URL of the Queue resource. */
    url: string;
    /**
     * How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST`
     * sends the data as encoded form data and `GET` sends the data as query parameters.
     */
    method?: Method2;
  };
}
