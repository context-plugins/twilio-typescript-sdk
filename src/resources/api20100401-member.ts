import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchMember(
    request: Api20100401Member.FetchMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueueMember, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountQueueMember, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountQueueMemberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMember(
    request: Api20100401Member.ListMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMemberResponse, ResponseError> {
    return this.#rawClient.execute<ListMemberResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMemberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateMember(
    request: Api20100401Member.UpdateMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountQueueMember, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountQueueMember, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "QueueSid", value: request.queueSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Member {
  export type FetchMemberRequest = {
    accountSid: string;
    queueSid: string;
    callSid: string;
  };

  export type ListMemberRequest = {
    accountSid: string;
    queueSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateMemberRequest = {
    accountSid: string;
    queueSid: string;
    callSid: string;
    url: string;
    method?: Method2;
  };
}
